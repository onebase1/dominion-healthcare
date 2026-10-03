import { Heart, Compass, Shield, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-200 rounded-full inline-block">
              Our Heritage & Vision
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Decade of Healthcare Staffing Excellence Born in North East England
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Born in the heart of North East England, <strong className="text-slate-900 font-semibold">Dominion Healthcare Services Ltd</strong> has established itself as a beacon of excellence in temporary healthcare recruitment and clinical staffing.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              With over a decade of dedicated service, we have expanded our reach to cover the entire region—Stockton-on-Tees, Middlesbrough, County Durham, Newcastle upon Tyne, Sunderland—and nationwide across the UK. Driven by a mission to provide expert care professionals on demand, our journey is marked by significant milestones: enriching over 120 healthcare organisations, facilitating employment for thousands of nurses and carers, and proudly accounting for more than 70,000 completed shifts.
            </p>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Integrity & Trust</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Strict adherence to ethical recruitment, WHO global health guidelines, and UK employment standards.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Compassionate Ethos</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  We treat every placement not as numbers, but as human care delivered with empathy and dignity.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">24/7 Accountability</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Around-the-clock coordinator desk in Stockton-on-Tees supporting clients and staff 365 days a year.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-800 relative">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Stockton Business Centre, TS18 1DW
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                The Dominion Difference
              </h3>

              <div className="space-y-4 mb-8 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Local & Responsive:</strong> Unlike distant call centers, our coordinators are rooted in the North East healthcare ecosystem.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>People First:</strong> We support our agency staff with competitive rates, weekly payroll, and personal well-being checks.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Compliance Transparency:</strong> Full audit files delivered proactively to your facility prior to every shift.
                  </span>
                </div>
              </div>

              {/* Stats Box */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-extrabold text-cyan-300">70,000+</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Shifts Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-blue-400">120+</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Care Providers</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-emerald-400">24,000+</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Annual Care Hrs</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-amber-400">10+ Years</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Track Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
