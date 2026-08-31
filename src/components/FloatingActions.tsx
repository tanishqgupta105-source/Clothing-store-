import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, Navigation } from 'lucide-react';
import { STORE_DATA, getWhatsAppUrl } from '../data/storeData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-[#14151a]/90 backdrop-blur-md border border-white/20 text-white hover:bg-[#c5a880] hover:text-black hover:border-[#c5a880] transition-all shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Directions on Mobile */}
      <a
        id="floating-maps-btn"
        href={STORE_DATA.location.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#14151a]/90 backdrop-blur-md border border-[#c5a880]/40 text-xs text-neutral-200 hover:text-white hover:border-[#c5a880] transition-all shadow-xl"
        title="Get directions to He 'N' She Nx"
      >
        <Navigation className="w-3.5 h-3.5 text-[#c5a880]" />
        <span>Directions</span>
      </a>

      {/* Floating WhatsApp Action with Tooltip & Pulse */}
      <motion.a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto group relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black relative z-10" />

        {/* Hover / Active Label */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#14151a]/95 backdrop-blur-md border border-[#c5a880]/30 text-white text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};
