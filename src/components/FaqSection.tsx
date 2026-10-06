import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
            <span className="w-5 h-[2px] bg-blue-600" />
            <span>COMMONLY ASKED QUESTIONS</span>
            <span className="w-5 h-[2px] bg-blue-600" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Essential information regarding enrollment guidelines, international curriculum standards, transit safety, and student life.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`rounded-sm border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-600 bg-blue-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-slate-900 text-amber-400 rotate-180'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
