import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PosterShowcase({
  label,
  quote,
  image,
  reverse = false,
}: {
  label: string;
  quote?: string;
  image: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Elegant Parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden bg-midnight border-y border-gold/10">
      {/* Cinematic Spotlight Background */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_color-mix(in_oklab,var(--gold)_4%,transparent)_0%,transparent_70%)] opacity-80 pointer-events-none ${reverse ? '-left-[20%]' : '-right-[20%]'}`} 
      />
      
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
        <div className={`grid lg:grid-cols-12 gap-16 lg:gap-24 items-center ${reverse ? '' : ''}`}>
          
          {/* ── TEXT SIDE ── */}
          <motion.div 
            style={{ y: textY }}
            className={`lg:col-span-5 flex flex-col justify-center ${reverse ? 'lg:order-2 lg:pl-10' : 'lg:order-1 lg:pr-10'}`}
          >
            <motion.div
              initial={{ opacity: 0, x: reverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-transparent shadow-[0_0_10px_var(--gold)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">{label}</span>
              </div>

              {quote ? (
                <div className="relative mb-10">
                  <div className="font-display text-[140px] leading-none text-gold/10 absolute -top-16 -left-10 select-none pointer-events-none">"</div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05] relative z-10 drop-shadow-lg">
                    {quote}
                  </h2>
                </div>
              ) : (
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05] mb-10 drop-shadow-lg">
                  Discover the difference of <i className="text-gold font-light">true luxury</i>.
                </h2>
              )}

              <p className="text-ivory/60 text-lg md:text-xl font-light leading-relaxed mb-12 border-l-2 border-gold/30 pl-6">
                Expertly curated insights and exclusive market intelligence tailored for the discerning investor. Making informed decisions globally.
              </p>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-gold/5 shadow-[0_0_20px_color-mix(in_oklab,var(--gold)_15%,transparent)]">
                  ✦
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold mb-1">
                    Market Intelligence
                  </div>
                  <div className="text-xs font-light text-ivory/50">Exclusive internal data</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── IMAGE SIDE (The Poster) ── */}
          <div className={`lg:col-span-7 relative ${reverse ? 'lg:order-1' : 'lg:order-2'} flex justify-center mt-16 lg:mt-0`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: reverse ? 15 : -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: "2000px" }}
              className="relative w-full max-w-[650px]"
            >
              {/* Outer glow radiating from the poster */}
              <div className="absolute -inset-10 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

              <motion.div 
                style={{ y: imgY }} 
                className="relative z-10 w-full rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-gold/30 group bg-midnight"
              >
                {/* The poster itself - retaining aspect ratio so text isn't cut off */}
                <img
                  src={image}
                  alt={label}
                  className="w-full h-auto object-contain relative z-10 transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
                />
                
                {/* Elegant diagonal light sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-20 pointer-events-none transform -translate-x-full skew-x-[-30deg] group-hover:animate-[sweep_2s_ease-out_forwards]" />
                
                {/* Inner corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-[2px] border-l-[2px] border-gold/40 z-30 transition-all duration-500 group-hover:border-gold group-hover:-translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[2px] border-r-[2px] border-gold/40 z-30 transition-all duration-500 group-hover:border-gold group-hover:translate-x-1 group-hover:translate-y-1" />
              </motion.div>

              {/* Floating Glassmorphism Badge */}
              <motion.div
                style={{ y: badgeY }}
                className={`absolute -bottom-10 ${reverse ? '-right-4 lg:-right-12' : '-left-4 lg:-left-12'} p-6 bg-midnight/60 backdrop-blur-3xl border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] rounded-sm max-w-[260px] z-30`}
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold mb-3">Key Takeaway</div>
                <div className="text-ivory text-sm font-light leading-relaxed">
                  Understanding value across borders allows our clients to invest where their money grows furthest.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
