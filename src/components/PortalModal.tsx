import React, { useState } from 'react';
import { X, Lock, User, Key, CheckCircle, ShieldCheck, ArrowRight, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [portalType, setPortalType] = useState<'parent' | 'student'>('parent');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState('parent.edward@meridian.edu');
  const [password, setPassword] = useState('••••••••••••');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-sm max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        <div className="bg-slate-950 text-white p-6 relative border-b border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-sm hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 block mb-1">
            SECURE CAMPUS ACCESS
          </span>
          <h3 className="font-display text-2xl font-bold text-white">
            Meridian Heritage Portal
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Access live academic grades, attendance, bus GPS, and fee payment.
          </p>

          <div className="flex gap-2 mt-4 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => { setPortalType('parent'); setLoginSuccess(false); }}
              className={`flex-1 py-1.5 rounded-sm text-xs font-mono font-semibold transition-colors cursor-pointer ${
                portalType === 'parent' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              Parent Portal
            </button>
            <button
              type="button"
              onClick={() => { setPortalType('student'); setLoginSuccess(false); }}
              className={`flex-1 py-1.5 rounded-sm text-xs font-mono font-semibold transition-colors cursor-pointer ${
                portalType === 'student' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              Student Portal
            </button>
          </div>
        </div>

        <div className="p-6">
          {loginSuccess ? (
            <div className="py-4 text-center animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 border border-blue-200">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-900 mb-1">
                Welcome, {portalType === 'parent' ? 'Edward Sterling (Parent)' : 'Julian Sterling (Scholar)'}
              </h4>
              <p className="text-xs text-slate-500 font-mono mb-5">
                Session Active: Cambridge Senior Secondary Wing • ID: #MER-98214
              </p>

              <div className="bg-slate-50 rounded-sm p-4 text-left text-xs space-y-2.5 mb-6 border border-slate-200 font-mono">
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <span className="text-slate-600">Current Term Attendance:</span>
                  <span className="font-bold text-blue-600">98.2% (Distinction)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <span className="text-slate-600">Cambridge IGCSE Mock Rank:</span>
                  <span className="font-bold text-amber-500">Grade A* / Top 5%</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-600">Live Campus Bus GPS:</span>
                  <span className="font-bold text-blue-600">Route 14 • On Schedule</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-sm shadow-sm cursor-pointer transition-colors"
              >
                Close Portal View
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  {portalType === 'parent' ? 'Registered Parent Email ID' : 'Scholar Academy ID'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-sm border border-slate-200 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-sm border border-slate-200 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded-sm text-blue-600" />
                  <span>Remember session</span>
                </label>
                <a href="#reset" onClick={(e) => e.preventDefault()} className="text-blue-600 hover:underline">
                  Forgot credentials?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors active:scale-98"
              >
                <span>Log In to {portalType === 'parent' ? 'Parent' : 'Student'} Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-mono pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>256-bit encrypted student information management system</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
