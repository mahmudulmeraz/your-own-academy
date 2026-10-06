import React from 'react';
import { BookOpen, Award, Compass, Layers, Check, Sparkles, ArrowRight, Shield, Heart } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/mockData';

interface AcademicsSectionProps {
  onOpenAdmissions: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmissions }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Award':
        return <Award className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="academics" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-2">
            <span className="w-5 h-[2px] bg-blue-600" />
            <span>ACADEMICS</span>
            <span className="w-5 h-[2px] bg-blue-600" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] text-slate-900 font-bold leading-tight mb-4">
            Explore. Learn. Excel.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our academic continuum inspires deep intellectual rigor, experiential problem-solving, and a genuine love for lifelong scholarship.
          </p>
        </div>

        {/* 4 Academic Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACADEMIC_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-sm p-6 shadow-sm hover:shadow-md border border-slate-200 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Top Icon Badge */}
                <div className="w-12 h-12 rounded-sm bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-4 transition-colors duration-200 border border-blue-100/80">
                  <div className="transition-colors duration-200">
                    {getIcon(program.icon)}
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  {program.grades}
                </span>

                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {program.title}
                </h3>

                <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px] text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="text-[12.5px] font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Curriculum Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Student Development Section (Asymmetric Storytelling Layout) */}
        <div className="bg-white rounded-sm border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Side */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-blue-600 font-mono font-semibold text-[12px] uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>HOLISTIC STUDENT CULTIVATION</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Developing the Complete Individual
              </h3>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Academic brilliance must be anchored in character, emotional resilience, and physical vitality. Meridian’s distinctive holistic framework nurtures seven core dimensions in every student:
              </p>

              {/* Core Dimensions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-start gap-2.5 p-3 rounded-sm bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-sm bg-slate-900 text-amber-400 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Inquiring Mind</h4>
                    <p className="text-xs text-slate-600">Analytical depth, intellectual bravery and problem formulation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-sm bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-sm bg-slate-900 text-amber-400 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Moral Character</h4>
                    <p className="text-xs text-slate-600">Unwavering honesty, kindness, and personal responsibility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-sm bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-sm bg-slate-900 text-amber-400 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Artistic Creativity</h4>
                    <p className="text-xs text-slate-600">Visual arts, dramatic expression, and orchestral mastery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-sm bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-sm bg-slate-900 text-amber-400 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Ethical Leadership</h4>
                    <p className="text-xs text-slate-600">Civic governance, debate eloquence and empathetic service.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-sm transition-all duration-200 shadow-sm hover:shadow cursor-pointer inline-flex items-center gap-2 active:scale-98"
                >
                  <span>Enquire for Holistic Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side: Circular/Curved Student Image Composition with Signature Badge */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-sm p-2 bg-gradient-to-tr from-slate-900 via-blue-600 to-amber-400 shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="Meridian Heritage students smiling together in unity"
                  className="w-full h-full object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Distinctive Geometric Badge */}
              <div className="relative -mt-6 z-10 bg-slate-950 text-white px-7 py-3 rounded-sm shadow-xl border border-slate-800 text-center max-w-[320px]">
                <h4 className="font-display text-lg font-bold text-white tracking-wide">
                  Holistic Growth
                </h4>
                <p className="text-[12px] font-mono font-medium text-amber-400 tracking-wider uppercase mt-0.5">
                  Mind • Character • Values
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
