import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "./LanguageContext";

const links = [
  { href: "#properties", key: "properties" as const },
  { href: "#why", key: "why" as const },
  { href: "#team", key: "team" as const },
  { href: "#process", key: "process" as const },
  { href: "#testimonials", key: "testimonials" as const },
  { href: "#contact", key: "contact" as const },
];

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-midnight/95 border-b border-gold/10 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo container keeps header slim while logo itself is massive */}
          <a href="#top" className="flex items-center group relative w-20 h-10 md:w-32 md:h-14">
            <motion.div
              whileHover={{ rotateY: 180, scale: 1.05 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute top-1/2 left-0 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40"
            >
              <img
                src="/Favicon.png"
                alt="Elaine Gomez Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
              />
            </motion.div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className="relative text-sm font-medium uppercase tracking-widest text-ivory/80 hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-500"
              >
                {t.nav[l.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-8">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/90 hover:text-midnight hover:bg-gold transition-all px-4 py-2 border border-gold/40 rounded-full hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <a
              href="tel:+19176012822"
              className="hidden md:flex items-center gap-3 text-sm font-medium text-ivory hover:text-gold transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <Phone className="w-3.5 h-3.5 text-gold" />
              </div>
              +1 (917) 601-2822
            </a>
            <a
              href="#contact"
              className="hidden xl:inline-flex items-center px-8 py-4 rounded-full bg-gold text-midnight text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-soft transition-all hover:scale-105 hover:shadow-[0_0_30px_color-mix(in_oklab,var(--gold)_50%,transparent)]"
            >
              {t.nav.book}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-gold p-3 hover:bg-gold/10 rounded-full transition-colors border border-gold/20"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-midnight/95 lg:hidden"
          >
            <div className="flex items-center justify-between p-6 md:p-10">
              <img src="/Favicon.png" alt="EG Logo" className="w-28 h-28 object-contain" />
              <button onClick={() => setOpen(false)} className="text-midnight p-3 bg-gold rounded-full hover:bg-gold-soft transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center gap-10 pt-16" style={{ perspective: "1000px" }}>
              {links.map((l, i) => (
                <motion.a
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, rotateX: 90, y: 30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl md:text-6xl text-ivory hover:text-gold transition-colors"
                >
                  {t.nav[l.key]}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 flex flex-col items-center gap-6"
              >
                <div className="w-20 h-[1px] bg-gold/50" />
                <a
                  href="tel:+19176012822"
                  className="text-lg text-gold font-bold tracking-[0.2em] uppercase bg-gold/10 px-8 py-4 rounded-full border border-gold/30 hover:bg-gold hover:text-midnight transition-colors"
                >
                  +1 (917) 601-2822
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
