import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Menu, X, MapPin, Clock, ArrowUpRight, Navigation, Phone } from 'lucide-react';
import { STORE_DATA, getWhatsAppUrl, getPhoneCallUrl } from '../data/storeData';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#explore' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Visit Us', href: '#visitus' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0c0d10]/95 backdrop-blur-xl border-b border-[#c5a880]/25 py-3 sm:py-3.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#0c0d10]/95 via-[#0c0d10]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex flex-col cursor-pointer transition-transform duration-300 active:scale-98"
          >
            <div className="flex items-center space-x-2">
              <span className="font-display tracking-[0.22em] text-lg sm:text-xl md:text-2xl font-bold uppercase gold-gradient-text drop-shadow">
                HE &quot;N&quot; SHE NX
              </span>
            </div>
            <span className="text-[8px] sm:text-[9.5px] tracking-[0.32em] uppercase text-[#c5a880] font-sans font-medium flex items-center space-x-1">
              <span>JABALPUR</span>
              <span className="text-[#c5a880]/60">&bull;</span>
              <span>EXCLUSIVE FASHION</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-xs tracking-[0.18em] uppercase text-neutral-300 hover:text-[#dfc999] font-medium transition-colors duration-200 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#c5a880] to-[#dfc999] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              id="nav-directions-cta"
              href={STORE_DATA.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-[#c5a880]/60 transition-all text-xs tracking-wider uppercase font-sans"
            >
              <Navigation className="w-3 h-3 text-[#c5a880]" />
              <span>Location</span>
            </a>

            <a
              id="nav-whatsapp-cta"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#161820] border border-[#c5a880]/50 text-[#f4f2ee] hover:border-[#c5a880] hover:bg-[#c5a880] hover:text-black transition-all duration-300 text-[11px] sm:text-xs font-semibold tracking-widest uppercase shadow-lg group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:text-black transition-colors shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden text-[10px]">Chat</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-200 hover:text-white bg-white/[0.04] border border-white/10 hover:border-[#c5a880]/40 transition-colors focus:outline-none touch-manipulation min-w-[42px] min-h-[42px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a880]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0c0d10]/98 backdrop-blur-2xl lg:hidden pt-20 px-5 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-5 pt-2">
              <div className="border-b border-[#c5a880]/20 pb-4">
                <div className="font-display tracking-[0.2em] text-xl font-bold gold-gradient-text uppercase">
                  HE &quot;N&quot; SHE NX
                </div>
                <div className="flex items-center space-x-2 mt-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-sans font-medium">{STORE_DATA.hours.displayText}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05 }}
                    className="font-display text-lg tracking-wider text-neutral-200 hover:text-[#dfc999] py-3 border-b border-white/5 flex items-center justify-between active:bg-white/[0.02] px-2 rounded-lg"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#c5a880]/60" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3 pt-5 border-t border-white/10">
              <div className="flex items-start space-x-2.5 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span className="leading-snug">21/A, Nagar Nigam Rd, Marhatal, Jabalpur</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>10:30 AM – 10:15 PM Daily</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-neutral-400">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={getPhoneCallUrl()} className="text-white font-medium hover:text-[#dfc999]">
                  {STORE_DATA.contact.displayPhone}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  id="mobile-menu-directions-btn"
                  href={STORE_DATA.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-white/[0.06] border border-white/15 text-white font-medium text-xs tracking-wider uppercase active:scale-[0.98] transition-transform"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Directions</span>
                </a>

                <a
                  id="mobile-menu-whatsapp-btn"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-bold text-xs tracking-wider uppercase shadow-xl active:scale-[0.98] transition-transform"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-black fill-black" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-1">
                <a
                  id="mobile-menu-call-btn"
                  href={getPhoneCallUrl()}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 font-medium text-xs tracking-wider uppercase active:scale-[0.98] transition-transform"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Call {STORE_DATA.contact.rawPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
