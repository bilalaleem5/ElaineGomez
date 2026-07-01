import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useLang } from "./LanguageContext";
import { useRef } from "react";

export function Testimonials() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  // Parallax tracking for a staggered floating effect
  const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); 
  const y3 = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <section id="testimonials" ref={ref} className="relative py-40 md:py-64 px-6 lg:px-12 bg-midnight border-b border-gold/10 overflow-hidden">
      {/* ── Cinematic Atmosphere ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_color-mix(in_oklab,var(--gold)_5%,transparent),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_color-mix(in_oklab,var(--gold)_10%,transparent),transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "opacity, transform" }}
          className="flex flex-col items-center text-center mb-24 md:mb-40"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-l from-gold to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">{t.tests.eyebrow}</span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-gold to-transparent" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.9] tracking-tight max-w-4xl drop-shadow-2xl">
            {t.tests.title}
          </h2>
        </motion.div>

        {/* Staggered Parallax Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {t.tests.items.map((c, i) => {
            const yTransform = i === 0 ? y1 : i === 1 ? y2 : y3;
            // Shift the middle card down to create a "V" formation
            const mtClass = i === 1 ? "md:mt-32" : "md:mt-0";

            return (
              <motion.div
                key={c.n}
                style={{ y: yTransform }}
                className={`relative ${mtClass}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.4, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: "opacity, transform, filter" }}
                  className="group relative p-10 lg:p-14 rounded-2xl bg-midnight/90 border border-gold/10 hover:border-gold/40 transition-all duration-[1000ms] ease-out shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col h-full"
                >
                  {/* Hover Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none transform -translate-x-full group-hover:animate-[sweep_2.5s_ease-out_forwards]" />
                  
                  {/* Glowing corner accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_center,_color-mix(in_oklab,var(--gold)_20%,transparent),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                  {/* Animated Star Rating */}
                  <div className="flex gap-2 mb-10 relative z-10">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 md:w-5 md:h-5 fill-gold/60 text-gold/60 group-hover:fill-gold group-hover:text-gold transition-colors duration-[1000ms]" style={{ transitionDelay: `${si * 50}ms` }} />
                    ))}
                  </div>

                  {/* Massive Quote Mark */}
                  <div className="font-display text-[140px] lg:text-[180px] leading-none absolute -top-8 -left-4 select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-br from-gold/10 to-transparent group-hover:from-gold/30 transition-all duration-[1000ms]">
                    &ldquo;
                  </div>

                  <p className="font-display text-2xl lg:text-[28px] text-ivory/80 leading-snug italic mb-14 relative z-10 group-hover:text-ivory drop-shadow-md transition-colors duration-[1000ms]">
                    {c.q}
                  </p>
                  
                  {/* Client Info */}
                  <div className="mt-auto relative z-10 border-t border-gold/10 pt-8 group-hover:border-gold/30 transition-colors duration-[1000ms]">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full border border-gold/30 bg-midnight/50 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-[1000ms] ease-out">
                        <span className="text-xl font-display text-gold/80 group-hover:text-gold transition-colors duration-[1000ms]">{c.n.split(" ").map(w => w[0]).join("")}</span>
                      </div>
                      <div>
                        <div className="text-lg text-ivory font-display tracking-wide">{c.n}</div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-gold/60 mt-1.5 font-bold group-hover:text-gold transition-colors duration-1000">{c.c}</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Border Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] origin-center" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
