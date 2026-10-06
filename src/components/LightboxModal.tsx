import React from 'react';
import { X, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-slate-950 rounded-sm overflow-hidden shadow-2xl border border-slate-800">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-sm bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Frame */}
        <div className="relative flex-1 max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-w-full max-h-[70vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="p-6 bg-slate-950 text-white border-t border-slate-800">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-sm bg-slate-900 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider border border-slate-800">
              {item.category}
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-slate-400">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
