import { Instagram, Phone, Mail } from "lucide-react";
import { useLang } from "./LanguageContext";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-gold/20 py-24 px-6 lg:px-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-ink/40 to-ink/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_color-mix(in_oklab,var(--gold)_8%,transparent),transparent_60%)]" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Logo and tagline centered */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <img
            src="/Favicon.png"
            alt="Elaine Gomez Logo"
            className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] scale-110 md:scale-125"
          />
          <div className="font-display text-ivory text-4xl md:text-5xl tracking-wide mb-3">Elaine Gomez</div>
          <p className="text-ivory/60 text-base max-w-md mx-auto">{t.footer.tagline}</p>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-16" />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm text-ivory/80 space-y-4"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-gold"></span> Contact
            </div>
            <a href="tel:+19176012822" className="flex items-center gap-4 hover:text-gold transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-base font-medium">+1 (917) 601-2822</span>
            </a>
            <a href="mailto:elainegomez18@icloud.com" className="flex items-center gap-4 hover:text-gold transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                <Mail className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-base font-medium">elainegomez18@icloud.com</span>
            </a>
            <a
              href="https://instagram.com/Elainesellsmiamianddr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-gold transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                <Instagram className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-base font-medium">@Elainesellsmiamianddr</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm text-ivory/80 text-center"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-gold"></span> Quick Links <span className="w-6 h-px bg-gold"></span>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-[250px] mx-auto">
              {[
                { href: "#properties", label: "Properties" },
                { href: "#why", label: "Why DR" },
                { href: "#team", label: "The Team" },
                { href: "#process", label: "Process" },
                { href: "#testimonials", label: "Clients" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="hover:text-gold transition-colors text-base font-medium hover:translate-x-1 inline-block transform duration-300 text-left">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm text-ivory/80 md:text-right"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6 flex items-center justify-end gap-3">
               Office <span className="w-6 h-px bg-gold"></span>
            </div>
            <p className="text-base leading-relaxed font-medium">
              8180 NW 36th Street<br/>Suite 308<br/>
              Doral, FL 33178
            </p>
            <a href="https://elainesellsmiamianddr.com" className="text-gold hover:text-ivory transition-colors mt-6 inline-block font-bold tracking-wider text-base border-b border-gold/50 hover:border-gold pb-1">
              elainesellsmiamianddr.com
            </a>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative mt-20 pt-8 border-t border-gold/20">
        <div className="flex flex-wrap gap-4 justify-between items-center text-xs text-stone">
          <div className="font-medium tracking-wide">© {new Date().getFullYear()} Elaine Gomez. {t.footer.rights}</div>
          <div className="font-display italic text-gold/80 text-lg">Miami <span className="text-gold/30 px-2">•</span> Cap Cana <span className="text-gold/30 px-2">•</span> Punta Cana</div>
        </div>
      </div>
    </footer>
  );
}
