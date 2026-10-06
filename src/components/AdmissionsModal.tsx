import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, FileText, Compass, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tour' | 'prospectus' | 'apply'>('tour');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: 'Grade IX (Cambridge IGCSE)',
    tourDate: '2026-03-20',
    preferredTime: '10:30 AM',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-sm max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        {/* Header with Dark Slate Background */}
        <div className="bg-slate-950 text-white p-6 relative border-b border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-sm hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 block mb-1">
            {INSTITUTION_INFO.shortName.toUpperCase()} ADMISSIONS DESK
          </span>
          <h3 className="font-display text-2xl font-bold text-white">
            Academic Year 2026–2027 Admissions
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Cambridge International & CBSE Accredited Dual Curriculum
          </p>

          {/* Tab Selection */}
          <div className="flex gap-2 mt-4 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => { setActiveTab('tour'); setSubmitted(false); }}
              className={`flex-1 py-1.5 px-3 rounded-sm text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'tour'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Campus Tour</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('prospectus'); setSubmitted(false); }}
              className={`flex-1 py-1.5 px-3 rounded-sm text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'prospectus'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Prospectus</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('apply'); setSubmitted(false); }}
              className={`flex-1 py-1.5 px-3 rounded-sm text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'apply'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Apply Online</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-900 mb-1">
                Admissions Request Confirmed
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                Your request has been logged with the Admissions Secretariat. Our counseling coordinator will contact you at <span className="font-semibold text-slate-900">{formData.email || 'your email'}</span> to confirm your session.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-sm shadow-sm cursor-pointer transition-colors"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Student's name"
                    className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="admissions@example.com"
                    className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    Grade Interested In
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm bg-white focus:border-blue-600 outline-none"
                  >
                    <option value="Pre-K to Grade II">Pre-K to Grade II (Foundation)</option>
                    <option value="Grade III to V">Grade III to V (Preparatory)</option>
                    <option value="Grade VI to VIII">Grade VI to VIII (Middle School)</option>
                    <option value="Grade IX (Cambridge IGCSE)">Grade IX (Cambridge IGCSE)</option>
                    <option value="Grade XI (Cambridge A-Levels / CBSE)">Grade XI (Cambridge A-Levels / CBSE)</option>
                  </select>
                </div>

                {activeTab === 'tour' && (
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                      Preferred Tour Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm bg-white focus:border-blue-600 outline-none"
                    >
                      <option value="9:00 AM">Morning Session (9:00 AM)</option>
                      <option value="11:30 AM">Midday Session (11:30 AM)</option>
                      <option value="2:00 PM">Afternoon Session (2:00 PM)</option>
                      <option value="3:30 PM">Twilight Session (3:30 PM)</option>
                    </select>
                  </div>
                )}

                {activeTab !== 'tour' && (
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                      Academic Year
                    </label>
                    <input
                      type="text"
                      disabled
                      value="2026–2027 Academic Year"
                      className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm bg-slate-50 text-slate-500 outline-none"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  Questions or Special Considerations (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Inquire about boarding options, athletic teams, or scholarship criteria..."
                  className="w-full px-3 py-2 rounded-sm border border-slate-200 text-sm focus:border-blue-600 outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-sm bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>
                    {activeTab === 'tour' && 'Confirm Campus Tour Booking'}
                    {activeTab === 'prospectus' && 'Request Instant Digital Prospectus'}
                    {activeTab === 'apply' && 'Proceed to Application Portal'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-mono pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Admissions helpline: {INSTITUTION_INFO.phone} (Mon–Sat)</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
