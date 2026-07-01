import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLang } from "./LanguageContext";

// 7 luxury property images – all kept in DOM for zero-blank crossfade
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1613490908677-7427187494f6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // slightly longer for the slow pan
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleDotClick = (i: number) => {
    if (i === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(i);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-screen min-h-[800px] w-full overflow-hidden bg-midnight"
    >
      {/* All images mounted – CSS crossfade with Ken Burns */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 will-change-transform">
        {HERO_IMAGES.map((src, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === prevIndex;
          
          return (
            <motion.div 
              key={src} 
              className="absolute inset-0"
              style={{ zIndex: isActive ? 2 : (isPrev ? 1 : 0) }}
              initial={false}
              animate={{ opacity: isActive || (isPrev && prevIndex !== -1) ? 1 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
               <motion.img
                 src={src}
                 className="w-full h-full object-cover origin-center"
                 initial={false}
                 animate={{ 
                   scale: isActive ? 1.15 : 1.0,
                   x: isActive ? (index % 2 === 0 ? "-2%" : "2%") : "0%",
                   y: isActive ? (index % 3 === 0 ? "-2%" : "2%") : "0%"
                 }}
                 transition={{ 
                   scale: { duration: 15, ease: "linear" },
                   x: { duration: 15, ease: "linear" },
                   y: { duration: 15, ease: "linear" }
                 }}
                 loading={index === 0 ? "eager" : "lazy"}
               />
            </motion.div>
          );
        })}

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-midnight/85 via-midnight/30 to-midnight pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-midnight/90 via-midnight/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--gold)_10%,transparent),transparent_55%)] pointer-events-none" />
      </motion.div>

      {/* Gold particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 5.5 + 3) % 100}%`,
              bottom: "-10px",
              width: (i % 3) + 1.5,
              height: (i % 3) + 1.5,
              background: "var(--gold)",
              boxShadow: "0 0 6px var(--gold)",
            }}
            animate={{ y: [0, -900], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 9 + (i % 6),
              repeat: Infinity,
              delay: (i * 0.4) % 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-14 max-w-[1600px] mx-auto pt-20"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 mb-8"
            >
              <div className="w-20 h-[1px] bg-gradient-to-r from-gold to-transparent" />
              <span className="text-xs font-bold uppercase tracking-[0.55em] text-gold whitespace-nowrap">
                {t.hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline — mask reveal */}
            <h1 className="font-display leading-[0.88] text-ivory tracking-tight" style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}>
              {[t.hero.title1, t.hero.title2, t.hero.title3].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.5 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {i === 2 ? (
                      <em className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#f5d87a] to-gold not-italic italic">
                        {line}
                      </em>
                    ) : line}
                  </motion.div>
                </div>
              ))}
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-lg text-ivory/75 text-lg font-light leading-relaxed border-l-2 border-gold/40 pl-5"
            >
              {t.hero.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <a
                href="#properties"
                className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full bg-gold text-midnight text-sm font-bold tracking-[0.2em] uppercase overflow-hidden hover:scale-105 hover:shadow-[0_0_60px_color-mix(in_oklab,var(--gold)_55%,transparent)] transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t.hero.cta1}
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </span>
                <div className="absolute inset-0 bg-ivory translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-700" />
              </a>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80",
                  ].map((src) => (
                    <div key={src} className="w-10 h-10 rounded-full border-2 border-midnight overflow-hidden">
                      <img src={src} alt="Investor" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-midnight bg-gold flex items-center justify-center text-midnight font-bold text-[10px]">+50</div>
                </div>
                <span className="text-xs uppercase tracking-widest text-ivory/55">Trusted by global investors</span>
              </div>
            </motion.div>
          </div>

          {/* Floating glass panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="p-9 rounded-3xl bg-midnight/90 border border-gold/20 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <img src="/Favicon.png" alt="EG" className="w-20 h-20 object-contain mb-7 drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]" />
              <div className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4">Exclusive Access</div>
              <p className="text-ivory text-xl font-display leading-snug mb-8">
                Discover off-market opportunities before they reach the public.
              </p>
              <a href="#contact" className="inline-flex items-center gap-3 text-sm text-ivory/80 hover:text-gold transition-colors border-b border-gold/40 pb-1 hover:border-gold">
                Schedule a Private Consultation →
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentIndex ? "w-8 h-[3px] bg-gold" : "w-2 h-2 bg-ivory/30 hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
