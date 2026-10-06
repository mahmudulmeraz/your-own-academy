import React, { useState } from 'react';
import { UtilityBar } from './components/UtilityBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { StudentLifeGallery } from './components/StudentLifeGallery';
import { AdmissionsCtaStrip } from './components/AdmissionsCtaStrip';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AchievementsSection } from './components/AchievementsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { FaqSection } from './components/FaqSection';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AdmissionsModal } from './components/AdmissionsModal';
import { SearchModal } from './components/SearchModal';
import { LightboxModal } from './components/LightboxModal';
import { PortalModal } from './components/PortalModal';
import { GalleryItem } from './types';

export default function App() {
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Slim Institutional Top Utility Bar */}
      <UtilityBar
        onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        onOpenPortal={() => setPortalModalOpen(true)}
      />

      {/* 2. Premium White Institutional Navigation */}
      <Navbar
        onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenPortal={() => setPortalModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 3. Large Cinematic Hero Section */}
        <Hero
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
          onExploreCampus={() => scrollToSection('facilities')}
        />

        {/* 4. Floating Feature / Trust Strip */}
        <FeatureStrip />

        {/* 5. Welcome & Institutional Story Split Section */}
        <AboutSection
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        />

        {/* 6. Academics & Holistic Student Cultivation Section */}
        <AcademicsSection
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        />

        {/* 7. World-Class Infrastructure & Facilities */}
        <FacilitiesSection />

        {/* 8. Student Life & Vibrant Campus Life Gallery */}
        <StudentLifeGallery
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* 9. Admissions Conversion Banner */}
        <AdmissionsCtaStrip
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        />

        {/* 10. Distinctive Advantages: Why Choose Us */}
        <WhyChooseUs
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        />

        {/* 11. Measured Outcomes & Achievements (Dark Institutional Green) */}
        <AchievementsSection />

        {/* 12. Community Voices: Testimonials */}
        <TestimonialsSection />

        {/* 13. Latest News & Calendar Dispatches */}
        <NewsEventsSection />

        {/* 14. Frequently Asked Questions (Accessible Accordion) */}
        <FaqSection />

        {/* 15. Official Admissions Lead & Enquiry Form */}
        <EnquiryFormSection />

        {/* 16. Final Conversion CTA Block */}
        <FinalCtaSection
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
          onScrollToEnquiry={() => scrollToSection('enquiry-form')}
        />
      </main>

      {/* 17. Institutional Dark Green Footer */}
      <Footer
        onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        onOpenPortal={() => setPortalModalOpen(true)}
      />

      {/* Interactive Modals */}
      <AdmissionsModal
        isOpen={admissionsModalOpen}
        onClose={() => setAdmissionsModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectAction={scrollToSection}
      />

      <PortalModal
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
      />

      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </div>
  );
}
