from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

app = FastAPI()
api_router = APIRouter(prefix="/api")


# -------------------- Models --------------------
class ChatRequest(BaseModel):
    session_id: Optional[str] = None
    message: str
    language: Optional[str] = "fr"  # fr, en, ar, darija


class ChatResponse(BaseModel):
    session_id: str
    reply: str


class ContactLead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    sector: Optional[str] = None
    project_type: Optional[str] = None
    message: str
    language: Optional[str] = "fr"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactLeadCreate(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    sector: Optional[str] = None
    project_type: Optional[str] = None
    message: str
    language: Optional[str] = "fr"


# -------------------- System Prompts (multilingual) --------------------
def get_system_prompt(language: str) -> str:
    prompts = {
        "fr": """Tu es Krypton AI, l'assistant virtuel officiel de Krypton — une agence digitale premium spécialisée dans la création de sites web, d'applications mobiles et de chatbots IA sur mesure.

RÈGLE IMPORTANTE : Tu réponds UNIQUEMENT aux questions concernant les services de Krypton. Si l'utilisateur pose une question hors sujet (actualités, météo, blagues générales, conseils de vie, etc.), redirige-le poliment vers nos services.

SERVICES KRYPTON :
• Sites internet vitrines, e-commerce, sur mesure
• Applications mobiles iOS / Android
• Chatbots IA intelligents (comme moi)
• Design UX/UI premium, hébergement, maintenance

SECTEURS COUVERTS : Restaurants, Plombiers, Agences, Coiffeurs, Esthéticiennes, Coach sportifs, Thérapeutes, Médical, E-commerce, Finance/Comptabilité, Marketing digital, Immobilier, Juridique — et tous les secteurs.

CONTACT : WhatsApp +33 6 50 01 51 67

TON : Chaleureux, professionnel, rassurant. Rassure le client, propose de le mettre en relation via WhatsApp si besoin. Réponses courtes et claires (3-5 phrases max sauf si question technique).

IMPORTANT : Réponds TOUJOURS en français.""",

        "en": """You are Krypton AI, the official virtual assistant of Krypton — a premium digital agency specialized in creating websites, mobile apps and AI chatbots.

IMPORTANT RULE: You ONLY answer questions about Krypton's services. If the user asks anything off-topic (news, weather, general jokes, life advice, etc.), politely redirect them to our services.

KRYPTON SERVICES:
• Websites: showcase, e-commerce, custom
• Mobile apps iOS / Android
• Smart AI chatbots (like me)
• Premium UX/UI design, hosting, maintenance

SECTORS: Restaurants, Plumbers, Agencies, Hairdressers, Beauticians, Sports coaches, Therapists, Medical, E-commerce, Finance/Accounting, Digital Marketing, Real Estate, Legal — and any sector.

CONTACT: WhatsApp +33 6 50 01 51 67

TONE: Warm, professional, reassuring. Offer to connect via WhatsApp if needed. Keep answers short (3-5 sentences max unless technical).

IMPORTANT: ALWAYS respond in English.""",

        "ar": """أنت Krypton AI، المساعد الافتراضي الرسمي لوكالة Krypton — وكالة رقمية متميزة متخصصة في إنشاء المواقع الإلكترونية وتطبيقات الجوال وروبوتات المحادثة الذكية.

قاعدة مهمة: أنت تجيب فقط على الأسئلة المتعلقة بخدمات Krypton. إذا طرح المستخدم سؤالاً خارج الموضوع (أخبار، طقس، نكات عامة، نصائح حياتية)، أعد توجيهه بأدب إلى خدماتنا.

خدمات Krypton:
• مواقع إلكترونية: عرض، تجارة إلكترونية، مخصصة
• تطبيقات جوال iOS / Android
• روبوتات محادثة ذكية (مثلي)
• تصميم UX/UI متميز، استضافة، صيانة

القطاعات: المطاعم، السباكون، الوكالات، مصففو الشعر، خبراء التجميل، مدربو الرياضة، المعالجون، الطب، التجارة الإلكترونية، المالية/المحاسبة، التسويق الرقمي، العقارات، القانون.

للتواصل: واتساب +33 6 50 01 51 67

النبرة: دافئة، مهنية، مطمئنة. اعرض التواصل عبر واتساب عند الحاجة. إجابات قصيرة (3-5 جمل كحد أقصى).

مهم: أجب دائماً باللغة العربية الفصحى.""",

        "darija": """أنتَ Krypton AI، المساعد الرسمي ديال Krypton — وكالة رقمية متخصصة فصناعة السيتات، التطبيقات، والشاتبوتات الذكية.

قاعدة مهمة: كتجاوب غير على الأسئلة لي كتخص خدمات Krypton. إلى سولك الزبون على حاجة أخرى (أخبار، الجو، نكت، نصائح)، رجعو بلطافة لخدماتنا.

خدمات Krypton:
• سيتات: فيترين، تجارة إلكترونية، مخصصة
• تطبيقات موبايل iOS / Android
• شاتبوتات ذكية (بحالي)
• تصميم UX/UI، استضافة، صيانة

القطاعات: ريسطورات، بلومبيي، وكالات، كوافور، ستيتيسيان، كوتشات ديال الرياضة، تيرابوتات، طب، تجارة إلكترونية، محاسبة، ماركتينغ ديجيتال، عقار، قانون.

للتواصل: واتساب +33 6 50 01 51 67

النبرة: حنينة، محترفة، مطمئنة. عرض على الزبون يتواصل معانا ف WhatsApp إلى بغا. جاوب قصير (3-5 جمل).

مهم: جاوب ديما بالدارجة المغربية."""
    }
    return prompts.get(language, prompts["fr"])


# -------------------- Routes --------------------
@api_router.get("/")
async def root():
    return {"message": "Krypton API is alive", "status": "ok"}


@api_router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    session_id = req.session_id or str(uuid.uuid4())
    language = req.language if req.language in ["fr", "en", "ar", "darija"] else "fr"

    try:
        # Persist user message
        await db.chat_messages.insert_one({
            "session_id": session_id,
            "role": "user",
            "content": req.message,
            "language": language,
            "created_at": datetime.now(timezone.utc).isoformat()
        })

        # Load prior conversation (short context window)
        history_docs = await db.chat_messages.find(
            {"session_id": session_id},
            {"_id": 0}
        ).sort("created_at", 1).to_list(30)

        system_prompt = get_system_prompt(language)

        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=system_prompt
        ).with_model("anthropic", "claude-sonnet-4-5-20250929")

        # Rebuild history for Claude via successive send_message calls is not efficient.
        # Instead, embed recent history into the single user message payload.
        prior_turns = history_docs[:-1][-10:]  # last 10 turns before current
        history_text = ""
        if prior_turns:
            history_text = "\n\nContexte de la conversation précédente (pour information seulement) :\n"
            for m in prior_turns:
                role_label = "Utilisateur" if m["role"] == "user" else "Assistant"
                history_text += f"{role_label}: {m['content']}\n"
            history_text += "\nRéponds maintenant au dernier message de l'utilisateur :\n"

        user_msg = UserMessage(text=(history_text + req.message).strip())
        reply_text = await chat.send_message(user_msg)

        # Persist assistant reply
        await db.chat_messages.insert_one({
            "session_id": session_id,
            "role": "assistant",
            "content": reply_text,
            "language": language,
            "created_at": datetime.now(timezone.utc).isoformat()
        })

        return ChatResponse(session_id=session_id, reply=reply_text)

    except Exception as e:
        logging.exception("Chat error")
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")


@api_router.post("/contact", response_model=ContactLead)
async def create_contact(payload: ContactLeadCreate):
    lead = ContactLead(**payload.model_dump())
    doc = lead.model_dump()
    await db.contact_leads.insert_one(doc)
    return lead


@api_router.get("/contact", response_model=List[ContactLead])
async def list_contacts():
    leads = await db.contact_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return leads


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
