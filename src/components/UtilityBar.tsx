import React from 'react';
import { Phone, Mail, MapPin, UserCheck, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface UtilityBarProps {
  onOpenAdmissions: () => void;
  onOpenPortal: () => void;
}

export const UtilityBar: React.FC<UtilityBarProps> = ({ onOpenAdmissions, onOpenPortal }) => {
  return (
    <div className="bg-slate-950 text-slate-300 text-[12px] font-sans border-b border-slate-800/80 tracking-wide select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left Side: Institutional Contact Information */}
        <div className="flex items-center gap-4 md:gap-6 text-slate-300">
          <a
            href={`tel:${INSTITUTION_INFO.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Call Admissions Office"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium tracking-normal">{INSTITUTION_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${INSTITUTION_INFO.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            title="Email Admissions Office"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{INSTITUTION_INFO.email}</span>
          </a>

          <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-[280px]">{INSTITUTION_INFO.address}</span>
          </span>
        </div>

        {/* Right Side: Portal Links & Highlight Admission CTA */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <nav className="hidden md:flex items-center gap-4 text-slate-300">
            <a
              href="#careers"
              onClick={(e) => {
                e.preventDefault();
                alert('Faculty & Staff Careers: Open positions for Cambridge IGCSE Math and Robotics Mentor now available. Contact hr@meridianheritage.edu');
              }}
              className="hover:text-white transition-colors flex items-center gap-1 text-[11.5px]"
            >
              <Briefcase className="w-3 h-3 text-blue-400" />
              <span>Careers</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="#alumni"
              onClick={(e) => {
                e.preventDefault();
                alert('Alumni Network: Welcome back! Join the 2026 Global Homecoming Gala on May 15.');
              }}
              className="hover:text-white transition-colors flex items-center gap-1 text-[11.5px]"
            >
              <GraduationCap className="w-3 h-3 text-blue-400" />
              <span>Alumni</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href="#news-events" className="hover:text-white transition-colors flex items-center gap-1 text-[11.5px]">
              <Calendar className="w-3 h-3 text-blue-400" />
              <span>News & Events</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              type="button"
              onClick={onOpenPortal}
              className="hover:text-amber-400 text-slate-200 transition-colors flex items-center gap-1 text-[11.5px] cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">Parent / Student Portal</span>
            </button>
          </nav>

          {/* Geometric Highlight CTA */}
          <button
            type="button"
            onClick={onOpenAdmissions}
            className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-sm transition-all duration-200 shadow-sm flex items-center gap-1 cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>ADMISSION OPEN</span>
            <span className="hidden sm:inline font-semibold opacity-90">2026–27</span>
          </button>
        </div>
      </div>
    </div>
  );
};
