import { Heart, Compass, Shield, MapPin, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full inline-block">
              Our Heritage & Vision
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Decade of Healthcare Staffing Excellence Born in North East England
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Born in the heart of North East England, <strong className="text-slate-900 font-semibold">Dominion Healthcare Services Ltd</strong> has established itself as a beacon of excellence in temporary healthcare recruitment and clinical staffing.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              With over a decade of dedicated service, we have expanded our reach to cover the entire region—Stockton-on-Tees, Middlesbrough, County Durham, Newcastle upon Tyne, Sunderland—and nationwide across the UK. Driven by a mission to provide expert care professionals on demand, our journey is marked by significant milestones: enriching over 120 healthcare organisations, facilitating employment for hundreds of nurses and carers, and proudly accounting for more than 70,000 completed shifts.
            </p>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Integrity & Trust</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Strict adherence to ethical recruitment, CQC compliance standards, and UK employment legislation.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Compassionate Care</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  We treat every placement not as numbers, but as human care delivered with empathy, skill, and dignity.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-2">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">24/7 Accountability</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Around-the-clock coordinator desk in Stockton-on-Tees supporting care home clients and staff 365 days a year.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Column with Photo Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Authentic Healthcare Team Photo */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative group">
              <img
                src={IMAGES.teamDoctorsNurses}
                alt="Dominion Healthcare agency nurses and clinical team"
                className="w-full h-56 object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                  Stockton-on-Tees Hub
                </span>
                <span className="text-sm font-bold">
                  Dedicated Coordinators & Healthcare Professionals
                </span>
              </div>
            </div>

            {/* The Dominion Difference Card */}
            <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-7 shadow-xl border border-emerald-800/40 relative">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Stockton Business Centre, TS18 1DW
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                The Dominion Difference
              </h3>

              <div className="space-y-3 mb-6 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Local & Responsive:</strong> Our coordinators know the local care facilities, roads, and shift patterns across Teesside and the North East.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>People First:</strong> We support our agency staff with competitive rates, weekly payroll, and personal well-being checks.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Compliance Transparency:</strong> Full audit files delivered proactively to your facility prior to every shift.
                  </span>
                </div>
              </div>

              {/* Stats Box */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-xl font-extrabold text-emerald-400">70,000+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Shifts Delivered</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-teal-300">120+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Care Providers</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-green-400">24,000+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Annual Care Hrs</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-amber-400">10+ Years</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Track Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
