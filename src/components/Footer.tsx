import React from 'react';
import { STORE_DATA, getWhatsAppUrl, getPhoneCallUrl } from '../data/storeData';
import { MapPin, Clock, MessageSquare, ArrowUp, Navigation, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Explore', href: '#explore' },
    { name: 'About', href: '#about' },
    { name: 'Visit Us', href: '#visitus' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#08090c] text-white border-t border-[#c5a880]/20 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <div>
              <span className="font-display tracking-[0.2em] sm:tracking-[0.25em] text-2xl sm:text-3xl font-bold uppercase gold-gradient-text block">
                HE &quot;N&quot; SHE NX
              </span>
              <p className="font-editorial text-base sm:text-lg italic text-[#dfc999] mt-0.5 sm:mt-1">
                {STORE_DATA.tagline}
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              He &apos;N&apos; She Nx is an authentic fashion and clothing destination in Jabalpur offering curated menswear, womenswear, and ethnic occasion attire.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#14151a] hover:bg-[#25D366] hover:text-black border border-[#c5a880]/30 text-xs text-neutral-200 transition-all duration-300 active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:text-black" />
                <span>WhatsApp ({STORE_DATA.contact.rawPhone})</span>
              </a>

              <a
                href={getPhoneCallUrl()}
                className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#14151a] hover:bg-[#c5a880] hover:text-black border border-white/10 text-xs text-neutral-200 transition-all duration-300 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880] group-hover:text-black" />
                <span>Call Store</span>
              </a>

              <a
                href={STORE_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#14151a] hover:bg-white/20 hover:text-white border border-white/10 text-xs text-neutral-200 transition-all duration-300 active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <div className="text-[11px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#c5a880] font-semibold">
              Quick Links
            </div>
            <ul className="space-y-2 sm:space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    id={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-[#c5a880] transition-colors font-light flex items-center space-x-2 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c5a880]/40" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Address Column */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="text-[11px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#c5a880] font-semibold">
              Location & Timings
            </div>

            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-neutral-400 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{STORE_DATA.location.street}</div>
                  <div>{STORE_DATA.location.landmark}</div>
                  <div>{STORE_DATA.location.area}, {STORE_DATA.location.city} – {STORE_DATA.location.pincode}</div>
                  <div className="text-neutral-500">{STORE_DATA.location.state}, {STORE_DATA.location.country}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <span className="text-emerald-400 font-medium">{STORE_DATA.hours.displayText}</span>
                  <span className="text-neutral-500 block text-[11px]">{STORE_DATA.hours.timing}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <a href={getPhoneCallUrl()} className="text-white hover:text-[#dfc999] transition-colors font-medium">
                    {STORE_DATA.contact.displayPhone}
                  </a>
                  <span className="text-neutral-500 block text-[11px]">Phone &amp; WhatsApp Inquiries</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-neutral-400 font-light">
          <div>
            &copy; {new Date().getFullYear()} He &quot;N&quot; She Nx. All rights reserved. Jabalpur, MP, India.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-neutral-500 hidden sm:inline">Marhatal, Jabalpur</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 p-2 rounded-full bg-white/5 hover:bg-[#c5a880] hover:text-black transition-colors"
              aria-label="Scroll back to top"
            >
              <span className="text-xs">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
