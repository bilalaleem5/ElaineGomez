import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "./LanguageContext";
import { useRef } from "react";

export function HowItWorks() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start 80%", "end 50%"] 
  });
  
  // Animate the horizontal line filling up as the user scrolls
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={ref} className="relative py-32 md:py-48 px-6 lg:px-12 bg-midnight border-b border-gold/10 overflow-hidden">
      {/* ── Cinematic Background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--gold)_4%,transparent),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_color-mix(in_oklab,var(--gold)_3%,transparent),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* ── Left-Aligned Monumental Header ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 lg:mb-32"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-gold to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">{t.how.eyebrow}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.9] tracking-tight max-w-4xl drop-shadow-2xl">
            {t.how.title}
          </h2>
        </motion.div>

        {/* ── Scroll-Driven Horizontal Timeline ── */}
        <div className="relative">
          
          {/* Horizontal Track Line (Desktop) */}
          <div className="hidden md:block absolute top-[27px] left-[28px] right-0 h-[2px] bg-gold/10 z-0">
            <motion.div 
              style={{ scaleX: lineScale, transformOrigin: "left" }}
              className="w-full h-full bg-gradient-to-r from-gold via-[#f5d87a] to-gold/20 shadow-[0_0_15px_var(--gold)]"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-10 relative z-10">
            {t.how.steps.map((s, i) => {
              return (
                <div key={s.t} className="relative flex flex-col items-start w-full group">
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex w-14 h-14 rounded-full border border-gold/30 bg-midnight shadow-[0_0_30px_rgba(212,175,55,0.2)] items-center justify-center font-display italic text-gold text-xl group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] mb-12 relative z-10">
                    {i + 1}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: "opacity, transform, filter" }}
                    className="w-full h-full"
                  >
                    {/* Mobile Node */}
                    <div className="md:hidden w-12 h-12 rounded-full border border-gold bg-midnight/80 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center font-display italic text-gold text-lg mb-6">
                      {i + 1}
                    </div>

                    <div className="relative p-8 lg:p-10 rounded-2xl bg-midnight/40 backdrop-blur-2xl border border-gold/10 hover:border-gold/30 hover:bg-midnight/60 transition-all duration-[1000ms] ease-out shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden h-full flex flex-col">
                      {/* Hover Sweep Flare */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none transform -translate-x-full group-hover:animate-[sweep_2.5s_ease-out_forwards]" />
                      
                      {/* Hollow Background Number */}
                      <div className="text-gold/10 font-display text-8xl md:text-9xl leading-none absolute -top-4 -right-4 select-none opacity-50 group-hover:text-gold/20 transition-colors duration-[1000ms]">
                        0{i + 1}
                      </div>

                      <h3 className="font-display text-2xl xl:text-3xl text-ivory mb-6 relative z-10 group-hover:text-gold transition-colors duration-[1000ms] ease-out pr-8">
                        {s.t}
                      </h3>
                      <p className="text-ivory/60 text-base leading-relaxed font-light relative z-10 group-hover:text-ivory/80 transition-colors duration-[1000ms] ease-out">
                        {s.d}
                      </p>
                      
                      {/* Accent lines */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/50 to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] origin-left" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-gold/40 transition-colors duration-[1000ms] ease-out m-4 pointer-events-none" />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
