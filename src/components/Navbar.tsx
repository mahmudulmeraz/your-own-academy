import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, X, ArrowRight, BookOpen, Building2, Calendar, Phone, Award } from 'lucide-react';
import { CrestLogo } from './CrestLogo';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onOpenSearch: () => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmissions,
  onOpenSearch,
  onOpenPortal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? 'shadow-sm py-2.5 border-b border-slate-200'
          : 'py-3.5 border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Academic Logo & Crest */}
        <a
          href="#"
          className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded py-1"
          aria-label="Your Own Academy Home"
        >
          <CrestLogo variant="light" size={isScrolled ? 'sm' : 'md'} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13.5px] font-medium text-slate-700" aria-label="Main Navigation">
          <a
            href="#"
            className="px-3 py-2 text-blue-600 font-semibold border-b-2 border-blue-600 transition-colors"
          >
            Home
          </a>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={closeDropdown}
          >
            <a
              href="#about"
              className="px-3 py-2 hover:text-blue-600 transition-colors flex items-center gap-1 group"
            >
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200" />
            </a>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-xl border border-slate-200 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href="#about"
                  onClick={closeDropdown}
                  className="block px-4 py-2 hover:bg-slate-50 text-[13px] text-slate-800 hover:text-blue-600"
                >
                  <p className="font-semibold">Our Heritage & Mission</p>
                  <p className="text-[11px] text-slate-500">28 years of academic excellence</p>
                </a>
                <a
                  href="#why-choose-us"
                  onClick={closeDropdown}
                  className="block px-4 py-2 hover:bg-slate-50 text-[13px] text-slate-800 hover:text-blue-600"
                >
                  <p className="font-semibold">Why Choose Our Academy</p>
                  <p className="text-[11px] text-slate-500">Distinctive educational pillars</p>
                </a>
                <a
                  href="#achievements"
                  onClick={closeDropdown}
                  className="block px-4 py-2 hover:bg-slate-50 text-[13px] text-slate-800 hover:text-blue-600"
                >
                  <p className="font-semibold">Academic Accreditations</p>
                  <p className="text-[11px] text-slate-500">Cambridge CAIE & National Board</p>
                </a>
              </div>
            )}
          </div>

          {/* Academics Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('academics')}
            onMouseLeave={closeDropdown}
          >
            <a
              href="#academics"
              className="px-3 py-2 hover:text-blue-600 transition-colors flex items-center gap-1 group"
            >
              <span>Academics</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200" />
            </a>

            {activeDropdown === 'academics' && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-md shadow-xl border border-slate-200 py-2 mt-1 z-50">
                <a
                  href="#academics"
                  onClick={closeDropdown}
                  className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-blue-600"
                >
                  <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[13px]">Pre-Primary to Grade XII</p>
                    <p className="text-[11px] text-slate-500">Comprehensive holistic curriculum</p>
                  </div>
                </a>
                <a
                  href="#academics"
                  onClick={closeDropdown}
                  className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-blue-600"
                >
                  <Award className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[13px]">Cambridge Advanced & AP</p>
                    <p className="text-[11px] text-slate-500">College-preparatory honors tracks</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Facilities Link */}
          <a
            href="#facilities"
            className="px-3 py-2 hover:text-blue-600 transition-colors"
          >
            Facilities
          </a>

          {/* Admissions Link */}
          <a
            href="#admissions-cta"
            className="px-3 py-2 hover:text-blue-600 transition-colors"
          >
            Admissions
          </a>

          {/* Student Life */}
          <a
            href="#student-life"
            className="px-3 py-2 hover:text-blue-600 transition-colors"
          >
            Campus Life
          </a>

          {/* Gallery */}
          <a
            href="#gallery"
            className="px-3 py-2 hover:text-blue-600 transition-colors"
          >
            Gallery
          </a>

          {/* Contact */}
          <a
            href="#enquiry-form"
            className="px-3 py-2 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Action Cluster: Search & Gold CTA */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            aria-label="Search courses, faculty, and admissions"
            title="Search Academy"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* Geometric Admission CTA */}
          <button
            type="button"
            onClick={onOpenAdmissions}
            className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[13px] tracking-wide px-4 py-2 rounded-sm transition-all duration-200 shadow-sm hover:shadow active:scale-98 cursor-pointer group"
          >
            <span>ENQUIRE NOW</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-3">
          <div className="flex flex-col space-y-1 text-[15px] font-medium text-slate-800">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50 text-blue-600 font-semibold"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              About Us
            </a>
            <a
              href="#academics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              Academics & Curricula
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              World-Class Facilities
            </a>
            <a
              href="#student-life"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              Student Life & Arts
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              Photo Gallery
            </a>
            <a
              href="#news-events"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              News & Calendar
            </a>
            <a
              href="#enquiry-form"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              Contact & Enquiries
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissions();
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-center rounded-sm flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <span>APPLY / ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-2.5 bg-slate-100 text-slate-800 font-semibold text-center rounded-sm text-[13px] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Parent / Student Portal Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
