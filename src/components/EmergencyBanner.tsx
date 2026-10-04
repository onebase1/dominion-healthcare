import { useState } from 'react';
import { PhoneCall, CalendarCheck, X, Zap } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface EmergencyBannerProps {
  onRequestStaff: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onRequestStaff }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-18 lg:bottom-4 right-4 z-30 max-w-sm sm:max-w-md w-[calc(100%-2rem)] sm:w-auto bg-slate-950/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-emerald-500/40 animate-in slide-in-from-bottom-5 duration-300">
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
          <Zap className="w-5 h-5 animate-pulse" />
        </div>

        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-300 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Urgent Shift Shortage?</span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5 leading-snug">
            Emergency staffing dispatch: nurses & carers deployed in &lt; 60 mins.
          </p>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center gap-2">
        <a
          href={`tel:${COMPANY_DETAILS.phoneClean}`}
          className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm min-h-[40px]"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Call {COMPANY_DETAILS.phone}</span>
        </a>
        <button
          onClick={onRequestStaff}
          className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 hover:border-emerald-500 transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[40px]"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Book Cover</span>
        </button>
      </div>
    </div>
  );
};
