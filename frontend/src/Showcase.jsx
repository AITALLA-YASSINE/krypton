import React from "react";
import { motion } from "framer-motion";

// --------- Device frames ---------
export function MacbookFrame({ src, alt = "", url = "krypton.app" }) {
  return (
    <div className="relative w-full">
      {/* Screen body */}
      <div className="relative rounded-[14px] bg-gradient-to-b from-[#2a2a2e] to-[#18181b] p-[10px] shadow-[0_30px_80px_-30px_rgba(0,212,255,0.35)]">
        <div className="rounded-[8px] overflow-hidden aspect-[16/10] bg-black relative">
          {/* Fake browser chrome */}
          <div className="absolute top-0 inset-x-0 h-7 bg-[#0f1117]/95 backdrop-blur flex items-center gap-1.5 px-3 z-10 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <div className="mx-auto text-[10px] text-gray-400 bg-white/5 px-3 py-0.5 rounded-full border border-white/5">
              {url}
            </div>
          </div>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* subtle gradient at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </div>
      </div>
      {/* Base (hinge) */}
      <div className="relative mx-[-4%] h-[14px] bg-gradient-to-b from-[#1f1f23] to-[#0e0e10] rounded-b-[14px]" />
      <div className="mx-auto w-[22%] h-[5px] bg-[#0e0e10] rounded-b-[6px]" />
    </div>
  );
}

export function IPhoneFrame({ src, alt = "", className = "", tilt = 0 }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      <div className="relative rounded-[36px] bg-gradient-to-b from-[#222] to-[#0c0c0f] p-[7px] shadow-[0_30px_80px_-30px_rgba(139,92,246,0.45)]">
        <div className="relative rounded-[30px] overflow-hidden aspect-[9/19.5] bg-black">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[38%] h-5 bg-black rounded-full z-10" />
          {/* Status bar */}
          <div className="absolute top-2 inset-x-0 flex items-center justify-between px-5 z-20 text-[9px] font-semibold text-white">
            <span>9:41</span>
            <span className="opacity-0">·</span>
          </div>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[30%] h-[3px] bg-white/70 rounded-full z-10" />
        </div>
      </div>
    </div>
  );
}

// --------- Main showcase section ---------
const SHOWCASES = {
  fr: {
    tag: "APERÇUS EN SITUATION",
    title: "Vos projets, en vrai — sur vrais écrans.",
    subtitle: "Sites et applications pensés pour être magnifiques partout : ordinateur, tablette, smartphone.",
    scenes: [
      {
        label: "Restaurant · La Table d'Or",
        site: { url: "latabledor.fr", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" },
        app: { img: "https://images.unsplash.com/photo-1761095596755-99ba58997720?auto=format&fit=crop&w=900&q=80" },
        color: "from-[#00D4FF]/30 to-transparent",
      },
      {
        label: "Coiffure · Studio Ciseaux",
        site: { url: "studio-ciseaux.com", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80" },
        app: { img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80" },
        color: "from-[#8B5CF6]/30 to-transparent",
      },
      {
        label: "E-commerce · Maison Élan",
        site: { url: "maison-elan.store", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80" },
        app: { img: "https://images.unsplash.com/photo-1648032567013-6c994b847d1b?auto=format&fit=crop&w=900&q=80" },
        color: "from-[#EC4899]/30 to-transparent",
      },
      {
        label: "Coach sportif · FitPulse",
        site: { url: "fitpulse.app", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80" },
        app: { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80" },
        color: "from-[#00D4FF]/30 to-[#8B5CF6]/20",
      },
    ],
  },
  en: {
    tag: "LIVE PREVIEWS",
    title: "Your projects — live, on real screens.",
    subtitle: "Websites and apps crafted to look stunning everywhere: laptop, tablet, phone.",
    scenes: null, // uses fr scenes (images/labels are universal)
  },
  ar: {
    tag: "معاينات حقيقية",
    title: "مشاريعك — حية على شاشات حقيقية.",
    subtitle: "مواقع وتطبيقات مصممة لتبدو رائعة على كل الشاشات: حاسوب، جهاز لوحي، هاتف.",
    scenes: null,
  },
  darija: {
    tag: "معاينات حقيقية",
    title: "المشاريع ديالك — على شاشات حقيقية.",
    subtitle: "سيتات و أبليكاسيون مصممين باش يبانو زوينين على كل الشاشات : بورطابل، تابليت، تيليفون.",
    scenes: null,
  },
};

export default function Showcase({ lang = "fr" }) {
  const cfg = SHOWCASES[lang] || SHOWCASES.fr;
  const scenes = SHOWCASES.fr.scenes;

  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 krypton-grid-bg opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.25em] uppercase font-bold text-[#00D4FF]">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00D4FF]" />
            {cfg.tag}
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00D4FF]" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4">
            {cfg.title}
          </h2>
          <p className="mt-5 text-gray-300 max-w-2xl leading-relaxed">{cfg.subtitle}</p>
        </div>

        <div className="mt-16 md:mt-20 space-y-24 md:space-y-32">
          {scenes.map((s, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative"
                data-testid={`showcase-scene-${idx}`}
              >
                {/* ambient glow */}
                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
                  <div className={`w-[80%] h-[80%] rounded-full bg-gradient-radial ${s.color} blur-[100px] opacity-60`}
                       style={{ background: `radial-gradient(closest-side, var(--tw-gradient-stops))` }} />
                </div>

                <div className={`relative grid md:grid-cols-12 gap-6 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="md:col-span-8 relative">
                    <MacbookFrame src={s.site.img} alt={s.label} url={s.site.url} />
                  </div>
                  <div className="md:col-span-4 relative md:-mt-16 flex justify-center md:block">
                    <div className="w-[200px] md:w-[230px] md:-ml-10">
                      <IPhoneFrame src={s.app.img} alt={s.label} tilt={reverse ? -6 : 6} />
                    </div>
                  </div>
                </div>

                <div className={`relative mt-8 md:mt-6 flex ${reverse ? "md:justify-end" : "md:justify-start"}`}>
                  <div className="inline-flex items-center gap-3 glass rounded-full pl-2 pr-5 py-2">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center text-xs font-black text-[#05060F]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-semibold text-sm md:text-base text-white">
                      {s.label}
                    </span>
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
