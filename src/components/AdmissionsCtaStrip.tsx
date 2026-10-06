import React from 'react';
import { GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface AdmissionsCtaStripProps {
  onOpenAdmissions: () => void;
}

export const AdmissionsCtaStrip: React.FC<AdmissionsCtaStripProps> = ({ onOpenAdmissions }) => {
  return (
    <section id="admissions-cta" className="relative bg-slate-950 text-white py-10 sm:py-12 overflow-hidden border-y border-slate-800 bg-grid-pattern-dark">
      {/* Background Decorative Motifs */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute left-10 -bottom-10 w-40 h-40 rounded-full bg-blue-600/10 blur-2xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Left Cluster: Icon & Admissions Open Headline */}
          <div className="flex items-center gap-4 sm:gap-6 text-center lg:text-left flex-col sm:flex-row">
            <div className="w-14 h-14 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-inner">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENROLLMENT CYCLE OPEN</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Admissions Open for Academic Year 2026–27
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-1 font-normal">
                Give your child the premier foundation for a lifetime of intellectual curiosity and global success.
              </p>
            </div>
          </div>

          {/* Right Action: Clean Geometric Button */}
          <div className="flex-shrink-0 w-full sm:w-auto text-center">
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-3.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow active:scale-98 cursor-pointer group"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
