import React, { useState } from 'react';
import { CrestLogo } from './CrestLogo';
import { INSTITUTION_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Linkedin, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissions, onOpenPortal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <CrestLogo variant="dark" size="lg" />

            <p className="text-sm text-slate-400 leading-relaxed mt-4 max-w-sm">
              Nurturing young minds with strong values, academic excellence, and holistic development. A premier co-educational collegiate academy established in 1998.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-mono tracking-wide">
              Motto: <span className="italic">{INSTITUTION_INFO.motto}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                aria-label="Meridian Academy on Facebook"
                className="w-9 h-9 rounded-sm bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Meridian Academy on Instagram"
                className="w-9 h-9 rounded-sm bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                aria-label="Meridian Academy on YouTube"
                className="w-9 h-9 rounded-sm bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                aria-label="Meridian Academy on LinkedIn"
                className="w-9 h-9 rounded-sm bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-base font-bold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-blue-400 transition-colors">Academics</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-blue-400 transition-colors">Campus Facilities</a>
              </li>
              <li>
                <a href="#admissions-cta" onClick={onOpenAdmissions} className="hover:text-blue-400 transition-colors">Admissions 2026</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#enquiry-form" className="hover:text-blue-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Information Column (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-base font-bold text-white tracking-wider uppercase">
              Information
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#admissions-cta" onClick={onOpenAdmissions} className="hover:text-blue-400 transition-colors">Admission Process</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">Fee Structure & Aid</a>
              </li>
              <li>
                <a href="#news-events" className="hover:text-blue-400 transition-colors">Academic Calendar</a>
              </li>
              <li>
                <a href="#news-events" className="hover:text-blue-400 transition-colors">News & Events</a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenAdmissions();
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers & Faculty
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPortal}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Student & Parent Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Campus Contact Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-base font-bold text-white tracking-wider uppercase">
              Contact Us & Newsletter
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{INSTITUTION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{INSTITUTION_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{INSTITUTION_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{INSTITUTION_INFO.visitingHours}</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-mono font-semibold text-white mb-2 uppercase tracking-wider">
                Stay Connected With Academy Dispatches
              </p>
              {newsletterSubmitted ? (
                <div className="flex items-center gap-2 text-xs text-amber-400 bg-slate-900 p-2.5 rounded-sm border border-slate-800">
                  <Check className="w-4 h-4" />
                  <span>Thank you for subscribing to Meridian Dispatches.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-3.5 py-2 rounded-sm bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-3.5 py-2 rounded-sm bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 {INSTITUTION_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
            <a href="#accessibility" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Accessibility
            </a>
            <a href="#accreditation" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Non-Discrimination Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
