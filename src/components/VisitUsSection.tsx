import React, { useState } from 'react';
import { motion } from 'motion/react';
import { STORE_DATA, getWhatsAppUrl, getPhoneCallUrl } from '../data/storeData';
import { MapPin, Navigation, MessageSquare, Clock, Copy, Check, ExternalLink, Sparkles, Phone } from 'lucide-react';

export const VisitUsSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_DATA.location.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(STORE_DATA.contact.rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="visitus"
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
            <span>FIND OUR STORE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-3 sm:mb-4"
          >
            Come, Discover Your Style.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-300 text-xs sm:text-base md:text-lg font-light leading-relaxed px-2"
          >
            Experience our fashion collection in person at our central Jabalpur showroom.
          </motion.p>
        </div>

        {/* Store Location Card & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-2xl bg-[#14151a] border border-[#c5a880]/35 p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-5 sm:space-y-6">
              {/* Store Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-sans block">
                    FLAGSHIP BOUTIQUE
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                    {STORE_DATA.name}
                  </h3>
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">{STORE_DATA.hours.status}</span>
                </div>
              </div>

              {/* Hours Pill */}
              <div className="flex items-start space-x-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs tracking-wider uppercase text-white font-medium">
                    {STORE_DATA.hours.displayText}
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 font-light mt-0.5">
                    {STORE_DATA.hours.timing} &bull; {STORE_DATA.hours.days}
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp Contact Block */}
              <div className="space-y-2.5 sm:space-y-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-[#c5a880]/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold text-[#dfc999] tracking-wider uppercase">
                    <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>WhatsApp &amp; Phone Inquiries</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center space-x-1 text-[10px] sm:text-[11px] text-[#c5a880] hover:text-white transition-colors"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between pl-5 sm:pl-6 pt-0.5">
                  <div>
                    <a
                      href={getPhoneCallUrl()}
                      className="font-display text-base sm:text-lg font-bold text-white tracking-wider hover:text-[#dfc999] transition-colors flex items-center space-x-1.5"
                    >
                      <span>{STORE_DATA.contact.displayPhone}</span>
                    </a>
                    <p className="text-[11px] text-neutral-400 font-light">Available for store inquiries &amp; directions</p>
                  </div>

                  <a
                    href={getPhoneCallUrl()}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#c5a880] hover:text-black border border-white/15 text-neutral-200 text-xs font-medium tracking-wider uppercase transition-all flex items-center space-x-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                </div>
              </div>

              {/* Full Address Block */}
              <div className="space-y-2.5 sm:space-y-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold text-[#dfc999] tracking-wider uppercase">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Store Location</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center space-x-1 text-[10px] sm:text-[11px] text-[#c5a880] hover:text-white transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed font-light pl-5 sm:pl-6">
                  <p className="font-medium text-white">{STORE_DATA.location.street},</p>
                  <p>{STORE_DATA.location.landmark},</p>
                  <p>{STORE_DATA.location.area},</p>
                  <p>{STORE_DATA.location.city}, {STORE_DATA.location.state} – {STORE_DATA.location.pincode}</p>
                  <p className="text-neutral-400 text-xs">{STORE_DATA.location.country}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 space-y-3">
              <a
                id="visitus-get-directions-btn"
                href={STORE_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#dfc999] via-[#c5a880] to-[#9a7b53] hover:opacity-95 text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>

              <a
                id="visitus-whatsapp-btn"
                href={getWhatsAppUrl('Hello He "N" She Nx, I need assistance with store directions & timings.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-black/60 hover:bg-[#25D366] hover:text-black border border-[#c5a880]/30 text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] group-hover:text-black" />
                <span>Chat on WhatsApp ({STORE_DATA.contact.rawPhone})</span>
              </a>
            </div>
          </motion.div>

          {/* Right Interactive Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#14151a] border border-[#c5a880]/35 shadow-2xl relative flex flex-col"
          >
            {/* Map Header bar */}
            <div className="p-3.5 sm:p-4 bg-[#0c0d10] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] sm:text-xs text-neutral-400 font-sans ml-1 sm:ml-2">
                  Google Maps &bull; Marhatal, Jabalpur
                </span>
              </div>

              <a
                href={STORE_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[11px] sm:text-xs text-[#c5a880] hover:text-white transition-colors"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>

            {/* Map Embed Frame */}
            <div className="relative w-full h-[320px] sm:h-[440px] md:h-[480px] bg-neutral-900">
              <iframe
                title="He 'N' She Nx Google Maps Location"
                src={STORE_DATA.location.googleMapsEmbedUrl}
                className="w-full h-full border-0 filter grayscale-[20%] contrast-110"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Pin Card */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-[#0c0d10]/95 backdrop-blur-md border border-[#c5a880]/40 p-3 sm:p-3.5 rounded-xl shadow-2xl">
                <div className="flex items-start space-x-2.5 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-[#c5a880] text-black shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="font-display text-[11px] sm:text-xs font-bold text-white uppercase">
                      HE &quot;N&quot; SHE NX
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-300 font-light mt-0.5">
                      Opposite Deshbandhu Complex, Marhatal
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#c5a880] font-sans font-medium mt-1">
                      {STORE_DATA.hours.displayText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
