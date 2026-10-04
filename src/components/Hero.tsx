import { CalendarCheck, UserPlus, PhoneCall, ShieldCheck, CheckCircle2, Zap, Building2, Users, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/mockData';

interface HeroProps {
  onRequestStaff: () => void;
  onJoinUs: () => void;
  onExploreJobs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestStaff, onJoinUs, onExploreJobs }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-10 pb-20 sm:pb-28">
      {/* Decorative Glow Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/15 blur-3xl pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-teal-500/15 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Agency Identifier Badge */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>UK Healthcare Staffing & Recruitment Agency</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>24/7 Rapid Shift Dispatch</span>
          </div>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Qualified Healthcare Staff for <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-300 bg-clip-text text-transparent">Care Homes & Hospitals</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 mb-8">
              Dominion Healthcare Services is an independent UK staffing agency providing pre-vetted, compliant <strong className="text-white font-semibold">Registered Nurses (RGN/RMN)</strong>, <strong className="text-white font-semibold">Healthcare Assistants (HCA)</strong>, and <strong className="text-white font-semibold">Support Workers</strong> to healthcare providers across North East England and nationwide.
            </p>

            {/* Dual Primary Action Box */}
            <div className="bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-emerald-500/30 shadow-2xl mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* For Facilities */}
                <div className="bg-gradient-to-br from-emerald-950/80 to-slate-900 p-4.5 rounded-xl border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400/70 transition-all group text-left">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" /> Care Facilities
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">B2B Cover</span>
                    </div>
                    <h2 className="text-base font-bold text-white mb-1 group-hover:text-emerald-200 transition-colors">
                      Need Immediate Staff?
                    </h2>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      Cover short-notice sickness, weekend rotas, or block bookings with vetted nurses & HCAs.
                    </p>
                  </div>
                  <button
                    onClick={onRequestStaff}
                    className="w-full py-2.5 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-emerald-700/40 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book Shift Cover</span>
                  </button>
                </div>

                {/* For Candidates */}
                <div className="bg-gradient-to-br from-slate-900 to-teal-950/60 p-4.5 rounded-xl border border-teal-500/30 flex flex-col justify-between hover:border-teal-400/70 transition-all group text-left">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-teal-400" /> Nurses & Carers
                      </span>
                      <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-semibold">Join Dominion</span>
                    </div>
                    <h2 className="text-base font-bold text-white mb-1 group-hover:text-teal-200 transition-colors">
                      Looking for High-Pay Shifts?
                    </h2>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      Top hourly rates (£20–£38/hr Nurses, £12–£16.50/hr HCAs), weekly Friday payroll, free training.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={onJoinUs}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-teal-700/40 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Join Roster</span>
                    </button>
                    <button
                      onClick={onExploreJobs}
                      className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors border border-slate-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Jobs</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Emergency Hotline inside Action Box */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Urgent staffing shortage? Our 24/7 on-call coordinator is active:</span>
                </div>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="inline-flex items-center gap-1.5 font-bold text-white hover:text-emerald-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-500 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Healthcare Imagery with Trust Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-slate-800">
                <img
                  src={IMAGES.heroNurse}
                  alt="Professional UK Agency Nurse in clinical uniform with stethoscope ready for hospital and care home shift"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Dark gradient overlay at bottom for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating Badge 1: Top Right CQC & Framework */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Quality Standard</div>
                    <div className="text-xs font-bold text-white">CQC-Ready Vetting</div>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Overlay Stats */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs font-bold text-emerald-300">Live Stockton On-Call Desk</span>
                    </div>
                    <span className="text-[10px] text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded font-semibold">
                      &lt; 60 Min Dispatch
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-300 text-xs border-t border-slate-800 pt-2">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>RGNs & RMNs on Standby</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>HCAs & Carers Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Proof Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-4">
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">70,000+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Completed Shifts</div>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-300 mb-1">120+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Care Facilities Served</div>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-green-400 mb-1">500+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Active Agency Staff</div>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">&lt; 60 mins</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Emergency Dispatch</div>
          </div>
        </div>

        {/* Accreditation and Standards Trust Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Enhanced DBS Check on Update Service</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Real-time NMC PIN Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Full Right-to-Work Biometric Vetting</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Certified Mandatory Clinical Training</span>
          </div>
        </div>
      </div>
    </section>
  );
};
