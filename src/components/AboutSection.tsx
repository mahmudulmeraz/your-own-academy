import React, { useState } from 'react';
import { ArrowRight, Award, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenAdmissions: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAdmissions }) => {
  const [expandedPhilosophy, setExpandedPhilosophy] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Geometric Grid Pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full bg-blue-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition with Floating Geometric Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-md border border-slate-200">
              <img
                src="/src/assets/images/meridian_students_welcome_1788627879139.jpg"
                alt="Meridian Heritage Academy students collaborating warmly on campus"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Credibility Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-slate-950 text-white p-4 sm:p-5 rounded-sm shadow-xl border border-slate-800 max-w-[240px] sm:max-w-[270px]">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Award className="w-5 h-5 flex-shrink-0" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Heritage & Trust</span>
              </div>
              <p className="text-white font-display font-bold text-lg leading-tight">
                28 Years of Scholastic Distinction
              </p>
              <p className="text-slate-400 text-[11px] mt-1">
                Guiding generations of future doctors, researchers, entrepreneurs & diplomats.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Institutional Story & Statistics */}
          <div className="lg:col-span-6">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-3">
              <span className="w-6 h-[2px] bg-blue-600" />
              <span>WELCOME TO {INSTITUTION_INFO.name.toUpperCase()}</span>
            </div>

            {/* Large Editorial Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-[1.12] mb-5 tracking-tight">
              Preparing Young Minds for a Brighter, Resilient Tomorrow
            </h2>

            {/* Professional Institutional Copy */}
            <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-4">
              {INSTITUTION_INFO.name} is a premier co-educational collegiate institution dedicated to cultivating confident, compassionate, and intellectually rigorous global citizens. We harmonize time-tested traditional scholarship with forward-thinking scientific inquiry.
            </p>

            <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
              Our campus thrives on individual student discovery. From the humanities and performing arts to competitive robotics and advanced athletics, we ensure every scholar develops moral integrity, emotional resilience, and lifelong academic passion.
            </p>

            {expandedPhilosophy && (
              <div className="p-4 bg-slate-50 rounded-sm text-sm text-slate-900 mb-6 border-l-4 border-blue-600 animate-in fade-in duration-300">
                <h3 className="font-bold text-blue-900 mb-1 font-display">The Meridian Educational Philosophy</h3>
                <p className="text-slate-600 leading-relaxed">
                  We believe true education addresses the heart and character as much as the intellect. Through experiential pedagogy, mentorship cohorts, and community civic service, our scholars learn to confront complex global challenges with empathy and discernment.
                </p>
              </div>
            )}

            {/* 4 Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-slate-200 mb-8">
              <div className="text-center sm:text-left">
                <p className="font-display text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5">Dual</p>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-900">Cambridge & CBSE</p>
                <p className="text-[11px] text-slate-500">Global Accreditation</p>
              </div>

              <div className="text-center sm:text-left">
                <p className="font-display text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5">1:12</p>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-900">Teacher Ratio</p>
                <p className="text-[11px] text-slate-500">Individualized Mentorship</p>
              </div>

              <div className="text-center sm:text-left">
                <p className="font-display text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5">28+</p>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-900">Years Legacy</p>
                <p className="text-[11px] text-slate-500">Established 1998</p>
              </div>

              <div className="text-center sm:text-left">
                <p className="font-display text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5">100%</p>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-900">Commitment</p>
                <p className="text-[11px] text-slate-500">Lifelong Flourishing</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200 shadow hover:shadow-md cursor-pointer group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setExpandedPhilosophy(!expandedPhilosophy)}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 cursor-pointer underline-offset-4 hover:underline"
              >
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>{expandedPhilosophy ? 'Hide Educational Philosophy' : 'Explore Educational Philosophy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
