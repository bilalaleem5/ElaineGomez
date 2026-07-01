import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "./LanguageContext";

const DR_BG = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=85";

// Extra visuals for the stats section
const STAT_ICONS = ["🏆", "✈️", "🏨", "🛂"];

const REASONS = [
  {
    title: "Caribbean's #1 Destination",
    desc: "Outpacing every regional competitor in international arrivals and infrastructure investment year over year.",
    icon: "🏆",
    gradient: "from-gold/20 to-transparent",
  },
  {
    title: "8M+ Annual Tourists",
    desc: "Demand that never sleeps. High visitor volume drives short-term rental yields of 8–14% annually.",
    icon: "✈️",
    gradient: "from-gold/15 to-transparent",
  },
  {
    title: "80–95% Hotel Occupancy",
    desc: "Best-in-class occupancy rates signal insatiable demand — and enormous opportunity for private investors.",
    icon: "🏨",
    gradient: "from-gold/20 to-transparent",
  },
  {
    title: "Residency via Real Estate",
    desc: "Purchase qualifying property and receive full Dominican Residency — your gateway to Caribbean living.",
    icon: "🛂",
    gradient: "from-gold/15 to-transparent",
  },
];

export function WhyDR() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section id="why" ref={ref} className="relative overflow-hidden bg-midnight">
      {/* ── Full-bleed parallax background ── */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: bgY }} className="absolute inset-[-15%] will-change-transform">
          <img
            src={DR_BG}
            alt="Dominican Republic luxury villa"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,_color-mix(in_oklab,var(--gold)_6%,transparent),transparent_55%)]" />
      </div>

      <motion.div style={{ y: textY }} className="relative z-10 py-36 md:py-52 px-6 lg:px-16" initial={false}>
        <div className="max-w-[1600px] mx-auto">
          
          {/* ── Section Header ── */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "opacity, transform" }}
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-[1px] bg-gradient-to-r from-gold to-transparent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.55em] text-gold">{t.why.eyebrow}</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.88] tracking-tight mb-10">
                Why invest in the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#f5d87a] to-gold italic font-light">
                  Dominican Republic
                </span>
              </h2>
              
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] w-64 bg-gradient-to-r from-gold to-transparent origin-left"
              />
            </motion.div>

            {/* Pull Quote — right side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "opacity, transform" }}
              className="lg:pt-20"
            >
              <div className="relative pl-8 border-l-2 border-gold/40">
                <div className="font-display text-[80px] leading-none text-gold/15 absolute -top-8 -left-5 select-none pointer-events-none">"</div>
                <p className="font-display italic text-2xl md:text-3xl text-ivory/80 leading-[1.4]">
                  {t.why.note}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-gold/60" />
                  <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold">Market Intelligence</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── 4 Stat / Reason Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.4, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "opacity, transform" }}
                className="group relative overflow-hidden rounded-none border border-gold/10 hover:border-gold/35 transition-colors duration-1000"
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-midnight/95" />
                
                {/* Hover gradient sweep — smooth fade */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out bg-gradient-to-b from-gold/8 to-transparent" />
                
                {/* Gold bottom bar — smooth scale */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" />

                <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[280px]">
                  {/* Big stat number */}
                  <div className="font-display text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-gold via-[#f5d87a] to-gold/70 leading-none mb-4">
                    {t.why.stats[i]?.k}
                  </div>

                  {/* Separator */}
                  <div className="w-10 h-[1px] bg-gold/40 mb-6 transition-[width,background-color] duration-700 ease-out group-hover:w-16 group-hover:bg-gold" />

                  {/* Description */}
                  <p className="text-ivory/50 text-sm md:text-base leading-relaxed flex-1 transition-colors duration-700 ease-out group-hover:text-ivory/75 font-light">
                    {r.desc}
                  </p>

                  {/* Bottom label */}
                  <div className="mt-6 text-[9px] font-bold uppercase tracking-[0.35em] text-gold/50 transition-colors duration-700 ease-out group-hover:text-gold">
                    {t.why.stats[i]?.v}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom CTA Strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gold/10 pt-14"
          >
            <div className="flex items-center gap-6">
              {["🌴 Tax-Friendly Market", "📈 8–14% Rental Yields", "🌊 Caribbean Lifestyle"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-ivory/50 hover:text-gold transition-colors duration-300 cursor-default">
                  <span className="text-base">{item.split(" ")[0]}</span>
                  <span>{item.split(" ").slice(1).join(" ")}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="group flex items-center gap-4 px-8 py-4 border border-gold/30 text-ivory hover:bg-gold hover:text-midnight transition-all duration-500 text-[11px] font-bold uppercase tracking-[0.3em]"
            >
              <span>Explore DR Investments</span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
