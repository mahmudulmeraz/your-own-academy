import React, { useState } from 'react';
import { ArrowRight, Compass, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface HeroProps {
  onOpenAdmissions: () => void;
  onExploreCampus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onExploreCampus }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      eyebrow: `WELCOME TO ${INSTITUTION_INFO.name.toUpperCase()}`,
      titlePrefix: "Inspiring Excellence,",
      titleHighlight: "Building Futures",
      description:
        `At ${INSTITUTION_INFO.name}, we nurture curious young minds with enduring ethical values, rigorous Cambridge and National scholarship, and boundless opportunities in an environment engineered for lifelong distinction.`,
      badge: "Admissions Open for Academic Year 2026–27",
    },
    {
      eyebrow: "WORLD-CLASS 25-ACRE HERITAGE CAMPUS",
      titlePrefix: "Empowering Curiosity,",
      titleHighlight: "Leading Tomorrow",
      description:
        "Discover state-of-the-art STEM laboratories, Olympic sports facilities, and an individualized 1:12 faculty mentorship model that prepares tomorrow's global leaders for Ivy League and premier international universities.",
      badge: "Ranked #1 Regional Collegiate Academy",
    },
  ];

  const current = heroSlides[activeSlide];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center bg-slate-950 overflow-hidden">
      {/* Background Cinematic Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/meridian_hero_campus_1788627856423.jpg"
          alt={`${INSTITUTION_INFO.name} Stately Campus`}
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Dark Institutional Gradient Overlay - heavily biased to left for pristine readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow with geometric badge styling */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-950/80 border border-blue-500/40 text-blue-400 text-[11px] sm:text-[12px] font-mono tracking-wider uppercase mb-4 backdrop-blur-sm shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{current.eyebrow}</span>
          </div>

          {/* Major Editorial Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[66px] text-white font-bold leading-[1.08] tracking-tight mb-5 drop-shadow-sm">
            {current.titlePrefix}{' '}
            <span className="text-amber-400 font-semibold">{current.titleHighlight}</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl text-balance opacity-95">
            {current.description}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Primary CTA: Blue Precision */}
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-98 cursor-pointer group"
            >
              <span>Admission Open 2026–27</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: Outlined Geometric */}
            <button
              type="button"
              onClick={onExploreCampus}
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-slate-700 hover:border-slate-500 text-sm sm:text-base px-6 py-3.5 rounded-sm transition-all duration-200 backdrop-blur-sm active:scale-98 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Explore Campus</span>
            </button>
          </div>

          {/* Trust Badge Below CTA */}
          <div className="mt-8 flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Dual Accredited: Cambridge International (CAIE) & CBSE Board</span>
          </div>
        </div>
      </div>

      {/* Subtle Slide Arrows (Desktop) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-sm bg-slate-900/60 hover:bg-blue-600 text-white border border-slate-700 items-center justify-center transition-colors duration-200 cursor-pointer backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-sm bg-slate-900/60 hover:bg-blue-600 text-white border border-slate-700 items-center justify-center transition-colors duration-200 cursor-pointer backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Rectangular Bars */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-sm ${
              activeSlide === idx ? 'w-8 h-1.5 bg-amber-400' : 'w-3 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
