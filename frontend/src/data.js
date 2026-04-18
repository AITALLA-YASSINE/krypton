// Sectors with Lucide icons and per-language labels
import {
  Utensils, Wrench, Building2, Scissors, Brush, Dumbbell,
  HandHeart, Stethoscope, ShoppingBag, BarChart3, Megaphone, Home, Scale
} from "lucide-react";

export const SECTORS = [
  {
    key: "restaurant",
    icon: Utensils,
    labels: { fr: "Restaurants", en: "Restaurants", ar: "المطاعم", darija: "ريسطورات" },
    desc: {
      fr: "Menus digitaux, réservation, click & collect.",
      en: "Digital menus, booking, click & collect.",
      ar: "قوائم رقمية، حجز، طلب واستلام.",
      darija: "قوائم رقمية، حجز، طلب واستلام."
    },
  },
  {
    key: "plombier",
    icon: Wrench,
    labels: { fr: "Plombiers", en: "Plumbers", ar: "السباكون", darija: "بلومبيي" },
    desc: {
      fr: "Devis en ligne, urgences, avis clients.",
      en: "Online quotes, emergency, reviews.",
      ar: "عروض أسعار، طوارئ، آراء.",
      darija: "عروض أثمنة، طوارئ، آراء."
    },
  },
  {
    key: "agence",
    icon: Building2,
    labels: { fr: "Agences", en: "Agencies", ar: "الوكالات", darija: "وكالات" },
    desc: {
      fr: "Sites corporate, cas clients, carrières.",
      en: "Corporate sites, case studies, careers.",
      ar: "مواقع شركات، دراسات حالة، توظيف.",
      darija: "سيتات كوربوريت، دراسات الحالة، توظيف."
    },
  },
  {
    key: "coiffeur",
    icon: Scissors,
    labels: { fr: "Coiffeurs", en: "Hairdressers", ar: "مصففو الشعر", darija: "كوافور" },
    desc: {
      fr: "Prise de RDV, galerie, carte de fidélité.",
      en: "Booking, gallery, loyalty card.",
      ar: "حجز مواعيد، معرض، بطاقة وفاء.",
      darija: "حجز، غاليري، كارط فيديليتي."
    },
  },
  {
    key: "esthe",
    icon: Brush,
    labels: { fr: "Esthéticiennes", en: "Beauticians", ar: "خبراء التجميل", darija: "ستيتيسيان" },
    desc: {
      fr: "Soins, packs, prise de rendez-vous.",
      en: "Treatments, packs, bookings.",
      ar: "علاجات، باقات، حجوزات.",
      darija: "سوان، باكات، حجز."
    },
  },
  {
    key: "coach",
    icon: Dumbbell,
    labels: { fr: "Coach sportifs", en: "Sports coaches", ar: "مدربو الرياضة", darija: "كوتش سبورت" },
    desc: {
      fr: "Programmes, paiement, suivi client.",
      en: "Programs, payment, client tracking.",
      ar: "برامج، دفع، متابعة.",
      darija: "برامج، خلاص، متابعة."
    },
  },
  {
    key: "therapeute",
    icon: HandHeart,
    labels: { fr: "Thérapeutes", en: "Therapists", ar: "المعالجون", darija: "تيرابوت" },
    desc: {
      fr: "Prise de RDV, téléconsultation, blog.",
      en: "Booking, teleconsult, blog.",
      ar: "حجز، استشارة عن بعد، مدونة.",
      darija: "حجز، استشارة أونلاين، بلوغ."
    },
  },
  {
    key: "medical",
    icon: Stethoscope,
    labels: { fr: "Médical", en: "Medical", ar: "الطب", darija: "الطب" },
    desc: {
      fr: "Cabinets, cliniques, plateformes patients.",
      en: "Practices, clinics, patient platforms.",
      ar: "عيادات، مصحات، منصات المرضى.",
      darija: "كابيني، كليني، منصات المرضى."
    },
  },
  {
    key: "ecom",
    icon: ShoppingBag,
    labels: { fr: "E-commerce", en: "E-commerce", ar: "التجارة الإلكترونية", darija: "تجارة إلكترونية" },
    desc: {
      fr: "Boutiques en ligne, paiement, app mobile.",
      en: "Online stores, payment, mobile app.",
      ar: "متاجر إلكترونية، دفع، تطبيق.",
      darija: "متاجر أونلاين، خلاص، أبليكاسيون."
    },
  },
  {
    key: "finance",
    icon: BarChart3,
    labels: { fr: "Finance & Comptabilité", en: "Finance & Accounting", ar: "المالية والمحاسبة", darija: "المالية و المحاسبة" },
    desc: {
      fr: "Cabinets, fintech, dashboards clients.",
      en: "Firms, fintech, client dashboards.",
      ar: "مكاتب، فينتك، لوحات تحكم.",
      darija: "مكاتب، فينتك، داشبوردات."
    },
  },
  {
    key: "marketing",
    icon: Megaphone,
    labels: { fr: "Marketing digital", en: "Digital marketing", ar: "التسويق الرقمي", darija: "ماركتينغ ديجيتال" },
    desc: {
      fr: "Landing pages, SEO, tracking, ads.",
      en: "Landing pages, SEO, tracking, ads.",
      ar: "صفحات هبوط، SEO، إعلانات.",
      darija: "لاندينغ، SEO، إعلانات."
    },
  },
  {
    key: "immo",
    icon: Home,
    labels: { fr: "Immobilier", en: "Real Estate", ar: "العقارات", darija: "العقار" },
    desc: {
      fr: "Portails, visites 3D, CRM intégré.",
      en: "Portals, 3D tours, integrated CRM.",
      ar: "بوابات، جولات 3D، CRM.",
      darija: "بورتاي، جولات 3D، CRM."
    },
  },
  {
    key: "juridique",
    icon: Scale,
    labels: { fr: "Juridique", en: "Legal", ar: "القانون", darija: "القانون" },
    desc: {
      fr: "Cabinets d'avocats, notaires, conseils.",
      en: "Law firms, notaries, advisors.",
      ar: "محامون، موثقون، مستشارون.",
      darija: "محامين، موثقين، مستشارين."
    },
  },
];

export const PORTFOLIO = [
  {
    key: "restaurant",
    image: "https://images.unsplash.com/photo-1761095596755-99ba58997720?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZyUyMHBsYXRpbmd8ZW58MHx8fHwxNzc2NTEwNjQyfDA&ixlib=rb-4.1.0&q=85",
    tag: { fr: "Restaurant", en: "Restaurant", ar: "مطعم", darija: "ريسطو" },
    title: { fr: "La Table d'Or", en: "La Table d'Or", ar: "لا تابل دور", darija: "لا تابل دور" },
    desc: { fr: "Site vitrine + réservation en ligne", en: "Showcase site + online booking", ar: "موقع + حجز أونلاين", darija: "سيت + حجز أونلاين" },
  },
  {
    key: "ecom",
    image: "https://images.unsplash.com/photo-1648032567013-6c994b847d1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxzbGVlayUyMGZhc2hpb24lMjBlY29tbWVyY2UlMjBtb2RlbHxlbnwwfHx8fDE3NzY1MTA2NDJ8MA&ixlib=rb-4.1.0&q=85",
    tag: { fr: "E-commerce", en: "E-commerce", ar: "تجارة إلكترونية", darija: "تجارة إلكترونية" },
    title: { fr: "Maison Élan", en: "Maison Élan", ar: "ميزون إيلان", darija: "ميزون إيلان" },
    desc: { fr: "Boutique de mode + app iOS", en: "Fashion store + iOS app", ar: "متجر أزياء + تطبيق iOS", darija: "متجر موضة + أبليكاسيون iOS" },
  },
  {
    key: "medical",
    image: "https://images.unsplash.com/photo-1758691461888-b74515208d7a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkb2N0b3IlMjBzdGV0aG9zY29wZSUyMGhvc3BpdGFsfGVufDB8fHx8MTc3NjUxMDY0M3ww&ixlib=rb-4.1.0&q=85",
    tag: { fr: "Médical", en: "Medical", ar: "طبي", darija: "طبي" },
    title: { fr: "Clinique Avicenne", en: "Clinique Avicenne", ar: "عيادة ابن سينا", darija: "كليني ابن سينا" },
    desc: { fr: "Plateforme patient + chatbot IA", en: "Patient platform + AI chatbot", ar: "منصة مرضى + شاتبوت", darija: "منصة مرضى + شاتبوت" },
  },
  {
    key: "coiffeur",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    tag: { fr: "Coiffeur", en: "Hair salon", ar: "صالون حلاقة", darija: "كوافور" },
    title: { fr: "Studio Ciseaux", en: "Studio Ciseaux", ar: "ستوديو سيزو", darija: "ستوديو سيزو" },
    desc: { fr: "Prise de RDV + galerie", en: "Booking + gallery", ar: "حجز + معرض", darija: "حجز + غاليري" },
  },
  {
    key: "plombier",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    tag: { fr: "Plombier", en: "Plumber", ar: "سباك", darija: "بلومبي" },
    title: { fr: "ProPlomb Lyon", en: "ProPlomb Lyon", ar: "برو بلومب ليون", darija: "برو بلومب ليون" },
    desc: { fr: "Devis instantané + urgences 24/7", en: "Instant quote + 24/7 emergency", ar: "عرض سعر + طوارئ 24/7", darija: "عرض ثمن + طوارئ 24/7" },
  },
  {
    key: "coach",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    tag: { fr: "Coach sportif", en: "Sports coach", ar: "مدرب رياضي", darija: "كوتش" },
    title: { fr: "FitPulse", en: "FitPulse", ar: "فيت بالس", darija: "فيت بالس" },
    desc: { fr: "Programmes + paiement Stripe", en: "Programs + Stripe payment", ar: "برامج + دفع Stripe", darija: "برامج + خلاص Stripe" },
  },
];

export const WHATSAPP_NUMBER = "33650015167"; // international format no +
export const WHATSAPP_DISPLAY = "+33 6 50 01 51 67";

export function waLink(text = "") {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ""}`;
}
