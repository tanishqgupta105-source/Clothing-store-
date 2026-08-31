import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Navigation, Sparkles, Star, MapPin, MessageSquare, Phone } from 'lucide-react';
import { STORE_DATA, getWhatsAppUrl, getPhoneCallUrl } from '../data/storeData';

export const HeroSection: React.FC = () => {
  const scrollToExplore = () => {
    const el = document.getElementById('explore');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

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
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#0c0d10]"
    >
      {/* Background Image Container with Cinematic Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src={STORE_DATA.images.hero}
          alt="He 'N' She Nx Storefront Jabalpur"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in filter brightness-[0.7] contrast-[1.12]"
        />
        {/* Dark luxury vignettes and gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/65 to-[#0c0d10]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/85" />
        {/* Subtle decorative gold ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill & Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#c5a880]/40 text-[10px] sm:text-xs tracking-widest text-[#f4f2ee] uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-emerald-300 font-sans">{STORE_DATA.hours.displayText}</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs tracking-widest text-neutral-300 uppercase shadow-lg">
            <MapPin className="w-3 h-3 text-[#c5a880]" />
            <span className="font-sans">Marhatal, Jabalpur</span>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-[#25D366]/20 backdrop-blur-md border border-[#25D366]/40 text-[10px] sm:text-xs tracking-widest text-emerald-300 uppercase shadow-lg transition-colors"
          >
            <MessageSquare className="w-3 h-3 text-[#25D366]" />
            <span className="font-sans">WhatsApp: {STORE_DATA.contact.rawPhone}</span>
          </a>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-[10px] sm:text-xs text-amber-300 shadow-lg">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-semibold">4.4</span>
            <span className="text-neutral-400 text-[10px] hidden sm:inline">(95 Reviews)</span>
          </div>
        </motion.div>

        {/* Brand Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-3 sm:mb-5"
        >
          <h2 className="text-[10px] sm:text-xs md:text-sm tracking-[0.35em] sm:tracking-[0.45em] uppercase text-[#c5a880] font-sans font-semibold mb-2 sm:mb-3">
            EXCLUSIVE FASHION DESTINATION
          </h2>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.16em] sm:tracking-[0.2em] gold-gradient-text drop-shadow-2xl">
            HE &quot;N&quot; SHE NX
          </h1>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-20 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a880] to-transparent my-3 sm:my-5"
        />

        {/* Main Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-editorial text-2xl sm:text-3xl md:text-4xl italic text-neutral-100 mb-2 sm:mb-3 tracking-wide"
        >
          &ldquo;Style Begins With You.&rdquo;
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-sans text-neutral-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-light px-2"
        >
          Discover fashion, elegance and styles for every occasion at He &apos;N&apos; She Nx in central Jabalpur.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-lg mx-auto px-2"
        >
          <button
            id="hero-explore-btn"
            type="button"
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#dfc999] via-[#c5a880] to-[#9a7b53] hover:opacity-95 text-black font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#c5a880]/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Explore Collections</span>
          </button>

          <button
            id="hero-directions-btn"
            type="button"
            onClick={scrollToVisit}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-[#c5a880]/50 hover:border-[#c5a880] text-neutral-100 font-medium text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <Navigation className="w-4 h-4 text-[#c5a880]" />
            <span>Visit Store</span>
          </button>

          <a
            id="hero-whatsapp-btn"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden w-full px-6 py-3 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-medium text-xs tracking-wider uppercase flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inquire on WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        onClick={scrollToExplore}
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-neutral-400 group-hover:text-[#c5a880] transition-colors mb-1 font-sans">
          Scroll to discover
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#c5a880]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
