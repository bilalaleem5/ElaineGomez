import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Scale, KeyRound, Building2, Landmark, Plane, Globe2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLang } from "./LanguageContext";

const icons = [Scale, KeyRound, Building2, Landmark, Plane, Globe2];
const TEAM_BG = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85";

const serviceImages = [
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80", // Legal
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80", // Management
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", // Developer
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", // Financing
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80", // Relocation
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80", // Global
];

export function TeamServices() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % t.team.services.length);
    }, 4000); // cycle every 4 seconds
    return () => clearInterval(timer);
  }, [isPaused, t.team.services.length]);

  // Parallax background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="team" ref={ref} className="relative py-32 md:py-48 bg-midnight border-b border-gold/10 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: bgY }} className="absolute inset-[-15%] will-change-transform">
          <img
            src={TEAM_BG}
            alt="Luxury real estate interior"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
        
        {/* Deep luxurious gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_color-mix(in_oklab,var(--gold)_4%,transparent),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-32 max-w-4xl"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-gold to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.55em] text-gold">{t.team.eyebrow}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.9] tracking-tight mb-8">
            White-glove, <i className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-soft font-light">end to end.</i>
          </h2>
          <p className="text-ivory/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l-2 border-gold/30 pl-6">
            {t.team.sub}
          </p>
        </motion.div>

        {/* ── Cinematic Split Layout ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start relative">
          
          {/* LEFT: Interactive Hover Menu */}
          <div 
            className="lg:col-span-6 flex flex-col gap-6 lg:gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {t.team.services.map((s, i) => {
              const isActive = activeIdx === i;
              
              return (
                <div
                  key={s.t}
                  onMouseEnter={() => setActiveIdx(i)}
                  className="group relative cursor-pointer py-4 flex items-center"
                >
                  <div className="flex items-center gap-8 w-full">
                    {/* Animated Number Line */}
                    <div className="flex items-center gap-4 w-24">
                      <span className={`font-display text-lg transition-colors duration-500 ${isActive ? 'text-gold' : 'text-ivory/20'}`}>
                        0{i + 1}
                      </span>
                      <div className={`h-[1px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'w-12 bg-gold' : 'w-4 bg-gold/20 group-hover:bg-gold/50'}`} />
                    </div>

                    {/* Animated Text Fill */}
                    <h3 className="font-display text-3xl md:text-5xl lg:text-5xl relative overflow-hidden transition-all duration-500">
                      {/* Outline text (visible when not active) */}
                      <span className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)", color: "transparent" }}>
                        {s.t}
                      </span>
                      {/* Filled text (reveals on hover) */}
                      <span className={`block transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100 text-ivory drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'translate-y-full opacity-0'}`}>
                        {s.t}
                      </span>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky Stage Area (Zero Layout Thrashing, only opacity/transform) */}
          <div className="lg:col-span-6 sticky top-32 lg:top-40 h-[400px] md:h-[450px]">
            <div className="absolute inset-0 bg-midnight/95 border border-gold/15 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 z-0"
                >
                  <img 
                    src={serviceImages[activeIdx]} 
                    alt="Service background" 
                    className="w-full h-full object-cover opacity-20"
                  />
                  {/* Heavy vignette so text remains perfectly readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight/50" />
                </motion.div>
              </AnimatePresence>

              {/* Static decorative background accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_color-mix(in_oklab,var(--gold)_10%,transparent),transparent_70%)] pointer-events-none z-10" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold/30 pointer-events-none z-20" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-gold/30 pointer-events-none z-20" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-20 flex flex-col h-full justify-center p-10 md:p-16"
                >
                  {/* Active Icon */}
                  {(() => {
                    const ActiveIcon = icons[activeIdx];
                    return (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gold/30 bg-midnight/90 shadow-[0_0_30px_rgba(212,175,55,0.15)] flex items-center justify-center mb-10">
                        <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-gold" strokeWidth={1.5} />
                      </div>
                    );
                  })()}

                  <h4 className="font-display text-4xl md:text-5xl text-ivory leading-tight mb-6 drop-shadow-lg">
                    {t.team.services[activeIdx].t}
                  </h4>
                  
                  <div className="w-16 h-[2px] bg-gold/50 mb-8" />
                  
                  <p className="text-ivory/80 text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
                    {t.team.services[activeIdx].d}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
