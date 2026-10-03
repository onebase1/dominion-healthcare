import { CalendarCheck, UserPlus, PhoneCall, ShieldCheck, CheckCircle2, Award, Zap, Building2, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeroProps {
  onRequestStaff: () => void;
  onJoinUs: () => void;
  onExploreJobs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestStaff, onJoinUs, onExploreJobs }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-12 pb-20 sm:pb-28">
      {/* Decorative Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Agency Identifier Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Healthcare Employment & Temporary Staffing Agency</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>24/7 Rapid Shift Coverage</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Trusted Healthcare Staffing for <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Care Homes & Hospitals</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            Dominion Healthcare Services delivers pre-vetted, compliant <strong className="text-white font-semibold">Registered Nurses (RGN/RMN)</strong>, <strong className="text-white font-semibold">Healthcare Assistants (HCA)</strong>, and <strong className="text-white font-semibold">Support Workers</strong> to healthcare providers across the North East and the UK on-demand.
          </p>
        </div>

        {/* Dual Primary Action Box */}
        <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-700/80 shadow-2xl mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Box 1: For Healthcare Providers (B2B) */}
            <div className="bg-gradient-to-br from-blue-900/60 to-slate-900/90 p-5 rounded-xl border border-blue-500/30 flex flex-col justify-between hover:border-blue-400/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-400" /> Care Homes & Hospitals
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 text-[10px] font-semibold">B2B Solutions</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  Need Staff Cover Fast?
                </h2>
                <p className="text-xs text-slate-300 mb-4 leading-normal">
                  Cover ad-hoc sickness, long days, or night shifts with fully compliant, experienced healthcare staff.
                </p>
              </div>
              <button
                onClick={onRequestStaff}
                className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request Staff Today</span>
              </button>
            </div>

            {/* Box 2: For Healthcare Professionals (Candidates) */}
            <div className="bg-gradient-to-br from-slate-900/90 to-emerald-950/40 p-5 rounded-xl border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-emerald-400" /> Nurses & Carers
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">Join Dominion</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">
                  Looking for Rewarding Shifts?
                </h2>
                <p className="text-xs text-slate-300 mb-4 leading-normal">
                  Earn competitive rates (£20–£38/hr Nurses, £12–£16.50/hr HCAs), weekly payroll, and free certified training.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onJoinUs}
                  className="flex-1 py-3 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Join Our Roster</span>
                </button>
                <button
                  onClick={onExploreJobs}
                  className="py-3 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors border border-slate-700 cursor-pointer"
                >
                  Browse Jobs
                </button>
              </div>
            </div>
          </div>

          {/* Emergency Dispatch Banner inside Hero */}
          <div className="mt-3 pt-3 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Have an urgent shift vacancy right now? Our on-call desk is live:</span>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-cyan-300 bg-slate-700/60 px-3 py-1.5 rounded-lg border border-slate-600 hover:border-slate-500 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* Real-time Proof Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-4">
          <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 mb-1">70,000+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Completed Shifts</div>
          </div>
          <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">120+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Care Facilities Served</div>
          </div>
          <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">500+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Active Agency Staff</div>
          </div>
          <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl text-center">
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
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Skills for Care Compliant Training</span>
          </div>
        </div>
      </div>
    </section>
  );
};
