# Krypton — Premium Digital Agency Landing Site

## Original Problem Statement
User (French) asked for a premium landing site called "Krypton" to promote his services: custom website creation, mobile app development, AI chatbot development, for all sectors (restaurants, plumbers, agencies, hairdressers, beauticians, sports coaches, therapists, medical, e-commerce, finance/accounting, digital marketing, real estate, legal). Must include the provided Krypton logo (K letter with electric blue + violet gradient on black), use "magnificent premium colors" matching the logo, a beautiful professional design that converts, a "Contact us" section with WhatsApp number 0033650015167, a strong fluid design, sector icons (e.g. scissors for hairdressers, table for restaurants), an integrated AI chatbot domain-restricted to the agency's services, beautiful website examples in portfolio, testimonials, and multilingual support (FR/EN/AR/Darija Morocco) based on browser language.

## Architecture
- FastAPI backend (/api prefix) — Claude Sonnet 4.5 via emergentintegrations (EMERGENT_LLM_KEY)
- React frontend — TailwindCSS + framer-motion + lucide-react
- MongoDB — chat_messages, contact_leads
- Multilingual client-side i18n (FR/EN/AR/Darija) with browser auto-detection + manual switcher

## User Personas
- Small-business owners (restaurants, hairdressers, plumbers) needing a site + booking
- Medical practices needing secure patient platforms
- E-commerce brands needing online store + mobile app
- Any sector wanting a chatbot / website / mobile app

## Core Requirements (Static)
- Premium dark UI with neon blue/violet accents matching the Krypton logo
- Fully responsive (mobile / tablet / desktop)
- Multilingual (FR/EN/AR/Darija) with RTL support
- WhatsApp CTA everywhere (number +33 6 50 01 51 67)
- AI chatbot restricted to Krypton-related questions
- Portfolio with sector examples
- Testimonials section
- Fast, SEO-friendly

## Implementation Status (2025-12)
- [x] Backend /api/chat with Claude Sonnet 4.5 multilingual + domain-restricted system prompt
- [x] Backend /api/contact (create & list) with Mongo persistence
- [x] Frontend landing page: Header + Hero + Services + 13 Sectors + 6 Portfolio items + 4-step Process + 5 Reviews + Contact + Footer
- [x] Floating WhatsApp button + animated glowing Chatbot trigger
- [x] Language switcher (auto-detect + manual) with RTL for AR/Darija
- [x] Contact form → saves lead + opens WhatsApp prefilled
- [x] Markdown stripped in chatbot bubbles
- [x] Hero "Discuter avec l'IA" button opens chatbot panel
- [x] Testing agent: 100% backend, 95% frontend

## Backlog / Next Actions
- P1: Add an animated testimonials carousel with auto-rotation (currently static grid)
- P1: Add a pricing / packages section ("Starter / Pro / Enterprise" with "sur devis" options)
- P2: Add a blog / resources section for SEO
- P2: Add Google Analytics / Meta Pixel
- P2: Replace Unsplash portfolio images with real client mockups once provided
- P2: Add an email notification (Resend/SendGrid) for new /api/contact submissions
- P3: Add a simple admin page (password-protected) to view received leads

## Credentials
- EMERGENT_LLM_KEY: configured in /app/backend/.env
- WhatsApp number: +33 6 50 01 51 67 (hardcoded in frontend data.js — WHATSAPP_NUMBER)
