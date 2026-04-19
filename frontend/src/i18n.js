// Multilingual translations for Krypton
// Languages: fr (French), en (English), ar (Arabic), darija (Moroccan Arabic)

export const LANGS = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "darija", label: "الدارجة", flag: "🇲🇦" },
];

export function detectLang() {
  if (typeof navigator === "undefined") return "fr";
  const saved = typeof window !== "undefined" ? window.localStorage.getItem("krypton_lang") : null;
  if (saved && ["fr", "en", "ar", "darija"].includes(saved)) return saved;

  const raw = (navigator.language || "fr").toLowerCase();
  // Morocco → darija
  if (raw.includes("ma") || raw.includes("mar")) return "darija";
  if (raw.startsWith("ar")) return "ar";
  if (raw.startsWith("en")) return "en";
  return "fr";
}

export const translations = {
  fr: {
    dir: "ltr",
    nav: {
      services: "Services",
      sectors: "Secteurs",
      portfolio: "Réalisations",
      process: "Méthode",
      reviews: "Avis",
      contact: "Contact",
      start: "Démarrer",
    },
    hero: {
      tag: "AGENCE DIGITALE PREMIUM",
      title_1: "Votre présence",
      title_2: "digitale de demain.",
      subtitle: "Krypton crée des sites internet, applications mobiles et chatbots sur mesure pour tous les secteurs. Design premium, performance, résultats.",
      cta_whatsapp: "Parler sur WhatsApp",
      cta_chat: "Discuter avec l'assistant Krypton",
      stat_1: "Projets livrés",
      stat_2: "Secteurs couverts",
      stat_3: "Satisfaction client",
    },
    services: {
      tag: "CE QUE NOUS FAISONS",
      title: "Des créations sur mesure, pensées pour convertir.",
      list: [
        { title: "Sites Internet", desc: "Vitrines, e-commerce, sur mesure. Rapides, SEO-friendly, pensés pour vos clients." },
        { title: "Applications Mobiles", desc: "iOS & Android natifs ou hybrides. Une expérience fluide, une marque forte." },
        { title: "Chatbots", desc: "Un assistant intelligent disponible 24/7 qui répond à toutes les questions de vos clients et capture des leads." },
        { title: "Design & Branding", desc: "Identité visuelle premium, logos, UX/UI haut de gamme." },
      ],
    },
    sectors: {
      tag: "NOS SECTEURS",
      title: "On connaît votre métier.",
      subtitle: "Nous créons pour tous les secteurs — avec des templates spécialisés et une vraie compréhension de votre business.",
    },
    portfolio: {
      tag: "RÉALISATIONS",
      title: "Quelques projets dont on est fier.",
      subtitle: "Des sites et applis conçus avec soin pour des clients exigeants.",
    },
    process: {
      tag: "LA MÉTHODE KRYPTON",
      title: "Simple. Clair. Rapide.",
      steps: [
        { n: "01", t: "Brief gratuit", d: "Vous nous contactez sur WhatsApp, on cerne votre projet en 15 minutes." },
        { n: "02", t: "Devis & maquette", d: "Devis transparent et maquette premium adaptée à votre secteur." },
        { n: "03", t: "Travail & tests", d: "On travaille, on teste, on vous implique à chaque étape." },
        { n: "04", t: "Mise en ligne", d: "Lancement, formation, support — votre succès est le nôtre." },
      ],
    },
    reviews: {
      tag: "ILS NOUS FONT CONFIANCE",
      title: "Les avis de nos clients.",
      items: [
        { name: "Amine B.", role: "Restaurant à Casablanca", text: "Site livré en 10 jours, réservations en ligne qui tournent H24. On a doublé les couverts du week-end." },
        { name: "Sophie L.", role: "Salon de coiffure, Paris", text: "Design magnifique, prise de rendez-vous intégrée. Les clientes adorent. Merci l'équipe Krypton !" },
        { name: "Dr. Karim E.", role: "Cabinet médical", text: "Plateforme sécurisée, prise de RDV, chatbot patient. Pro, rapide, à l'écoute." },
        { name: "Yasmine T.", role: "E-commerce mode", text: "Boutique en ligne magnifique + app iOS. Mes ventes ont explosé dès le 1er mois." },
        { name: "Marc D.", role: "Plombier Lyon", text: "Je reçois 5 appels par jour grâce au site + chatbot. Investissement rentabilisé en 3 semaines." },
        { name: "Mélanie R.", role: "Esthéticienne, Marseille", text: "Mon institut a enfin un site à la hauteur de mes soins. Les nouvelles clientes me trouvent sur Google et réservent direct en ligne." },
        { name: "Antoine V.", role: "Coach sportif, Bordeaux", text: "Krypton a créé mon app de suivi et de paiement. Je gagne un temps fou et mes clients adorent l'expérience." },
        { name: "Nawel S.", role: "Agence immobilière, Casablanca", text: "Site ultra rapide avec visites 360° et CRM. On signe plus de mandats depuis la mise en ligne." },
        { name: "Badr M.", role: "Thérapeute, Rabat", text: "Un site rassurant, pro, en arabe et en français. Le chatbot répond aux patients même la nuit. Top." },
      ],
    },
    contact: {
      tag: "PARLONS DE VOTRE PROJET",
      title: "Contactez-nous maintenant.",
      subtitle: "Réponse rapide sur WhatsApp. Devis gratuit sous 24h.",
      form_name: "Votre nom",
      form_phone: "Votre téléphone (optionnel)",
      form_sector: "Votre secteur",
      form_message: "Décrivez votre projet",
      submit: "Envoyer via WhatsApp",
      or: "OU",
      direct_whatsapp: "WhatsApp direct : +33 6 50 01 51 67",
    },
    chatbot: {
      title: "Krypton",
      subtitle: "En ligne — Réponse instantanée",
      placeholder: "Posez-moi une question sur nos services...",
      welcome: "Bonjour 👋 Je suis l'assistant Krypton. Je peux vous expliquer nos services, nos tarifs ou vous mettre en relation avec l'équipe. Que puis-je faire pour vous ?",
      send: "Envoyer",
      thinking: "Krypton réfléchit...",
    },
    footer: {
      tagline: "Sites, apps & chatbots pour tous les secteurs.",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    dir: "ltr",
    nav: { services: "Services", sectors: "Sectors", portfolio: "Work", process: "Process", reviews: "Reviews", contact: "Contact", start: "Start" },
    hero: {
      tag: "PREMIUM DIGITAL AGENCY",
      title_1: "Your digital",
      title_2: "presence of tomorrow.",
      subtitle: "Krypton builds custom websites, mobile apps and chatbots for every industry. Premium design, performance, results.",
      cta_whatsapp: "Chat on WhatsApp",
      cta_chat: "Talk to the Krypton assistant",
      stat_1: "Projects delivered",
      stat_2: "Sectors covered",
      stat_3: "Client satisfaction",
    },
    services: {
      tag: "WHAT WE DO",
      title: "Bespoke creations, built to convert.",
      list: [
        { title: "Websites", desc: "Showcase, e-commerce, custom. Fast, SEO-friendly, built for your customers." },
        { title: "Mobile Apps", desc: "iOS & Android native or hybrid. Smooth experience, strong brand." },
        { title: "Chatbots", desc: "A smart 24/7 assistant that answers every customer question and captures leads." },
        { title: "Design & Branding", desc: "Premium visual identity, logos, high-end UX/UI." },
      ],
    },
    sectors: { tag: "OUR SECTORS", title: "We know your industry.", subtitle: "We build for every sector — with specialized templates and a real understanding of your business." },
    portfolio: { tag: "OUR WORK", title: "A few projects we're proud of.", subtitle: "Websites and apps crafted for demanding clients." },
    process: {
      tag: "THE KRYPTON METHOD",
      title: "Simple. Clear. Fast.",
      steps: [
        { n: "01", t: "Free brief", d: "Reach us on WhatsApp, we scope your project in 15 minutes." },
        { n: "02", t: "Quote & mockup", d: "Transparent quote and premium mockup tailored to your sector." },
        { n: "03", t: "Build & test", d: "We build, we test, we keep you in the loop at every step." },
        { n: "04", t: "Go live", d: "Launch, training, support — your success is ours." },
      ],
    },
    reviews: {
      tag: "TRUSTED BY",
      title: "What our clients say.",
      items: [
        { name: "Amine B.", role: "Restaurant, Casablanca", text: "Site delivered in 10 days, 24/7 online bookings. Weekend covers doubled." },
        { name: "Sophie L.", role: "Hair salon, Paris", text: "Beautiful design, integrated booking. Clients love it. Thanks Krypton team!" },
        { name: "Dr. Karim E.", role: "Medical practice", text: "Secure platform, booking, patient chatbot. Pro, fast, attentive." },
        { name: "Yasmine T.", role: "Fashion e-commerce", text: "Gorgeous online store + iOS app. Sales exploded in the 1st month." },
        { name: "Marc D.", role: "Plumber, Lyon", text: "5 calls a day thanks to the site + chatbot. Paid off in 3 weeks." },
        { name: "Mélanie R.", role: "Beautician, Marseille", text: "My salon finally has a site worthy of my work. New clients find me on Google and book directly online." },
        { name: "Antoine V.", role: "Sports coach, Bordeaux", text: "Krypton built my tracking and payment app. Huge time saver and clients love the experience." },
        { name: "Nawel S.", role: "Real estate agency, Casablanca", text: "Lightning-fast site with 360° tours and CRM. We sign more mandates since launch." },
        { name: "Badr M.", role: "Therapist, Rabat", text: "A reassuring, pro site in Arabic and French. The chatbot answers patients even at night. Excellent." },
      ],
    },
    contact: {
      tag: "LET'S TALK",
      title: "Contact us now.",
      subtitle: "Quick reply on WhatsApp. Free quote within 24h.",
      form_name: "Your name",
      form_phone: "Your phone (optional)",
      form_sector: "Your sector",
      form_message: "Describe your project",
      submit: "Send via WhatsApp",
      or: "OR",
      direct_whatsapp: "Direct WhatsApp: +33 6 50 01 51 67",
    },
    chatbot: {
      title: "Krypton",
      subtitle: "Online — Instant reply",
      placeholder: "Ask me anything about our services...",
      welcome: "Hi 👋 I'm the Krypton assistant. I can explain our services, pricing, or connect you with the team. How can I help?",
      send: "Send",
      thinking: "Krypton is thinking...",
    },
    footer: { tagline: "Websites, apps & chatbots for every industry.", rights: "All rights reserved." },
  },
  ar: {
    dir: "rtl",
    nav: { services: "الخدمات", sectors: "القطاعات", portfolio: "أعمالنا", process: "المنهجية", reviews: "الآراء", contact: "تواصل", start: "ابدأ" },
    hero: {
      tag: "وكالة رقمية متميزة",
      title_1: "حضوركم الرقمي",
      title_2: "للمستقبل.",
      subtitle: "Krypton تصمم مواقع وتطبيقات جوال وروبوتات محادثة مخصصة لكل القطاعات. تصميم فاخر، أداء، نتائج.",
      cta_whatsapp: "تواصل عبر واتساب",
      cta_chat: "تحدث مع مساعد Krypton",
      stat_1: "مشاريع منجزة",
      stat_2: "قطاع مغطى",
      stat_3: "رضا العملاء",
    },
    services: {
      tag: "ما نقدمه",
      title: "إبداعات مخصصة، مصممة للتحويل.",
      list: [
        { title: "مواقع إلكترونية", desc: "عرض، تجارة إلكترونية، مخصصة. سريعة، ملائمة للسيو، مبنية لعملائك." },
        { title: "تطبيقات الجوال", desc: "iOS و Android أصلية أو هجينة. تجربة سلسة، علامة قوية." },
        { title: "روبوتات المحادثة", desc: "مساعد ذكي 24/7 يجيب على كل أسئلة عملائك ويلتقط العملاء المحتملين." },
        { title: "التصميم والهوية", desc: "هوية بصرية فاخرة، شعارات، تصميم UX/UI راقي." },
      ],
    },
    sectors: { tag: "قطاعاتنا", title: "نعرف مجالك.", subtitle: "نصمم لكل القطاعات — مع قوالب متخصصة وفهم حقيقي لأعمالك." },
    portfolio: { tag: "أعمالنا", title: "بعض المشاريع التي نفخر بها.", subtitle: "مواقع وتطبيقات مصممة بعناية لعملاء متطلبين." },
    process: {
      tag: "منهجية Krypton",
      title: "بسيط. واضح. سريع.",
      steps: [
        { n: "01", t: "استشارة مجانية", d: "تواصل معنا عبر واتساب، نفهم مشروعك في 15 دقيقة." },
        { n: "02", t: "عرض سعر ونموذج", d: "عرض شفاف ونموذج أولي متميز يناسب قطاعك." },
        { n: "03", t: "التطوير", d: "نبرمج، نختبر، نُشركك في كل خطوة." },
        { n: "04", t: "الإطلاق", d: "إطلاق، تدريب، دعم — نجاحك هو نجاحنا." },
      ],
    },
    reviews: {
      tag: "يثقون بنا",
      title: "آراء عملائنا.",
      items: [
        { name: "أمين ب.", role: "مطعم، الدار البيضاء", text: "الموقع تم تسليمه في 10 أيام، حجوزات عبر الإنترنت 24/7. تضاعفت الزبائن في عطلات الأسبوع." },
        { name: "صوفي ل.", role: "صالون حلاقة، باريس", text: "تصميم رائع، نظام حجز متكامل. الزبائن يعشقونه. شكراً فريق Krypton!" },
        { name: "د. كريم إ.", role: "عيادة طبية", text: "منصة آمنة، حجز، روبوت محادثة للمرضى. مهني، سريع، منتبه." },
        { name: "ياسمين ت.", role: "تجارة إلكترونية للأزياء", text: "متجر إلكتروني رائع + تطبيق iOS. انفجرت مبيعاتي في الشهر الأول." },
        { name: "مارك د.", role: "سباك، ليون", text: "5 مكالمات يومياً بفضل الموقع + الروبوت. استردت الاستثمار في 3 أسابيع." },
        { name: "ميلاني ر.", role: "خبيرة تجميل، مرسيليا", text: "معهدي أخيراً له موقع يليق بعملي. زبونات جديدات يجدنني على جوجل ويحجزن مباشرة." },
        { name: "أنطوان ف.", role: "مدرب رياضي، بوردو", text: "Krypton صمم لي تطبيق متابعة ودفع. يوفر وقتي ويحب عملاؤه التجربة." },
        { name: "نوال س.", role: "وكالة عقارية، الدار البيضاء", text: "موقع سريع جداً مع جولات 360° و CRM. نوقع المزيد من العقود منذ الإطلاق." },
        { name: "بدر م.", role: "معالج، الرباط", text: "موقع مطمئن ومهني بالعربية والفرنسية. الروبوت يرد على المرضى حتى ليلاً. ممتاز." },
      ],
    },
    contact: {
      tag: "لنتحدث عن مشروعك",
      title: "تواصل معنا الآن.",
      subtitle: "رد سريع على واتساب. عرض سعر مجاني خلال 24 ساعة.",
      form_name: "اسمك",
      form_phone: "هاتفك (اختياري)",
      form_sector: "قطاعك",
      form_message: "صف مشروعك",
      submit: "أرسل عبر واتساب",
      or: "أو",
      direct_whatsapp: "واتساب مباشر: +33 6 50 01 51 67",
    },
    chatbot: {
      title: "Krypton",
      subtitle: "متصل — رد فوري",
      placeholder: "اسألني عن خدماتنا...",
      welcome: "مرحباً 👋 أنا مساعد Krypton. يمكنني شرح خدماتنا وأسعارنا أو ربطك بالفريق. كيف أساعدك؟",
      send: "إرسال",
      thinking: "Krypton يفكر...",
    },
    footer: { tagline: "مواقع وتطبيقات وروبوتات لكل القطاعات.", rights: "جميع الحقوق محفوظة." },
  },
  darija: {
    dir: "rtl",
    nav: { services: "الخدمات", sectors: "القطاعات", portfolio: "خدماتنا", process: "الطريقة", reviews: "الآراء", contact: "تواصل", start: "بدا" },
    hero: {
      tag: "وكالة رقمية بريميوم",
      title_1: "الحضور الرقمي",
      title_2: "ديالك ف المستقبل.",
      subtitle: "Krypton كنصاوبو سيتات، أبليكاسيون، وشاتبوتات ذكية على القياس لكل القطاعات. ديزاين فاخر، سرعة، ونتائج.",
      cta_whatsapp: "تواصل فواتساب",
      cta_chat: "هضر مع الذكاء الاصطناعي",
      stat_1: "مشاريع مسلمة",
      stat_2: "قطاع",
      stat_3: "رضا الزبناء",
    },
    services: {
      tag: "واش كنديرو",
      title: "إبداعات على القياس، مصممة باش تبيع.",
      list: [
        { title: "سيتات إنترنت", desc: "فيترين، تجارة إلكترونية، مخصصة. سريعة، SEO، مصممة للزبناء ديالك." },
        { title: "أبليكاسيون موبايل", desc: "iOS و Android. تجربة سلسة، براند قوي." },
        { title: "شاتبوتات", desc: "مساعد ذكي 24/7 كيجاوب على جميع الأسئلة ديال الزبناء و كيلتقط ليدز." },
        { title: "ديزاين و براندينغ", desc: "هوية بصرية بريميوم، لوغوهات، UX/UI راقي." },
      ],
    },
    sectors: { tag: "القطاعات ديالنا", title: "عارفين المجال ديالك.", subtitle: "كنصاوبو لكل القطاعات — قوالب متخصصة وفهم حقيقي للبيزنس ديالك." },
    portfolio: { tag: "خدماتنا", title: "شي مشاريع كنفتخرو بيهم.", subtitle: "سيتات وأبليكاسيون مصنوعين بعناية لزبناء متطلبين." },
    process: {
      tag: "الطريقة ديال Krypton",
      title: "ساهل. واضح. سريع.",
      steps: [
        { n: "01", t: "استشارة مجانية", d: "تواصل معانا فواتساب، كنفهمو المشروع ف 15 دقيقة." },
        { n: "02", t: "ثمن و موديل", d: "ثمن واضح و موديل بريميوم حسب القطاع ديالك." },
        { n: "03", t: "التطوير", d: "كنكودو، كنختبرو، وكندخلوك معانا ف كل مرحلة." },
        { n: "04", t: "الإطلاق", d: "إطلاق، تكوين، دعم — النجاح ديالك هو النجاح ديالنا." },
      ],
    },
    reviews: {
      tag: "كيثيقو بينا",
      title: "الآراء ديال الزبناء.",
      items: [
        { name: "أمين ب.", role: "ريسطو، كازا", text: "السيت تسلمت ف 10 أيام، الحجوزات خدامة 24/7. الزبناء تضاعفو فويك إند." },
        { name: "صوفي ل.", role: "كوافور، باريس", text: "ديزاين زوين، نظام حجز مدمج. الزبناء كيعشقوه. شكراً فريق Krypton!" },
        { name: "د. كريم إ.", role: "كابيني طبي", text: "منصة آمنة، حجز، شاتبوت للمرضى. بروفيسيونيل، سريع، و كيسمع." },
        { name: "ياسمين ت.", role: "تجارة إلكترونية موضة", text: "متجر إلكتروني زوين + أبليكاسيون iOS. المبيعات تضاعفو فالشهر الأول." },
        { name: "مارك د.", role: "بلومبي، ليون", text: "5 تيليفونات فالنهار بفضل السيت + الشاتبوت. ربحت فلوسي ف 3 سيمانات." },
        { name: "ميلاني ر.", role: "ستيتيسيان، مرسيليا", text: "المعهد ديالي دابا عندو سيت على القد ديالي. زبونات جداد كيلقاوني ف غوغل و كيحجزو ديريكت." },
        { name: "أنطوان ف.", role: "كوتش سبورت، بوردو", text: "Krypton صاوب ليا أبليكاسيون متابعة و خلاص. كيربحني الوقت و الزبناء كيحبوه." },
        { name: "نوال س.", role: "وكالة عقارية، كازا", text: "سيت سريع بزاف مع جولات 360° و CRM. كنوقعو مزيد ديال المانداتو من فوق ما تطلق." },
        { name: "بدر م.", role: "تيرابوت، الرباط", text: "سيت مطمئن، بروفيسيونيل، بالعربية و الفرنسية. الشاتبوت كيجاوب المرضى حتى فالليل. زوين." },
      ],
    },
    contact: {
      tag: "نهضرو على المشروع ديالك",
      title: "تواصل معانا دابا.",
      subtitle: "رد سريع فواتساب. ثمن مجاني ف 24 ساعة.",
      form_name: "السميت ديالك",
      form_phone: "التيليفون (اختياري)",
      form_sector: "القطاع ديالك",
      form_message: "وصف المشروع ديالك",
      submit: "صيفط فواتساب",
      or: "ولا",
      direct_whatsapp: "واتساب مباشر: +33 6 50 01 51 67",
    },
    chatbot: {
      title: "Krypton",
      subtitle: "متصل — رد فوري",
      placeholder: "سولني على الخدمات ديالنا...",
      welcome: "أهلا 👋 أنا مساعد Krypton. نقدر نشرح ليك الخدمات، الأثمنة، ولا نربطك مع الفريق. كيفاش نقدر نعاونك؟",
      send: "صيفط",
      thinking: "Krypton كيفكر...",
    },
    footer: { tagline: "سيتات، أبليكاسيون و شاتبوتات لكل القطاعات.", rights: "جميع الحقوق محفوظة." },
  },
};

export function useT(lang) {
  return translations[lang] || translations.fr;
}
