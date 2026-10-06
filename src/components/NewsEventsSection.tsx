import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock, Tag, X } from 'lucide-react';
import { NEWS_EVENTS_DATA } from '../data/mockData';
import { NewsItem } from '../types';

export const NewsEventsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news-events" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span>ACADEMY DISPATCHES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight">
              Latest News & Events
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-xl">
              Stay connected with our vibrant community milestones, academic achievements, and upcoming campus open houses.
            </p>
          </div>

          <a
            href="#news-events"
            onClick={(e) => {
              e.preventDefault();
              setSelectedNews(NEWS_EVENTS_DATA[0]);
            }}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm border-b-2 border-blue-600 pb-1 transition-colors self-start md:self-auto cursor-pointer group"
          >
            <span>VIEW ALL ACADEMY NEWS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3-Column News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_EVENTS_DATA.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              {/* News Thumbnail Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-sm bg-slate-950/90 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-sm border border-slate-800">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{news.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{news.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {news.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedNews(news)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-sm max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-sm bg-slate-950/80 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 w-full relative">
              <img
                src={selectedNews.imageUrl}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                  {selectedNews.category} • {selectedNews.date}
                </span>
                <h3 className="font-display text-2xl font-bold mt-1">
                  {selectedNews.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-slate-900 text-base leading-relaxed max-h-[60vh] overflow-y-auto">
              <p className="font-medium text-blue-900 text-lg">
                {selectedNews.excerpt}
              </p>
              <p className="text-slate-600">
                Meridian Heritage Academy continues to foster an ecosystem where scholars combine intellectual discovery with tangible, practical innovation. The leadership council congratulated all participants, faculty guides, and families for their unwavering dedication.
              </p>
              <p className="text-slate-600">
                "Our aim is not merely to prepare scholars for competitive exams, but to equip them with the intellectual resilience and creative tenacity to answer humanity’s pressing inquiries," noted Dean of Academic Innovation.
              </p>
              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 rounded-sm bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
