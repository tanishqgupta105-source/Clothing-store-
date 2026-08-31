import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, UserCheck, MapPin, MessageSquare } from 'lucide-react';
import { STORE_DATA } from '../data/storeData';

export const WhyVisitUsSection: React.FC = () => {
  const icons = [
    Layers,
    UserCheck,
    MapPin,
    MessageSquare,
  ];

  return (
    <section
      id="why-visit"
      className="relative py-20 sm:py-32 bg-[#0e1014] text-white border-t border-[#c5a880]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] mb-2 sm:mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE STORE EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-3 sm:mb-4"
          >
            Why Visit He &quot;N&quot; She Nx
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-300 text-xs sm:text-base md:text-lg font-light leading-relaxed px-2"
          >
            A dedicated space in Jabalpur designed to make discovering fashion effortless, welcoming, and refined.
          </motion.p>
        </div>

        {/* 4 Clean Elegant Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {STORE_DATA.whyVisit.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.id}
                id={`why-visit-card-${item.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative rounded-2xl bg-[#14151a] border border-[#c5a880]/25 hover:border-[#c5a880]/70 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#c5a880]/15 hover:-translate-y-1"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 border border-[#c5a880]/35 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-black transition-colors duration-300 mb-5 sm:mb-6 shadow-md">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide mb-2 sm:mb-3 group-hover:text-[#dfc999] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#c5a880]/80">
                  <span className="font-sans tracking-widest text-[9px] sm:text-[10px] uppercase text-[#c5a880]">
                    Feature 0{item.id}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] shadow-sm shadow-[#c5a880]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
