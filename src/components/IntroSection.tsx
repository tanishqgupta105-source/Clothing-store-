import React from 'react';
import { motion } from 'motion/react';
import { STORE_DATA } from '../data/storeData';
import { Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="relative py-20 sm:py-32 bg-[#0c0d10] overflow-hidden border-t border-[#c5a880]/15">
      {/* Background subtle gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WELCOME TO HE &quot;N&quot; SHE NX</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.15]">
              Fashion for <br />
              <span className="font-editorial italic font-normal text-[#dfc999] normal-case">
                Every Moment.
              </span>
            </h2>

            <div className="w-20 h-[2px] bg-[#c5a880]/40" />

            <p className="font-sans text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              Step into a world of style and discover fashion choices designed for different personalities, occasions and everyday moments.
            </p>

            <p className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Located in the heart of Jabalpur at Marhatal, He &apos;N&apos; She Nx brings together an extensive assortment of menswear, womenswear, and ethnic occasion attire curated with care and craftsmanship.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 hover:border-[#c5a880]/30 transition-colors">
                <Compass className="w-5 h-5 text-[#c5a880]" />
                <div className="font-display text-xs sm:text-sm font-semibold text-white tracking-wider">Curated Styles</div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-light">Diverse fits for all occasions</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 hover:border-[#c5a880]/30 transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
                <div className="font-display text-xs sm:text-sm font-semibold text-white tracking-wider">Quality First</div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-light">Fine fabrics & craftsmanship</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 hover:border-[#c5a880]/30 transition-colors">
                <Heart className="w-5 h-5 text-[#c5a880]" />
                <div className="font-display text-xs sm:text-sm font-semibold text-white tracking-wider">Warm Service</div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-light">Personalized in-store care</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Asymmetrical Editorial Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative pt-4 sm:pt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Primary Image (Interior Showcase) */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a880]/35 shadow-2xl group">
                <img
                  src={STORE_DATA.images.interior}
                  alt="He 'N' She Nx Luxury Store Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-sans block mb-0.5 sm:mb-1">
                      IN-STORE ATMOSPHERE
                    </span>
                    <span className="font-display text-sm sm:text-lg font-bold text-white tracking-wider">
                      Jabalpur Flagship Showroom
                    </span>
                  </div>
                  <div className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] text-neutral-300">
                    Marhatal
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Fabric / Texture Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 rounded-xl overflow-hidden border border-[#c5a880]/40 shadow-2xl bg-[#14151a]">
                <img
                  src={STORE_DATA.images.detail}
                  alt="Fine Fabric & Texture Details"
                  referrerPolicy="no-referrer"
                  className="w-full h-32 object-cover"
                />
                <div className="p-2.5 text-center">
                  <span className="text-[10px] tracking-widest uppercase text-[#c5a880] font-medium block">
                    Finest Textures
                  </span>
                  <span className="text-[11px] text-neutral-300 font-light">
                    Premium Selections
                  </span>
                </div>
              </div>

              {/* Decorative Accent Tag */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#c5a880] text-black font-display font-bold text-[11px] sm:text-xs uppercase tracking-widest shadow-xl">
                4.4 ★ Rated Store
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
