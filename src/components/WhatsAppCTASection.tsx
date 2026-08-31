import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight, Sparkles, Clock, MapPin, Phone } from 'lucide-react';
import { STORE_DATA, getWhatsAppUrl, getPhoneCallUrl } from '../data/storeData';

export const WhatsAppCTASection: React.FC = () => {
  const quickInquiries = [
    {
      label: 'Store Location & Timings',
      message: 'Hello He "N" She Nx, could you please share your store location & today\'s closing timings?',
    },
    {
      label: "Men's Collection Inquiry",
      message: 'Hello He "N" She Nx, I would like to inquire about your men\'s fashion collection.',
    },
    {
      label: "Women's Collection Inquiry",
      message: 'Hello He "N" She Nx, I would like to inquire about your women\'s apparel & styles.',
    },
    {
      label: 'Festive & Occasion Wear',
      message: 'Hello He "N" She Nx, I am looking for festive / wedding occasion wear.',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 bg-[#0c0d10] text-white border-t border-[#c5a880]/20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-full max-w-4xl h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-b from-[#161922] to-[#101217] border border-[#c5a880]/40 p-6 sm:p-14 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[10px] sm:text-xs font-sans tracking-widest uppercase text-[#25D366] mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT MESSAGING &amp; PHONE ASSISTANCE</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-3 sm:mb-4">
            Have a Question? <br />
            <span className="font-editorial italic font-normal text-[#dfc999] normal-case">
              Let&apos;s Connect.
            </span>
          </h2>

          {/* Subtitle with Phone Number */}
          <p className="font-sans text-neutral-300 text-xs sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-3 px-2">
            Reach He &apos;N&apos; She Nx directly on WhatsApp or Call for inquiries, styles, and store directions.
          </p>

          <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-white/[0.04] border border-[#c5a880]/30 text-xs sm:text-sm font-sans mb-6 sm:mb-8 text-neutral-200">
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Direct Line / WhatsApp:</span>
            <span className="font-semibold text-white tracking-wider font-display">{STORE_DATA.contact.displayPhone}</span>
          </div>

          {/* Quick Inquiry Buttons */}
          <div className="mb-8 sm:mb-10">
            <p className="text-[10px] sm:text-xs font-sans uppercase tracking-widest text-neutral-400 mb-3">
              Tap a topic to prefill your WhatsApp message:
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {quickInquiries.map((inq) => (
                <a
                  key={inq.label}
                  href={getWhatsAppUrl(inq.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-[11px] sm:text-xs text-neutral-200 hover:text-white transition-all duration-200 flex items-center space-x-1.5 group active:scale-95"
                >
                  <span>{inq.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Action Buttons: Large WhatsApp CTA & Call Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              id="cta-main-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20ba5a] to-[#128C7E] text-black font-bold text-xs sm:text-sm tracking-[0.18em] uppercase shadow-2xl hover:shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 group"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-black" />
              <span>CHAT ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              id="cta-main-call-btn"
              href={getPhoneCallUrl()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-[#c5a880]/40 text-neutral-100 font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#c5a880]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Quick Info bar */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-neutral-400">
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{STORE_DATA.hours.displayText}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Marhatal, Jabalpur</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
