import React, { useState } from 'react';
import { Search, X, BookOpen, Building2, Calendar, FileQuestion, ArrowRight } from 'lucide-react';
import { ACADEMIC_PROGRAMS, FACILITIES_DATA, NEWS_EVENTS_DATA, FAQ_DATA } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingPrograms = ACADEMIC_PROGRAMS.filter(
    (p) => p.title.toLowerCase().includes(trimmed) || p.description.toLowerCase().includes(trimmed)
  );

  const matchingFacilities = FACILITIES_DATA.filter(
    (f) => f.title.toLowerCase().includes(trimmed) || f.description.toLowerCase().includes(trimmed)
  );

  const matchingNews = NEWS_EVENTS_DATA.filter(
    (n) => n.title.toLowerCase().includes(trimmed) || n.excerpt.toLowerCase().includes(trimmed)
  );

  const matchingFaq = FAQ_DATA.filter(
    (faq) => faq.question.toLowerCase().includes(trimmed) || faq.answer.toLowerCase().includes(trimmed)
  );

  const totalResults = matchingPrograms.length + matchingFacilities.length + matchingNews.length + matchingFaq.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-sm max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search curricula, smart labs, admissions, buses, scholarships..."
            className="w-full text-base sm:text-lg text-slate-900 placeholder-slate-400 outline-none bg-transparent"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1 rounded-sm font-mono cursor-pointer"
            >
              ESC
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!query && (
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                Suggested Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Cambridge IGCSE', 'Smart Classrooms', 'Bus Transit Routes', 'Science Laboratories', 'Merit Scholarships', 'Annual Open House'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-sm bg-slate-100 hover:bg-blue-600 hover:text-white text-xs font-mono font-medium text-slate-700 transition-colors cursor-pointer border border-slate-200 hover:border-blue-600"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-10 text-center text-slate-500 text-sm">
              No matching academic information found for "<span className="font-semibold text-slate-900">{query}</span>". Please try another keyword or contact admissions directly.
            </div>
          )}

          {matchingPrograms.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Academic Curricula ({matchingPrograms.length})</span>
              </div>
              <div className="space-y-2">
                {matchingPrograms.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectAction('academics');
                      onClose();
                    }}
                    className="p-3 rounded-sm hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-slate-900">{p.title}</h4>
                      <span className="text-[11px] text-amber-500 font-mono font-semibold">{p.grades}</span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingFacilities.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Campus Infrastructure ({matchingFacilities.length})</span>
              </div>
              <div className="space-y-2">
                {matchingFacilities.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => {
                      onSelectAction('facilities');
                      onClose();
                    }}
                    className="p-3 rounded-sm hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-slate-900">{f.title}</h4>
                      <span className="text-[11px] text-slate-500 font-mono">{f.category}</span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingFaq.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-2">
                <FileQuestion className="w-3.5 h-3.5" />
                <span>Admissions FAQs ({matchingFaq.length})</span>
              </div>
              <div className="space-y-2">
                {matchingFaq.map((faq) => (
                  <div
                    key={faq.id}
                    onClick={() => {
                      onSelectAction('faq');
                      onClose();
                    }}
                    className="p-3 rounded-sm hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-200"
                  >
                    <h4 className="font-display font-bold text-sm text-slate-900">{faq.question}</h4>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Search index covers all 2026–27 course modules</span>
          <button
            type="button"
            onClick={onClose}
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
};
