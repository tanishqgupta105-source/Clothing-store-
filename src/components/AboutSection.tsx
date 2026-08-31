import React from 'react';
import { motion } from 'motion/react';
import { STORE_DATA } from '../data/storeData';
import { Sparkles, Star, MapPin, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 bg-[#0c0d10] text-white border-t border-[#c5a880]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Editorial Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Primary Storefront Visual */}
              <div className="rounded-2xl overflow-hidden border border-[#c5a880]/35 shadow-2xl">
                <img
                  src={STORE_DATA.images.hero}
                  alt="He 'N' She Nx Jabalpur Flagship Store"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[440px] object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Stat / Credibility Card */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-[#14151a]/95 backdrop-blur-md border border-[#c5a880]/40 p-4 sm:p-5 rounded-2xl shadow-2xl max-w-[260px] sm:max-w-xs space-y-1.5 sm:space-y-2">
                <div className="flex items-center space-x-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-xs sm:text-sm text-white ml-1">4.4 / 5.0</span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-300 font-light leading-snug">
                  Rated by 95 customers on Google for fashion collection & friendly in-store service.
                </p>
              </div>

              {/* Top Accent Pill */}
              <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#c5a880] flex items-center space-x-1.5 shadow-lg">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Marhatal, Jabalpur</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT HE &quot;N&quot; SHE NX</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              More Than Just <br />
              <span className="font-editorial italic font-normal text-[#dfc999] normal-case">
                Clothing.
              </span>
            </h2>

            <div className="w-16 sm:w-20 h-[2px] bg-[#c5a880]/40" />

            <p className="font-sans text-neutral-200 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              He &apos;N&apos; She Nx is a fashion destination in Jabalpur where style, choice and everyday fashion come together. Visit the store and explore looks for different occasions.
            </p>

            <p className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-light">
              Whether you are preparing for a wedding celebration, an important business meeting, a casual weekend, or a festive family gathering, our store offers an inspiring selection crafted to complement every silhouette and preference.
            </p>

            {/* Quick Commitments */}
            <div className="space-y-2.5 sm:space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880] shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Curated Men&apos;s, Women&apos;s & Occasion collections under one roof</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880] shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Comfortable and spacious shopping environment in central Jabalpur</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880] shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Direct WhatsApp accessibility for customer queries and store directions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
