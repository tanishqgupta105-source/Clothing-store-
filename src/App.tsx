/**
 * He "N" She Nx - Luxury Fashion & Clothing Store
 * Informational Website Demo
 * Jabalpur, Madhya Pradesh, India
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { CollectionsSection } from './components/CollectionsSection';
import { StoreExperienceSection } from './components/StoreExperienceSection';
import { WhyVisitUsSection } from './components/WhyVisitUsSection';
import { AboutSection } from './components/AboutSection';
import { VisitUsSection } from './components/VisitUsSection';
import { GoogleRatingSection } from './components/GoogleRatingSection';
import { WhatsAppCTASection } from './components/WhatsAppCTASection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#f4f2ee] font-sans selection:bg-[#c5a880] selection:text-black relative">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Premium Introduction Section */}
        <IntroSection />

        {/* 3. Collections / Style Section */}
        <CollectionsSection />

        {/* 4. Store Experience Section */}
        <StoreExperienceSection />

        {/* 5. Why Visit Us Section */}
        <WhyVisitUsSection />

        {/* 6. About Section */}
        <AboutSection />

        {/* 7. Visit Our Store Section */}
        <VisitUsSection />

        {/* 8. Google Rating Section */}
        <GoogleRatingSection />

        {/* 9. Strong WhatsApp CTA Section */}
        <WhatsAppCTASection />
      </main>

      {/* 10. Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp & Utilities */}
      <FloatingActions />
    </div>
  );
}
