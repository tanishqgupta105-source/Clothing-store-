import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import { STORE_DATA } from '../data/storeData';

export const GoogleRatingSection: React.FC = () => {
  return (
    <section
      id="ratings"
      className="relative py-16 sm:py-24 bg-[#0c0d10] text-white border-t border-[#c5a880]/20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-b from-[#14151a] to-[#0c0d10] border border-[#c5a880]/35 p-6 sm:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-72 h-64 sm:h-72 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-5 sm:space-y-6">
            {/* Google Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-sans tracking-widest uppercase text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a880]" />
              <span>Verified Customer Feedback</span>
            </div>

            {/* Score & Stars */}
            <div className="flex flex-col items-center">
              <div className="font-display text-5xl sm:text-7xl font-black text-white tracking-tight flex items-baseline justify-center space-x-3">
                <span className="gold-gradient-text">{STORE_DATA.rating.score}</span>
                <span className="text-2xl sm:text-3xl text-amber-400 font-sans font-bold">★</span>
              </div>

              {/* 5-Star Row */}
              <div className="flex items-center space-x-1 sm:space-x-1.5 text-amber-400 my-2 sm:my-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-6 sm:h-6 fill-amber-400 text-amber-400 ${
                      i === 4 ? 'opacity-80' : ''
                    }`}
                  />
                ))}
              </div>

              {/* Subtext */}
              <p className="font-editorial text-lg sm:text-2xl italic text-[#dfc999]">
                Based on {STORE_DATA.rating.totalReviews} Google Reviews
              </p>

              <p className="font-sans text-neutral-400 text-xs sm:text-sm max-w-md mx-auto mt-2 font-light px-2">
                Recognized across Jabalpur for quality clothing selections, dependable customer guidance, and a welcoming in-store ambiance.
              </p>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-3 sm:pt-4 border-t border-white/10 text-xs text-neutral-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span>Authentic Local Business</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span>Central Marhatal Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span>Direct WhatsApp Inquiries</span>
              </div>
            </div>

            <a
              id="google-maps-reviews-link"
              href={STORE_DATA.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-sans tracking-widest uppercase text-[#c5a880] hover:text-[#dfc999] transition-colors pt-1"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
