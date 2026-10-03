import { Building2, Users, Check, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

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
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
            Two-Sided Healthcare Staffing Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Connecting High-Calibre Staff with Healthcare Providers
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you operate a residential care home facing short-notice staff absences, or you are a qualified healthcare worker seeking flexible, well-paid agency shifts—Dominion Healthcare provides seamless, compliant solutions.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: FOR HEALTHCARE FACILITIES */}
          <div className="bg-white rounded-2xl border-2 border-blue-600 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all">
            {/* Header Badge */}
            <div className="bg-blue-600 text-white p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" /> For Healthcare Providers
                </span>
                <span className="text-xs bg-blue-800/80 px-2.5 py-1 rounded text-blue-100 font-medium">
                  Care Homes • NHS • Private
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Need Qualified Shifts Covered?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Overcome staff shortages with pre-vetted Registered Nurses, HCAs, and Support Workers available 24/7.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
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
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
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
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
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
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
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

              {/* Actions for Facilities */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={onRequestStaff}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Staff / Request Shift Cover</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Immediate phone booking: </span>
                  <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-blue-600 font-bold hover:underline">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: FOR HEALTHCARE PROFESSIONALS (CANDIDATES) */}
          <div className="bg-white rounded-2xl border-2 border-emerald-600 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all">
            {/* Header Badge */}
            <div className="bg-emerald-700 text-white p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" /> For Healthcare Candidates
                </span>
                <span className="text-xs bg-emerald-900/80 px-2.5 py-1 rounded text-emerald-100 font-medium">
                  RGN • RMN • HCA • Carers
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Work With Freedom & Top Rates
              </h3>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Take control of your work schedule with flexible shifts, reliable weekly payroll, and rewarding agency rates.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
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
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
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
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
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
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
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

              {/* Actions for Candidates */}
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
