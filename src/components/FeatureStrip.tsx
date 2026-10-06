import React from 'react';
import { Laptop, GraduationCap, Bus, Sparkles, FlaskConical } from 'lucide-react';
import { HIGHLIGHT_STRIP_ITEMS } from '../data/mockData';

export const FeatureStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Bus':
        return <Bus className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'FlaskConical':
      default:
        return <FlaskConical className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 mb-12 sm:mb-16">
      <div className="bg-white rounded-md shadow-sm border border-slate-200 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {HIGHLIGHT_STRIP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center px-4 lg:px-5 group cursor-default hover:bg-slate-50/80 py-2 rounded-sm transition-colors duration-200"
            >
              {/* Geometric Icon Container */}
              <div className="w-12 h-12 rounded-sm bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors duration-200 border border-blue-100/80">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h2 className="text-[15px] font-bold text-slate-900 font-display tracking-tight mb-1">
                {item.title}
              </h2>

              {/* Tagline / Subtitle */}
              <p className="text-[12px] font-semibold text-blue-600 mb-1 tracking-wide">
                {item.subtitle}
              </p>

              {/* Short Description */}
              <p className="text-[12px] text-slate-500 leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
