import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, MessageSquare, Check, X, ShieldCheck } from 'lucide-react';
import { STORE_DATA, getWhatsAppUrl } from '../data/storeData';

export const CollectionsSection: React.FC = () => {
  const [activeCategoryModal, setActiveCategoryModal] = useState<string | null>(null);

  const selectedCategory = STORE_DATA.styleCategories.find(
    (c) => c.id === activeCategoryModal
  );

  return (
    <section
      id="explore"
      className="relative py-20 sm:py-32 bg-[#0e1014] text-white border-t border-[#c5a880]/20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>CURATED COLLECTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-3 sm:mb-4"
          >
            Explore Your Style
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-300 text-xs sm:text-base md:text-lg font-light leading-relaxed px-2"
          >
            A curated portfolio of fashion styles crafted for everyday elegance, festive celebrations, and refined personal statements.
          </motion.p>
        </div>

        {/* 3 Main Editorial Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {STORE_DATA.styleCategories.map((category, index) => (
            <motion.div
              key={category.id}
              id={`style-card-${category.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-[#14151a] border border-[#c5a880]/25 hover:border-[#c5a880]/70 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:shadow-[#c5a880]/15"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={category.image}
                  alt={category.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14151a] via-[#14151a]/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#c5a880] font-sans">
                    0{index + 1} &bull; COUTURE
                  </span>
                </div>

                {/* Subtitle overlay */}
                <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5">
                  <p className="font-editorial text-lg sm:text-2xl italic text-[#dfc999] mb-0.5 sm:mb-1">
                    &ldquo;{category.subtitle}&rdquo;
                  </p>
                  <h3 className="font-display text-lg sm:text-2xl font-bold uppercase tracking-wider text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
                <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {category.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-neutral-300 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveCategoryModal(category.id)}
                    className="inline-flex items-center space-x-1.5 text-xs font-sans tracking-[0.15em] uppercase text-[#c5a880] hover:text-[#dfc999] transition-colors py-1.5 active:scale-95"
                  >
                    <span>View Highlights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello He "N" She Nx, I would like to inquire about your ${category.title} collection.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-2 rounded-full bg-white/5 hover:bg-[#25D366] text-neutral-300 hover:text-black transition-all duration-300 active:scale-95 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title={`Inquire about ${category.title} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366] group-hover:text-black" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Details Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#14151a] border border-[#c5a880]/50 overflow-hidden shadow-2xl p-5 sm:p-8 my-auto"
            >
              <button
                type="button"
                onClick={() => setActiveCategoryModal(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
                <div className="w-full sm:w-1/2 aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full sm:w-1/2 space-y-3 sm:space-y-4">
                  <div className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#c5a880]">
                    STYLE SHOWCASE
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white leading-tight">
                    {selectedCategory.title}
                  </h3>
                  <p className="font-editorial text-base sm:text-lg italic text-[#dfc999]">
                    &ldquo;{selectedCategory.subtitle}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {selectedCategory.description}
                  </p>

                  <div className="space-y-1.5 pt-1 sm:pt-2">
                    <div className="text-[11px] font-semibold text-white tracking-wider uppercase">
                      Featured in Store:
                    </div>
                    {selectedCategory.tags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <a
                      href={getWhatsAppUrl(`Hello He "N" She Nx, I would like to check available looks for ${selectedCategory.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfc999] via-[#c5a880] to-[#9a7b53] text-black font-bold text-xs tracking-widest uppercase shadow-xl hover:opacity-95 transition-opacity"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
