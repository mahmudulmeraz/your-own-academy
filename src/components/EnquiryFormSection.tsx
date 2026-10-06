import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, Clock, Calendar, Sparkles } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';
import { EnquiryFormData } from '../types';

export const EnquiryFormSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    gradeLevel: 'Grade IX–XII (Senior Cambridge / CBSE)',
    academicYear: '2026–2027',
    preferredContact: 'campus-visit',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.parentName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide parent/guardian name, a valid email address, and phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable, realistic enquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="enquiry-form" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Value & Institutional Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span>ADMISSIONS DESK & COUNSELING</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight mb-4">
              Take the First Step Toward a Brighter Future
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We welcome prospective families to experience our campus culture firsthand. Submit an enquiry below to receive our comprehensive curriculum prospectus, schedule a private family tour, or discuss scholarship opportunities.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-slate-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">Admissions Hotline</h4>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">{INSTITUTION_INFO.phone}</p>
                  <p className="text-[11px] text-slate-500">{INSTITUTION_INFO.visitingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-slate-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">Dean of Admissions Email</h4>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">{INSTITUTION_INFO.email}</p>
                  <p className="text-[11px] text-slate-500">Guaranteed response within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-slate-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">Campus Visiting Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Monday through Saturday: 8:30 AM to 4:00 PM</p>
                  <p className="text-[11px] text-slate-500">450 Heritage Way, Riverdale District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Enquiry Received with Gratitude
                  </h3>
                  <p className="text-slate-600 text-base max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{formData.parentName}</span>. Our Senior Admissions Counselor has registered your interest for <span className="font-semibold text-slate-900">{formData.studentName || 'your scholar'}</span> and will reach out via {formData.preferredContact} within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        parentName: '',
                        studentName: '',
                        email: '',
                        phone: '',
                        gradeLevel: 'Grade IX–XII (Senior Cambridge / CBSE)',
                        academicYear: '2026–2027',
                        preferredContact: 'campus-visit',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-sm shadow-sm cursor-pointer transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-slate-900">
                        Official Admissions Enquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        Academic Year 2026–2027 • Rolling Admissions
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex px-3 py-1 bg-blue-50 text-blue-700 text-xs font-mono font-bold rounded-sm border border-blue-200">
                      Seats Available
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 mb-6 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Parent Name */}
                    <div>
                      <label htmlFor="parentName" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g., Jonathan Wright"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>

                    {/* Student Name */}
                    <div>
                      <label htmlFor="studentName" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Student Full Name
                      </label>
                      <input
                        id="studentName"
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g., Charlotte Wright"
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Interested Program/Grade */}
                    <div>
                      <label htmlFor="gradeLevel" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Interested Grade Level
                      </label>
                      <select
                        id="gradeLevel"
                        name="gradeLevel"
                        value={formData.gradeLevel}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none bg-white transition-all cursor-pointer"
                      >
                        <option value="Pre-K to Grade II (Early Foundation)">Pre-K to Grade II (Early Foundation)</option>
                        <option value="Grade III to V (Primary Wing)">Grade III to V (Primary Wing)</option>
                        <option value="Grade VI to VIII (Middle School)">Grade VI to VIII (Middle School)</option>
                        <option value="Grade IX–XII (Senior Cambridge / CBSE)">Grade IX–XII (Senior Cambridge / CBSE)</option>
                        <option value="Cambridge Advanced A-Levels Honors">Cambridge Advanced A-Levels Honors</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label htmlFor="preferredContact" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Next Step
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none bg-white transition-all cursor-pointer"
                      >
                        <option value="campus-visit">Schedule Private Campus Tour</option>
                        <option value="phone">Admissions Phone Consultation</option>
                        <option value="email">Email Curriculum Prospectus & Fees</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Specific Inquiries or Student Interests (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your scholar's academic interests, sports, arts, or any questions regarding scholarships..."
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-sm bg-blue-600 hover:bg-blue-500 text-white font-bold text-base tracking-wide transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Information...</span>
                    ) : (
                      <>
                        <span>Submit Official Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy reassurance */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Your contact details are strictly confidential and governed by our Admissions Privacy Policy.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
