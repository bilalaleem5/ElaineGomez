import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "./LanguageContext";

export function Contact() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success(t.contact.form.sent);
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="relative py-40 md:py-52 px-6 lg:px-12 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-midnight" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,_color-mix(in_oklab,var(--gold)_8%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,_color-mix(in_oklab,var(--gold)_5%,transparent),transparent_50%)]" />

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-20"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[2px] bg-gold" />
            <span className="text-sm font-bold uppercase tracking-[0.45em] text-gold">{t.contact.eyebrow}</span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl text-ivory leading-[0.9] tracking-tight mb-8">
            {t.contact.title}
          </h2>
          <p className="text-ivory/60 text-xl font-light leading-relaxed border-l-2 border-gold/30 pl-6 max-w-xl">
            {t.contact.sub}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Contact rows */}
            <ContactRow icon={Phone} label={t.contact.call} value="+1 (917) 601-2822" href="tel:+19176012822" />
            <ContactRow icon={Mail} label={t.contact.email} value="elainegomez18@icloud.com" href="mailto:elainegomez18@icloud.com" />
            <ContactRow icon={MapPin} label={t.contact.office} value="8180 NW 36th St, Suite 308, Doral, FL 33178" />
            <ContactRow icon={Instagram} label="Instagram" value="@Elainesellsmiamianddr" href="https://instagram.com/Elainesellsmiamianddr" />

            {/* WhatsApp CTA */}
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(37,211,102,0.4)" }}
              href="https://wa.me/19176012822"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 px-8 py-5 rounded-full bg-[#25D366]/10 text-[#25D366] text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#25D366] hover:text-midnight transition-all duration-500 border border-[#25D366]/40 hover:border-[#25D366]"
            >
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
                <path d="M19.11 17.29c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.21-.45-2.3-1.42-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48-.17 0-.36-.02-.55-.02-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39s1.02 2.77 1.17 2.96c.14.19 2.02 3.09 4.9 4.33.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.13-.26-.19-.55-.34zM16.02 5C9.94 5 5 9.94 5 16c0 1.93.5 3.82 1.46 5.48L5 27l5.66-1.48A11 11 0 1 0 16.02 5zm0 20.15c-1.75 0-3.46-.47-4.95-1.35l-.35-.21-3.36.88.9-3.27-.23-.36A9.14 9.14 0 1 1 16.02 25.15z" />
              </svg>
              {t.contact.wa}
            </motion.a>

            {/* Social proof */}
            <div className="pt-8 border-t border-gold/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {["https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
                  ].map((src) => (
                    <div key={src} className="w-11 h-11 rounded-full border-2 border-midnight overflow-hidden">
                      <img src={src} alt="Investor" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-11 h-11 rounded-full border-2 border-midnight bg-gold/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gold">+47</span>
                  </div>
                </div>
                <div className="text-sm text-ivory/60 font-light">
                  <span className="text-gold font-bold">50+</span> satisfied investors worldwide
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-6 p-10 md:p-14 rounded-2xl border border-gold/20 bg-ink/95 relative overflow-hidden group hover:border-gold/40 transition-all duration-700 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/20 rounded-tl-2xl group-hover:border-gold/60 transition-colors duration-700" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20 rounded-br-2xl group-hover:border-gold/60 transition-colors duration-700" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Field name="name" label={t.contact.form.name} required focused={focused} setFocused={setFocused} />
              <Field name="email" type="email" label={t.contact.form.email} required focused={focused} setFocused={setFocused} />
            </div>
            <Field name="phone" type="tel" label={t.contact.form.phone} focused={focused} setFocused={setFocused} />

            <div>
              <Label>{t.contact.form.interest}</Label>
              <select
                name="interest"
                className="w-full bg-midnight/70 border border-gold/20 rounded-xl px-5 py-4 text-ivory text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_20px_color-mix(in_oklab,var(--gold)_15%,transparent)] transition-all duration-500 appearance-none cursor-pointer"
              >
                {t.contact.form.interestOptions.map((o) => (
                  <option key={o} className="bg-midnight">{o}</option>
                ))}
              </select>
            </div>

            <div>
              <Label>{t.contact.form.message}</Label>
              <textarea
                name="message"
                rows={5}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full bg-midnight/70 border border-gold/20 rounded-xl px-5 py-4 text-ivory text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_20px_color-mix(in_oklab,var(--gold)_15%,transparent)] transition-all duration-500 resize-none placeholder-ivory/30"
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02, boxShadow: "0 0 50px color-mix(in oklab, var(--gold) 50%, transparent)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-gold text-midnight text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all disabled:opacity-60"
            >
              <span className="relative z-10 flex items-center gap-3">
                {sending ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-midnight border-t-transparent rounded-full inline-block"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <span className="w-6 h-[1px] bg-midnight group-hover:w-10 transition-all duration-500 relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-midnight rotate-45" />
                    </span>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-ivory translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
      className="flex gap-5 items-start group"
    >
      <div className="w-14 h-14 shrink-0 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_0_25px_color-mix(in_oklab,var(--gold)_25%,transparent)] transition-all duration-500">
        <Icon className="w-5 h-5 text-gold group-hover:text-midnight transition-colors" strokeWidth={1.5} />
      </div>
      <div className="pt-1">
        <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-1.5">{label}</div>
        <div className="text-ivory/90 text-base group-hover:text-gold transition-colors duration-300 font-light">{value}</div>
      </div>
    </Wrapper>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">{children}</label>
  );
}

function Field({
  name, label, type = "text", required, focused, setFocused,
}: {
  name: string; label: string; type?: string; required?: boolean;
  focused: string | null; setFocused: (v: string | null) => void;
}) {
  const isFocused = focused === name;
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        className="w-full bg-midnight/70 border border-gold/20 rounded-xl px-5 py-4 text-ivory text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_20px_color-mix(in_oklab,var(--gold)_15%,transparent)] transition-all duration-500 placeholder-ivory/30"
        style={isFocused ? { borderColor: "var(--gold)", background: "oklch(0.2 0.04 260 / 80%)" } : {}}
      />
    </div>
  );
}
