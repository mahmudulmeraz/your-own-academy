import React from 'react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { STATS_HIGHLIGHTS, INSTITUTION_INFO } from '../data/mockData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden border-t border-slate-800 bg-grid-pattern-dark">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-mono font-semibold text-[12px] uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span>MEASURED OUTCOMES & VERIFIABLE HONORS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-tight mb-4">
            Excellence Measured in Lifelong Impact
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Our graduates consistently achieve academic distinction in Cambridge CAIE and National board examinations, earning admissions and merit scholarships to the world’s leading universities.
          </p>
        </div>

        {/* 4 Large Stats Grid with Geometric Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-800 bg-slate-900/80 border border-slate-800 rounded-sm p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-xl">
          {STATS_HIGHLIGHTS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 tracking-tight mb-2">
                {stat.value}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-display mb-1">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[200px]">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Institutional Accreditation Footnote */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Accredited Cambridge International School (Center #US842)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>CBSE Affiliated Senior Secondary Institution</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Member of International Association for College Admission Counseling</span>
          </div>
        </div>
      </div>
    </section>
  );
};
