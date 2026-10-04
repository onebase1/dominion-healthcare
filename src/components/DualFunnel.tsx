import { Building2, Users, Check, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/mockData';

interface DualFunnelProps {
  onRequestStaff: () => void;
  onJoinUs: () => void;
  onExploreJobs: () => void;
}

export const DualFunnel: React.FC<DualFunnelProps> = ({ onRequestStaff, onJoinUs, onExploreJobs }) => {
  return (
    <section id="for-facilities" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
            Two-Sided Healthcare Staffing Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Connecting High-Calibre Staff with Healthcare Providers
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you operate a residential care home facing short-notice staff absences, or you are a qualified healthcare worker seeking flexible, well-paid agency shifts—Dominion Healthcare provides seamless, compliant staffing solutions.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: FOR HEALTHCARE FACILITIES */}
          <div className="bg-white rounded-2xl border-2 border-emerald-800 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all group">
            <div>
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={IMAGES.modernHospitalCareHome}
                  alt="Modern UK care home and clinical facility environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-500/40">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400" /> For Healthcare Providers
                  </span>
                  <span className="text-xs bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200 font-medium border border-slate-700">
                    Care Homes • Hospitals • Hospices
                  </span>
                </div>
              </div>

              {/* Card Title Box */}
              <div className="bg-emerald-900 text-white p-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Need Qualified Shifts Covered?
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Overcome staff shortages with pre-vetted Registered Nurses, HCAs, and Support Workers available 24/7.
                </p>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Rapid 60–90 Minute Emergency Response</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fast-track dispatch for last-minute sickness, winter pressures, and unexpected occupancy increases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% CQC-Ready Digital Compliance Packs</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Enhanced DBS, NMC PIN verification, mandatory training certificates, and ID checks sent to your inbox before the shift starts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Flexible Ad-Hoc & Planned Block Bookings</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      From single emergency twilight shifts to 3-month recurring rotas to maintain care continuity for your residents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dedicated Account Manager</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Direct phone access to a senior staffing coordinator who knows your facility’s specific procedures and resident needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions for Facilities */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={onRequestStaff}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md shadow-emerald-900/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Staff / Request Shift Cover</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Immediate phone booking: </span>
                  <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-emerald-700 font-bold hover:underline">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: FOR HEALTHCARE PROFESSIONALS (CANDIDATES) */}
          <div className="bg-white rounded-2xl border-2 border-emerald-600 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all group">
            <div>
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={IMAGES.nurseColleague}
                  alt="UK agency healthcare professional reviewing care notes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-400/40">
                    <Users className="w-3.5 h-3.5 text-emerald-300" /> For Healthcare Candidates
                  </span>
                  <span className="text-xs bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200 font-medium border border-slate-700">
                    RGN • RMN • HCA • Support
                  </span>
                </div>
              </div>

              {/* Card Title Box */}
              <div className="bg-emerald-700 text-white p-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Work With Freedom & Top Rates
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Take control of your shift rota with flexible days and nights, reliable weekly payroll, and rewarding agency rates.
                </p>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Highly Competitive Hourly Pay</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Earn <strong className="text-slate-800">£20.00–£38.00/hr</strong> for Registered Nurses and <strong className="text-slate-800">£12.00–£16.50/hr</strong> for HCAs & Support Workers, plus weekend/night enhancements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Guaranteed Weekly Fast Payroll</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      No waiting monthly for your hard-earned wages. Timesheets processed promptly for weekly direct bank deposits every Friday.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Free Certified Mandatory & CPD Training</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Free Moving & Handling, Physical Intervention, SoVA, and BLS courses to keep your qualifications and revalidation on track.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Total Work-Life Balance Control</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Pick the days, hours, and locations that suit your personal life. Work full-time hours or pick up supplemental shifts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions for Candidates */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={onJoinUs}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Register as Candidate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onExploreJobs}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View 10+ Live Jobs</span>
                  </button>
                </div>
                <p className="text-center text-xs text-slate-500">
                  Quick 2-minute registration • Fast document verification • Start working within days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
