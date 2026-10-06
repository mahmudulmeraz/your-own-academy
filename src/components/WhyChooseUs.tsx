import React from 'react';
import { GraduationCap, HeartHandshake, ShieldCheck, Cpu, Globe, Compass, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/mockData';

interface WhyChooseUsProps {
  onOpenAdmissions: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenAdmissions }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
            <span className="w-5 h-[2px] bg-blue-600" />
            <span>DISTINCTIVE ADVANTAGES</span>
            <span className="w-5 h-[2px] bg-blue-600" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight mb-4">
            Why Discerning Families Choose Meridian
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our educational framework unites world-class intellectual standards with deeply individualized pastoral guidance in a safe, inspiring sanctuary.
          </p>
        </div>

        {/* 3x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 hover:bg-white rounded-sm p-7 border border-slate-200 hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-sm bg-white group-hover:bg-blue-600 border border-slate-200 flex items-center justify-center mb-5 transition-colors duration-200 shadow-sm">
                  <div>
                    {getIcon(item.icon)}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-1 text-xs font-mono font-semibold text-slate-500 group-hover:text-blue-600">
                <span>Pillar 0{index + 1} of Excellence</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Want to see our campus and meet department deans in person?
          </p>
          <button
            type="button"
            onClick={onOpenAdmissions}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4 cursor-pointer transition-colors"
          >
            <span>Schedule a Private Family Tour & Admissions Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
