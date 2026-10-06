import React from 'react';
import { ArrowRight, PhoneCall, Compass, Sparkles } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface FinalCtaSectionProps {
  onOpenAdmissions: () => void;
  onScrollToEnquiry: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenAdmissions,
  onScrollToEnquiry,
}) => {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-28 overflow-hidden border-t border-slate-800 bg-grid-pattern-dark">
      {/* Background Architectural Watermark */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="/src/assets/images/meridian_hero_campus_1788627856423.jpg"
          alt="Meridian Heritage Academy Campus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      {/* Ambient Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>ADMISSIONS CYCLE 2026–2027</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
          Your Child’s Extraordinary <br className="hidden sm:inline" />
          <span className="text-blue-400 font-normal">Future Starts Here.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Join a storied tradition of academic rigor, character cultivation, and global achievement. We invite you to experience the warmth and distinction of {INSTITUTION_INFO.shortName}.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onOpenAdmissions}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-3.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow active:scale-98 cursor-pointer group"
          >
            <span>Apply for 2026–27 Intake</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onScrollToEnquiry}
            className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-base px-8 py-3.5 rounded-sm transition-all duration-200 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span>Request Prospectus & Call</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-xs sm:text-sm text-slate-400 font-mono flex flex-wrap items-center justify-center gap-6">
          <span>Admissions Office: {INSTITUTION_INFO.phone}</span>
          <span>•</span>
          <span>{INSTITUTION_INFO.email}</span>
          <span>•</span>
          <span>Riverdale District, Cambridge Campus</span>
        </div>
      </div>
    </section>
  );
};
