import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/components/site/LanguageContext";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Properties } from "@/components/site/Properties";
import { PosterShowcase } from "@/components/site/PosterShowcase";
import { WhyDR } from "@/components/site/WhyDR";
import { TeamServices } from "@/components/site/TeamServices";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")(
  {
    component: Index,
  },
);

function Index() {
  return (
    <LanguageProvider>
      <div className="bg-midnight text-ivory overflow-x-hidden selection:bg-gold selection:text-midnight">
        <Nav />
        <main>
          <Hero />
          
          <div className="relative z-10 bg-midnight">
            <About />
            <Properties />
            
            <PosterShowcase
              label="Marketing Poster"
              quote="Redefining luxury across borders."
              image="/474386429_595650429875063_3925279158231061709_n.jpg"
            />
            
            <WhyDR />

            {/* ── Cinematic Quote Section ── */}
            <section className="relative py-48 md:py-64 px-6 lg:px-12 overflow-hidden bg-midnight border-y border-gold/10">
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_color-mix(in_oklab,var(--gold)_5%,transparent),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_color-mix(in_oklab,var(--gold)_4%,transparent),transparent_50%)] pointer-events-none" />

              <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: "opacity, transform" }}
                  className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-6 mb-16">
                    <div className="w-24 h-[1px] bg-gradient-to-r from-gold to-transparent shadow-[0_0_15px_var(--gold)]" />
                    <span className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">
                      The Philosophy
                    </span>
                  </div>

                  <div className="relative mb-16">
                    <div className="font-display text-[120px] md:text-[160px] text-gold/10 leading-none absolute -top-16 md:-top-20 -left-6 md:-left-12 select-none pointer-events-none">&ldquo;</div>
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1] relative z-10 drop-shadow-2xl">
                      Every client deserves <i className="text-gold font-light">discretion</i>, <i className="text-gold font-light">expertise</i>, and a team that treats their investment as if it were our own.
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 md:gap-8 border-l-2 border-gold/30 pl-6 md:pl-8 py-2">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] hidden md:block">
                      <img src="/475041296_600147886091984_448001193641357333_n.jpg" alt="Elaine Portrait" className="w-full h-full object-cover object-[center_20%]" />
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-display text-gold tracking-wide">Elaine Gomez</div>
                      <div className="text-[9px] text-ivory/50 mt-1 uppercase tracking-[0.3em] font-bold">Founder & Lead Broker</div>
                    </div>
                  </div>
                </motion.div>

                {/* Imagery */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: "opacity, transform", perspective: "2000px" }}
                  className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center lg:justify-end"
                >
                  <div className="relative w-full max-w-[550px] group">
                    {/* Outer glow */}
                    <div className="absolute -inset-10 bg-gold/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    <div className="relative rounded-sm overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-gold/20 bg-midnight">
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-1000" />
                      <img
                        src="/476901930_608850395221733_6041988129030873641_n.jpg"
                        alt="Elaine Gomez"
                        className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] filter contrast-[1.05]"
                      />
                      
                      {/* Sweeping glare */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full skew-x-[-30deg] group-hover:animate-[sweep_2.5s_ease-out_forwards]" />
                      
                      {/* Floating Glassmorphism Badge */}
                      <div className="absolute bottom-8 left-8 right-8 p-8 bg-midnight/40 backdrop-blur-2xl border border-gold/20 z-30 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
                          <div className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Global Reach</div>
                        </div>
                        <div className="text-ivory/80 text-sm font-light leading-relaxed">
                          Connecting Miami's elite investors with the Caribbean's most exclusive development opportunities.
                        </div>
                      </div>
                    </div>

                    {/* Corner accents outside image */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 border-t-[2px] border-r-[2px] border-gold/30 pointer-events-none transition-transform duration-1000 ease-out group-hover:translate-x-2 group-hover:-translate-y-2" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-[2px] border-l-[2px] border-gold/30 pointer-events-none transition-transform duration-1000 ease-out group-hover:-translate-x-2 group-hover:translate-y-2" />
                  </div>
                </motion.div>
              </div>
            </section>

            <TeamServices />
            <PosterShowcase
              label="Atlántida Property"
              quote="Where tropical serenity meets architectural brilliance."
              image="/480297517_666775909250380_1257251399658211168_n.jpg"
              reverse={true}
            />
            <HowItWorks />
            <Testimonials />
            <Contact />
          </div>
        </main>
        <Footer />
        <WhatsAppFab />
        <Toaster theme="dark" position="bottom-center" />
      </div>
    </LanguageProvider>
  );
}
