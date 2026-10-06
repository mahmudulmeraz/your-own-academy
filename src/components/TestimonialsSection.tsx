import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
            <span className="w-5 h-[2px] bg-blue-600" />
            <span>VOICES OF OUR ACADEMY</span>
            <span className="w-5 h-[2px] bg-blue-600" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight mb-4">
            What Our Community Says
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Reflections from parents, alumni, and scholars on the transformative impact of the Meridian Heritage experience.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Decorative Quotation Mark */}
              <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote className="w-10 h-10 rotate-180" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-base leading-relaxed mb-6 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100 relative z-10">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-sm object-cover border border-slate-200 shadow-sm flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-blue-600 mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {item.yearOrGrade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
