import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "./LanguageContext";

export function About() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  // Staggered text animation
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.03 }
    }
  };
  const letter = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 lg:px-12 overflow-hidden bg-midnight border-t border-gold/10">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_color-mix(in_oklab,var(--gold)_4%,transparent),transparent_60%)]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[radial-gradient(circle_at_center,_color-mix(in_oklab,var(--gold)_10%,transparent),transparent_70%)] rounded-full pointer-events-none" />
      
      {/* Giant subtle monogram watermark */}
      <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display text-white/[0.015] leading-none select-none pointer-events-none font-bold italic tracking-tighter mix-blend-overlay">
        EG
      </div>

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* ── LEFT: Cinematic Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Main Photo Frame */}
          <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto rounded-none overflow-hidden border border-gold/20 shadow-[0_40px_100px_rgba(0,0,0,0.8)] group bg-midnight">
            <motion.div style={{ y: imgY }} className="absolute inset-[-5%] w-[110%] h-[110%]">
              <img
                src="/475041296_600147886091984_448001193641357333_n.jpg"
                alt="Elaine Gomez"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-[3s] group-hover:scale-[1.03] filter contrast-125 saturate-[0.85]"
              />
            </motion.div>
            {/* Cinematic shadows inside frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80" />
            <div className="absolute inset-0 border-[10px] border-midnight/10 mix-blend-overlay" />
            
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/40" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/40" />
          </div>

          {/* Floating Glass Box — Parallaxed */}
          <motion.div
            style={{ y: badgeY }}
            className="absolute -right-8 -bottom-12 lg:-right-16 lg:-bottom-16 w-64 p-6 rounded-sm bg-midnight/95 border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex items-center justify-center w-12 h-12">
                <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] text-gold/30" viewBox="0 0 100 100">
                  <path id="curve" fill="transparent" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  <text className="text-[14px] uppercase tracking-widest fill-gold font-bold">
                    <textPath href="#curve" startOffset="0%">• LUXURY • SPECIALIST •</textPath>
                  </text>
                </svg>
                <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_var(--gold)]" />
              </div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/70 mb-1">Expertise</div>
            <div className="text-ivory font-display text-lg leading-tight">Miami &<br />Dominican Republic</div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Editorial Typography ── */}
        <div className="lg:col-span-7 lg:pl-10 mt-20 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-[1px] bg-gradient-to-r from-gold to-transparent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-gold">{t.about.eyebrow}</span>
            </div>

            {/* Title with staggered letters */}
            <motion.h2
              variants={sentence}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-6xl md:text-8xl text-ivory leading-[0.85] tracking-tight mb-8"
              style={{ perspective: "1000px" }}
            >
              {t.about.title.split("").map((char, index) => (
                <motion.span
                  key={char + index}
                  variants={letter}
                  className="inline-block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>

            <h3 className="font-display italic text-3xl md:text-4xl text-gold/90 mb-10 border-l-2 border-gold/30 pl-6 py-2">
              {t.about.role}
            </h3>

            <p className="text-ivory/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-14">
              {t.about.body}
            </p>

            {/* Luxury Credentials grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-16 pt-8 border-t border-gold/15">
              {t.about.credentials.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0 mt-1.5" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ivory/80 leading-snug">{c}</span>
                </motion.div>
              ))}
            </div>

            {/* Signature & Social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 bg-ink/95 border border-gold/10 p-6 rounded-lg hover:border-gold/30 transition-colors duration-700">
              <div className="flex items-center gap-6">
                <img src="/476901930_608850395221733_6041988129030873641_n.jpg" alt="Elaine" className="w-14 h-14 rounded-full object-cover border border-gold/40" />
                <div>
                  <div className="font-display italic text-3xl text-gold mb-1 leading-none">Elaine Gomez</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-ivory/50">Founder & Lead Broker</div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.2)" }}
                href="https://instagram.com/Elainesellsmiamianddr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-gold/30 text-ivory hover:bg-gold hover:text-midnight transition-colors duration-500 text-xs font-bold uppercase tracking-[0.2em]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
