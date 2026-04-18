"""Backend tests for Krypton API - health, chat, contact endpoints"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestHealth:
    """Health check endpoint"""

    def test_root_alive(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "Krypton" in data.get("message", "") or "alive" in data.get("message", "").lower()
        assert data.get("status") == "ok"


class TestChat:
    """Chat endpoint tests"""

    def test_chat_fr_basic(self):
        r = requests.post(f"{BASE_URL}/api/chat", json={"message": "Bonjour, quels sont vos services?", "language": "fr"})
        assert r.status_code == 200
        data = r.json()
        assert "session_id" in data
        assert "reply" in data
        assert len(data["reply"]) > 10
        # Should mention Krypton or services
        reply_lower = data["reply"].lower()
        assert any(w in reply_lower for w in ["krypton", "service", "web", "mobile", "chatbot"])

    def test_chat_returns_session_id(self):
        r = requests.post(f"{BASE_URL}/api/chat", json={"message": "Quels services proposez-vous?", "language": "fr"})
        assert r.status_code == 200
        session_id = r.json()["session_id"]
        assert isinstance(session_id, str) and len(session_id) > 0

    def test_chat_session_continuity(self):
        # First message
        r1 = requests.post(f"{BASE_URL}/api/chat", json={"message": "Mon nom est Jean.", "language": "fr"})
        assert r1.status_code == 200
        session_id = r1.json()["session_id"]
        # Second message with same session
        r2 = requests.post(f"{BASE_URL}/api/chat", json={"session_id": session_id, "message": "Parlez-moi de vos services web.", "language": "fr"})
        assert r2.status_code == 200
        assert r2.json()["session_id"] == session_id
        assert len(r2.json()["reply"]) > 10

    def test_chat_en_language(self):
        r = requests.post(f"{BASE_URL}/api/chat", json={"message": "What services do you offer?", "language": "en"})
        assert r.status_code == 200
        reply = r.json()["reply"]
        # Should be English response - basic ASCII letters should dominate
        assert len(reply) > 10

    def test_chat_ar_language(self):
        r = requests.post(f"{BASE_URL}/api/chat", json={"message": "ما هي خدماتكم؟", "language": "ar"})
        assert r.status_code == 200
        reply = r.json()["reply"]
        assert len(reply) > 10

    def test_chat_darija_language(self):
        r = requests.post(f"{BASE_URL}/api/chat", json={"message": "شنو هي الخدمات ديالكم؟", "language": "darija"})
        assert r.status_code == 200
        reply = r.json()["reply"]
        assert len(reply) > 10

    def test_chat_offtopic_redirect(self):
        r = requests.post(f"{BASE_URL}/api/chat", json={"message": "What's the weather today in Paris?", "language": "en"})
        assert r.status_code == 200
        reply = r.json()["reply"].lower()
        # Should redirect to Krypton services, not answer weather
        assert any(w in reply for w in ["krypton", "service", "web", "mobile", "help", "assist"])
        # Should NOT contain direct weather answer
        assert "temperature" not in reply and "degrees" not in reply and "sunny" not in reply


class TestContact:
    """Contact lead endpoints"""

    def test_create_contact_full(self):
        payload = {
            "name": "TEST_Jean Dupont",
            "email": "test@example.com",
            "phone": "+33600000000",
            "sector": "restaurant",
            "message": "Je souhaite créer un site web",
            "language": "fr"
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_Jean Dupont"
        assert data["message"] == "Je souhaite créer un site web"
        assert "id" in data
        assert "_id" not in data

    def test_create_contact_minimal(self):
        payload = {"name": "TEST_Minimal", "message": "Intéressé par vos services"}
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_Minimal"
        assert "id" in data

    def test_list_contacts_no_mongo_id(self):
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        leads = r.json()
        assert isinstance(leads, list)
        for lead in leads:
            assert "_id" not in lead

    def test_create_contact_missing_required_fields(self):
        # Missing message - should fail
        r = requests.post(f"{BASE_URL}/api/contact", json={"name": "Test"})
        assert r.status_code == 422
