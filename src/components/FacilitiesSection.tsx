import React, { useState } from 'react';
import { Laptop, FlaskConical, BookOpen, Bus, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { FACILITIES_DATA } from '../data/mockData';
import { FacilityItem } from '../types';

export const FacilitiesSection: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'smart-classrooms':
        return <Laptop className="w-5 h-5 text-white" />;
      case 'science-labs':
        return <FlaskConical className="w-5 h-5 text-white" />;
      case 'heritage-library':
        return <BookOpen className="w-5 h-5 text-white" />;
      case 'safe-transit':
      default:
        return <Bus className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="facilities" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span>FACILITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight">
              World-Class Infrastructure
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-xl">
              Purpose-built spaces engineered to foster deep inquiry, physical wellbeing, and collaborative discovery.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedFacility(FACILITIES_DATA[0])}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm border-b-2 border-blue-600 pb-1 transition-colors self-start md:self-auto cursor-pointer group"
          >
            <span>VIEW ALL FACILITIES & SPECIFICATIONS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Facility Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              {/* Card Image with Square Icon Badge Overlay */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Geometric Icon Container */}
                <div className="absolute -bottom-4 left-4 w-10 h-10 rounded-sm bg-slate-950 border border-slate-800 shadow flex items-center justify-center">
                  {getIcon(item.id)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 pt-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{item.capacity}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedFacility(item)}
                    className="text-[12px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-sm max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-sm bg-slate-950/80 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-60 sm:h-72 w-full relative">
              <img
                src={selectedFacility.imageUrl}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                  {selectedFacility.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  {selectedFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-slate-800 text-base leading-relaxed mb-6">
                {selectedFacility.detailedOverview}
              </p>

              <h4 className="font-display font-bold text-slate-900 text-lg mb-3">
                Key Technical & Architectural Specs:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {selectedFacility.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-sm border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setSelectedFacility(null)}
                  className="px-5 py-2.5 rounded-sm border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
