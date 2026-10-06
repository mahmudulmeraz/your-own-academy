import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { ArrowRight, Maximize2, Sparkles, Filter } from 'lucide-react';

interface StudentLifeGalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const StudentLifeGallery: React.FC<StudentLifeGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Athletics', 'Arts & Music', 'STEM & Innovation', 'Leadership', 'Campus Life'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="student-life" className="py-16 md:py-24 bg-slate-50">
      <div id="gallery" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span>STUDENT LIFE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight">
              Learning Beyond Classrooms
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-xl">
              From athletic championships and orchestral performance to model diplomacy and robotic engineering, student life at Meridian is vibrant, joyful, and multifaceted.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            // Apply subtle variety in height for masonry rhythm
            const isSpan2 = index === 1 || index === 4;

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative rounded-sm overflow-hidden shadow-sm hover:shadow-md border border-slate-200 cursor-pointer transition-all duration-300 ${
                  isSpan2 ? 'sm:col-span-2 lg:col-span-1 h-72 lg:h-80' : 'h-72 lg:h-80'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-sm bg-slate-950/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-sm bg-slate-950/90 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-sm border border-slate-800">
                    {item.category}
                  </span>
                </div>

                {/* Content Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white transform transition-transform duration-300">
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-1 leading-snug group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed opacity-90">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Gallery Link */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white border border-slate-200 hover:border-slate-400 text-slate-800 font-semibold text-sm shadow-sm hover:shadow transition-all cursor-pointer group"
          >
            <span>VIEW ALL CAMPUS LIFE GALLERIES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
