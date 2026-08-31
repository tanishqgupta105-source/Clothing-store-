import React from 'react';
import { motion } from 'motion/react';
import { STORE_DATA } from '../data/storeData';
import { Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const StoreExperienceSection: React.FC = () => {
  const scrollToVisit = () => {
    const el = document.getElementById('visitus');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-32 bg-[#0c0d10] text-white border-t border-[#c5a880]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#14151a] border border-[#c5a880]/35 shadow-2xl">
          {/* Background Interior Image with Cinematic Treatment */}
          <div className="absolute inset-0 z-0">
            <img
              src={STORE_DATA.images.interior}
              alt="He 'N' She Nx Showroom Experience Jabalpur"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d10] via-[#0c0d10]/85 to-black/70" />
            <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 p-6 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 space-y-5 sm:space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#c5a880]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>IN-STORE EXPERIENCE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
                Experience Fashion <br />
                <span className="font-editorial italic font-normal text-[#dfc999] normal-case">
                  In Person.
                </span>
              </h2>

              <p className="font-sans text-neutral-200 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
                Visit He &apos;N&apos; She Nx in Jabalpur and explore a variety of fashion styles in store.
              </p>

              {/* Experience Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-200 font-light p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>Curated racks with diverse cuts, colors, and textures</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-200 font-light p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>Personal styling guidance for special events</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-200 font-light p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>Comfortable fitting spaces & spacious showroom</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-200 font-light p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>Located opposite Deshbandhu Complex, Marhatal</span>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="store-experience-visit-btn"
                  type="button"
                  onClick={scrollToVisit}
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#dfc999] via-[#c5a880] to-[#9a7b53] hover:opacity-95 text-black font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#c5a880]/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-black" />
                  <span>Visit Our Store</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </motion.div>

            {/* Right Card / Location Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-[#c5a880]/35 p-6 space-y-4 text-center sm:text-left shadow-xl"
            >
              <div className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880]">
                STORE SCHEDULE
              </div>
              <div className="font-display text-2xl font-bold text-white">
                Open Everyday
              </div>
              <div className="space-y-2.5 text-xs text-neutral-300 border-t border-white/10 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Timings:</span>
                  <span className="font-medium text-white">{STORE_DATA.hours.timing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Status:</span>
                  <span className="font-medium text-emerald-400">{STORE_DATA.hours.displayText}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Location:</span>
                  <span className="font-medium text-white">Marhatal, Jabalpur</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
