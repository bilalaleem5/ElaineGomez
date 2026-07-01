import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";
import { properties, type Property } from "@/lib/properties";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

/* ── Luxury Editorial Card (Hover Reveal) ──────────────────── */
function PropertyCard({ p, onOpen, index }: { p: Property; onOpen: () => void; index: number }) {
  const { lang, t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-[550px] overflow-hidden rounded-none cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-gold/10 bg-midnight"
      onClick={onOpen}
    >
      {/* Background Image with slow cinematic zoom */}
      <div className="absolute inset-[-5%] w-[110%] h-[110%]">
        <img 
          src={p.image} 
          alt={p.name} 
          className="w-full h-full object-cover filter contrast-110 saturate-[0.9] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
        />
      </div>

      {/* Permanent bottom shadow for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
      
      {/* Dark blur overlay on hover to make text pop */}
      <div className="absolute inset-0 bg-midnight/50 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[4px]" />

      {/* Top Badges */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
        <div className="px-4 py-2 bg-midnight/50 backdrop-blur-xl border border-gold/30 text-[9px] font-bold uppercase tracking-[0.35em] text-gold">
          {p.status[lang]}
        </div>
        {p.price && (
          <div className="font-display text-ivory text-xl drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            {p.price}
          </div>
        )}
      </div>

      {/* Content wrapper – slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-20 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-[130px] group-hover:translate-y-0">
        
        {/* Title area */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-gold" />
            <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold">{p.location}</div>
          </div>
          <h3 className="font-display text-4xl lg:text-5xl text-ivory leading-[0.95] drop-shadow-md">{p.name}</h3>
        </div>

        {/* Hidden details that fade in */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
          <ul className="space-y-3 mb-8">
            {p.highlights[lang].map((h) => (
              <li key={h} className="text-sm text-ivory/80 flex gap-4 items-center">
                <span className="w-1 h-1 rotate-45 bg-gold flex-shrink-0" />
                <span className="font-light tracking-wider uppercase text-[10px]">{h}</span>
              </li>
            ))}
          </ul>

          {/* Action Row */}
          <div className="flex items-center justify-between w-full border-t border-gold/20 pt-5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold group-hover:animate-pulse">
              {t.props.view} →
            </span>
            <span className="text-[9px] uppercase tracking-widest text-ivory/40">
              DM "{p.dmCode}"
            </span>
          </div>
        </div>
      </div>

      {/* Inner Frame border that fades in */}
      <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/20 transition-colors duration-700 pointer-events-none" />
      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/50 transition-colors duration-700 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/50 transition-colors duration-700 pointer-events-none" />
    </motion.div>
  );
}

/* ── Properties Section ─────────────────────────────────────── */
export function Properties() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Property | null>(null);

  return (
    <section id="properties" className="relative py-32 md:py-48 px-6 lg:px-12 bg-midnight/50 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_color-mix(in_oklab,var(--gold)_2%,transparent),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20"
        >
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-[1px] bg-gradient-to-r from-gold to-transparent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-gold">{t.props.eyebrow}</span>
            </div>
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl text-ivory leading-[0.9] tracking-tight">
              A curated <i className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-soft font-light">collection</i>
            </h2>
          </div>
          <p className="text-ivory/55 max-w-sm text-lg font-light leading-relaxed border-l border-gold/25 pl-6 pb-2">
            {t.props.sub}
          </p>
        </motion.div>

        {/* 4-column Luxury Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} p={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      {/* Dialog Modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl bg-midnight border border-gold/30 text-ivory p-0 overflow-hidden shadow-[0_0_150px_color-mix(in_oklab,var(--gold)_15%,transparent)] rounded-none">
          {active && (
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              <div className="relative overflow-hidden h-72 lg:h-auto">
                <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-midnight/20 via-transparent to-midnight/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" />
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-gold" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">{active.location}</div>
                </div>
                
                <DialogTitle className="font-display text-5xl md:text-6xl text-ivory mb-8 leading-[0.9]">
                  {active.name}
                </DialogTitle>
                
                <div className="text-2xl font-display text-gold mb-8 italic">
                  {active.price}
                </div>

                <p className="text-ivory/60 text-lg font-light leading-relaxed mb-12 border-l border-gold/20 pl-6">
                  {active.body[lang]}
                </p>

                <a
                  href={`https://wa.me/19176012822?text=${encodeURIComponent(`Hi Elaine — I'm interested in ${active.name}. (${active.dmCode})`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-gold text-midnight text-xs font-bold uppercase tracking-[0.3em] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {t.props.inquire} — {active.dmCode}
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                  </span>
                  <div className="absolute inset-0 bg-ivory translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-700" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
