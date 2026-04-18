import React, { useEffect, useMemo, useState } from "react";
import "@/App.css";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, Bot, Sparkles, Check, ArrowRight,
  Star, Quote, Zap, Layers, Palette, ChevronDown, Send,
} from "lucide-react";
import Chatbot from "./Chatbot";
import { SECTORS, PORTFOLIO, waLink, WHATSAPP_DISPLAY } from "./data";
import { detectLang, LANGS, useT } from "./i18n";

// ---------- Sub-components ----------

const SectionTag = ({ children }) => (
  <div className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.25em] uppercase font-bold text-[#00D4FF]">
    <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00D4FF]" />
    {children}
    <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00D4FF]" />
  </div>
);

const Logo = ({ size = 40 }) => (
  <img
    src="https://customer-assets.emergentagent.com/job_b9fc0522-9788-46d1-8300-f94062120cfe/artifacts/tx49d5q4_ChatGPT%20Image%2018%20avr.%202026%2C%2000_33_30.png"
    alt="Krypton"
    style={{ height: size, width: "auto" }}
    className="object-contain select-none"
    draggable={false}
    data-testid="krypton-logo"
  />
);

// ---------- Header ----------
function Header({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#services", label: t.nav.services },
    { href: "#sectors", label: t.nav.sectors },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#process", label: t.nav.process },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#05060F]/70 border-b border-white/5" : ""
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="flex items-center gap-2" data-testid="header-logo">
          <Logo size={36} />
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-gray-300">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-white transition-colors duration-200 relative group"
              data-testid={`nav-${n.href.replace("#", "")}`}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 btn-primary-glow px-5 py-2.5 rounded-full text-sm"
            data-testid="header-cta"
          >
            {t.nav.start}
            <ArrowRight className={`w-4 h-4 ${t.dir === "rtl" ? "rotate-180" : ""}`} />
          </a>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
            data-testid="mobile-menu-toggle"
          >
            <Layers className="w-6 h-6" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#05060F]/95 backdrop-blur-xl" data-testid="mobile-menu">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-gray-200 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function LangSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang) || LANGS[0];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white hover:border-[#00D4FF]/50 transition"
        data-testid="lang-switcher"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      {open && (
        <div className="absolute top-full mt-2 right-0 w-44 glass rounded-xl overflow-hidden z-50" data-testid="lang-menu">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              data-testid={`lang-option-${l.code}`}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-white/5 transition ${
                l.code === lang ? "text-[#00D4FF]" : "text-gray-200"
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
              {l.code === lang && <Check className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Hero ----------
function Hero({ t, lang }) {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 krypton-grid-bg" />
      <div className="absolute inset-0 stars" />
      <div className="beam left-0 right-0 top-1/3" />
      <div className="beam left-0 right-0 top-2/3 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTag>{t.hero.tag}</SectionTag>
          <h1 className="font-display font-black tracking-tighter text-[12vw] sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] mt-6">
            <span className="block text-white">{t.hero.title_1}</span>
            <span className="block text-gradient-krypton">{t.hero.title_2}</span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className={`mt-10 flex flex-wrap items-center gap-4 ${t.dir === "rtl" ? "flex-row-reverse" : ""}`}>
            <a
              href={waLink(lang === "fr" ? "Bonjour Krypton, je souhaite discuter d'un projet." : "Hello Krypton, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow px-7 py-4 rounded-full inline-flex items-center gap-2 text-sm font-bold"
              data-testid="hero-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20.52 3.48A11.91 11.91 0 0012.04 0C5.47 0 .13 5.34.13 11.91a11.84 11.84 0 001.6 5.95L0 24l6.31-1.66a11.9 11.9 0 005.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.85 11.85 0 00-3.44-8.41zM12.05 21.78h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.22-3.75.98 1-3.66-.23-.38a9.86 9.86 0 01-1.5-5.21c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 012.9 7c0 5.46-4.44 9.89-9.91 9.89zm5.43-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/></svg>
              {t.hero.cta_whatsapp}
            </a>
            <a
              href="#contact"
              className="btn-ghost-glow px-7 py-4 rounded-full inline-flex items-center gap-2 text-sm font-semibold"
              data-testid="hero-chat-btn"
            >
              <Bot className="w-5 h-5 text-[#00D4FF]" />
              {t.hero.cta_chat}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-lg">
            {[
              { n: "150+", l: t.hero.stat_1 },
              { n: "13+", l: t.hero.stat_2 },
              { n: "99%", l: t.hero.stat_3 },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4 md:p-5" data-testid={`hero-stat-${i}`}>
                <div className="font-display font-black text-2xl md:text-3xl text-gradient-krypton">{s.n}</div>
                <div className="text-[11px] md:text-xs text-gray-400 mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Decorative bento visual */}
        <motion.div
          className="lg:col-span-5 relative h-[380px] md:h-[520px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-[#00D4FF]/20 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-[#8B5CF6]/20 animate-[spin_24s_linear_infinite_reverse]" />
            <div className="absolute w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20 blur-2xl" />
            <div className="relative glass rounded-3xl p-6 md:p-8 w-[240px] md:w-[280px]">
              <Logo size={60} />
              <div className="mt-5 space-y-2.5">
                {[
                  { Icon: Globe, label: "Web" },
                  { Icon: Smartphone, label: "Mobile" },
                  { Icon: Bot, label: "AI Chatbot" },
                  { Icon: Palette, label: "Design" },
                ].map(({ Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                    <Icon className="w-4 h-4 neon-glow-cyan text-[#00D4FF]" />
                    {label}
                    <Check className="w-3.5 h-3.5 text-emerald-400 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 md:mt-24 py-5 border-y border-white/5 marquee">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, k) =>
            ["PREMIUM", "FAST", "RESPONSIVE", "AI-POWERED", "MULTILINGUAL", "SECURE", "SEO", "24/7 SUPPORT", "CONVERSION"].map((w, i) => (
              <div key={`${k}-${i}`} className="flex items-center gap-10 text-sm font-display font-bold tracking-widest text-white/50">
                <span>{w}</span>
                <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

// ---------- Services ----------
function Services({ t }) {
  const icons = [Globe, Smartphone, Bot, Palette];
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <SectionTag>{t.services.tag}</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4">
            {t.services.title}
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {t.services.list.map((s, i) => {
            const Icon = icons[i];
            const gradients = [
              "from-[#00D4FF]/20 to-transparent",
              "from-[#8B5CF6]/20 to-transparent",
              "from-[#EC4899]/20 to-transparent",
              "from-[#00D4FF]/20 to-[#8B5CF6]/10",
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass neon-border-hover rounded-3xl p-7 md:p-9 relative overflow-hidden group ${i === 0 ? "md:row-span-2 md:min-h-[360px]" : ""}`}
                data-testid={`service-card-${i}`}
              >
                <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br ${gradients[i]} blur-3xl opacity-60 group-hover:opacity-100 transition`} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#00D4FF] neon-glow-cyan" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 font-display font-bold text-2xl md:text-3xl text-white">{s.title}</h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-[#00D4FF] font-semibold opacity-0 group-hover:opacity-100 transition">
                    <span>{t.nav.start}</span>
                    <ArrowRight className={`w-4 h-4 ${t.dir === "rtl" ? "rotate-180" : ""}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Sectors ----------
function Sectors({ t, lang }) {
  return (
    <section id="sectors" className="relative py-24 md:py-32">
      <div className="absolute inset-0 krypton-grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <SectionTag>{t.sectors.tag}</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4">
            {t.sectors.title}
          </h2>
          <p className="mt-5 text-gray-300 max-w-2xl leading-relaxed">{t.sectors.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {SECTORS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.key}
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="group glass neon-border-hover rounded-2xl p-5 md:p-6 flex flex-col gap-4 cursor-pointer"
                data-testid={`sector-${s.key}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/15 to-[#8B5CF6]/15 border border-white/10 flex items-center justify-center group-hover:from-[#00D4FF]/30 group-hover:to-[#8B5CF6]/30 transition">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#00D4FF] neon-glow-cyan" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base md:text-lg leading-tight">{s.labels[lang]}</div>
                  <div className="text-xs text-gray-400 mt-1.5 leading-relaxed">{s.desc[lang]}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Portfolio ----------
function Portfolio({ t, lang }) {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionTag>{t.portfolio.tag}</SectionTag>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4">
              {t.portfolio.title}
            </h2>
            <p className="mt-5 text-gray-300 leading-relaxed">{t.portfolio.subtitle}</p>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-6 gap-5">
          {PORTFOLIO.map((p, i) => {
            // Bento pattern: vary spans
            const spans = [
              "md:col-span-4 md:row-span-2",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-6",
            ];
            return (
              <motion.div
                key={p.key + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl glass neon-border-hover ${spans[i] || "md:col-span-3"} min-h-[220px] md:min-h-[260px]`}
                data-testid={`portfolio-item-${p.key}`}
              >
                <img
                  src={p.image}
                  alt={p.title[lang]}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060F] via-[#05060F]/60 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#00D4FF]">{p.tag[lang]}</span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mt-2">{p.title[lang]}</h3>
                  <p className="text-sm text-gray-300 mt-1">{p.desc[lang]}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Process ----------
function Process({ t }) {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="absolute inset-0 krypton-grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <SectionTag>{t.process.tag}</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4">
            {t.process.title}
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative glass rounded-3xl p-7 neon-border-hover"
              data-testid={`process-step-${i}`}
            >
              <div className="font-display font-black text-5xl text-gradient-krypton">{step.n}</div>
              <h3 className="mt-4 font-display font-bold text-xl text-white">{step.t}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{step.d}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#00D4FF] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Reviews ----------
function Reviews({ t }) {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <SectionTag>{t.reviews.tag}</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4">
            {t.reviews.title}
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.reviews.items.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-3xl p-7 neon-border-hover relative"
              data-testid={`review-${i}`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#8B5CF6]/40" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#00D4FF] text-[#00D4FF]" />
                ))}
              </div>
              <p className="mt-5 text-gray-200 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="font-display font-bold text-white">{r.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact({ t, lang }) {
  const [form, setForm] = useState({
    name: "", phone: "", sector: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const waMessage = useMemo(() => {
    const parts = [];
    if (form.name) parts.push(`${lang === "fr" ? "Nom" : lang === "en" ? "Name" : "الاسم"}: ${form.name}`);
    if (form.phone) parts.push(`${lang === "fr" ? "Téléphone" : lang === "en" ? "Phone" : "الهاتف"}: ${form.phone}`);
    if (form.sector) parts.push(`${lang === "fr" ? "Secteur" : lang === "en" ? "Sector" : "القطاع"}: ${form.sector}`);
    if (form.message) parts.push(`\n${form.message}`);
    if (parts.length === 0) {
      return lang === "fr"
        ? "Bonjour Krypton, j'aimerais discuter d'un projet."
        : lang === "en"
          ? "Hello Krypton, I'd like to discuss a project."
          : "أهلا Krypton، أود مناقشة مشروع.";
    }
    return parts.join("\n");
  }, [form, lang]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Persist lead in backend (fire-and-forget, fail silently)
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: lang }),
      }).catch(() => null);
    } finally {
      window.open(waLink(waMessage), "_blank", "noopener,noreferrer");
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 krypton-grid-bg" />
      <div className="absolute inset-0 stars opacity-60" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="glass rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#00D4FF]/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#8B5CF6]/20 blur-[100px]" />

          <div className="relative grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <SectionTag>{t.contact.tag}</SectionTag>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mt-4">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-gray-300 leading-relaxed">{t.contact.subtitle}</p>

              <div className="mt-10 space-y-4">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-2xl p-5 neon-border-hover"
                  data-testid="direct-whatsapp-btn"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 border border-[#22c55e]/30 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#22c55e]" fill="currentColor"><path d="M20.52 3.48A11.91 11.91 0 0012.04 0C5.47 0 .13 5.34.13 11.91a11.84 11.84 0 001.6 5.95L0 24l6.31-1.66a11.9 11.9 0 005.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.85 11.85 0 00-3.44-8.41z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">WhatsApp</div>
                    <div className="font-display font-bold text-white">{WHATSAPP_DISPLAY}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <Zap className="w-4 h-4 text-[#00D4FF]" />
                  {t.contact.subtitle}
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="lg:col-span-3 space-y-4" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  placeholder={t.contact.form_name}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                  testid="contact-name"
                />
                <InputField
                  placeholder={t.contact.form_phone}
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  testid="contact-phone"
                />
              </div>
              <InputField
                placeholder={t.contact.form_sector}
                value={form.sector}
                onChange={(v) => setForm({ ...form, sector: v })}
                testid="contact-sector"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.contact.form_message}
                rows={5}
                required
                data-testid="contact-message"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-500 focus:border-[#00D4FF]/50 focus:outline-none transition resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary-glow w-full py-4 rounded-full inline-flex items-center justify-center gap-2 text-sm font-bold disabled:opacity-60"
                data-testid="contact-submit"
              >
                <Send className={`w-4 h-4 ${t.dir === "rtl" ? "rotate-180" : ""}`} />
                {t.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ placeholder, value, onChange, required, testid }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      data-testid={testid}
      className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-white placeholder:text-gray-500 focus:border-[#00D4FF]/50 focus:outline-none transition"
    />
  );
}

// ---------- Floating WhatsApp ----------
function FloatingWhatsApp({ t }) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      data-testid="floating-whatsapp"
      className={`fixed z-[60] bottom-6 ${t.dir === "rtl" ? "right-6" : "left-6"} md:bottom-8 ${t.dir === "rtl" ? "md:right-8" : "md:left-8"} whatsapp-float rounded-full p-4 md:p-5 bg-[#22c55e] text-white transition-transform hover:scale-110`}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="currentColor"><path d="M20.52 3.48A11.91 11.91 0 0012.04 0C5.47 0 .13 5.34.13 11.91a11.84 11.84 0 001.6 5.95L0 24l6.31-1.66a11.9 11.9 0 005.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.85 11.85 0 00-3.44-8.41zM12.05 21.78h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.22-3.75.98 1-3.66-.23-.38a9.86 9.86 0 01-1.5-5.21c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 012.9 7c0 5.46-4.44 9.89-9.91 9.89zm5.43-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/></svg>
    </a>
  );
}

// ---------- Footer ----------
function Footer({ t }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo size={34} />
          <span className="text-sm text-gray-400">{t.footer.tagline}</span>
        </div>
        <div className="text-xs text-gray-500">
          © {year} Krypton. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

// ---------- Root ----------
function App() {
  const [lang, setLangState] = useState("fr");
  const t = useT(lang);

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dir = t.dir;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("krypton_lang", lang);
    }
  }, [lang, t.dir]);

  const setLang = (code) => setLangState(code);

  return (
    <div className="App grain" data-testid="app-root">
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} lang={lang} />
        <Services t={t} />
        <Sectors t={t} lang={lang} />
        <Portfolio t={t} lang={lang} />
        <Process t={t} />
        <Reviews t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
      <Chatbot lang={lang} />
    </div>
  );
}

export default App;
