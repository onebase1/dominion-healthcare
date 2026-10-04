import React from 'react';
import { PhoneCall, UserPlus, CalendarCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface MobileQuickBarProps {
  onJoinUs: () => void;
  onRequestStaff: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onJoinUs, onRequestStaff }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-emerald-900/60 p-2 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-1.5">
        {/* Call Desk Button */}
        <a
          href={`tel:${COMPANY_DETAILS.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white hover:bg-emerald-900/40 transition-colors active:scale-95"
          aria-label="Call 24/7 Desk"
        >
          <PhoneCall className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span className="text-[10px] font-bold tracking-tight text-white leading-tight">24/7 Desk</span>
          <span className="text-[8px] text-emerald-400 font-mono">01642 345242</span>
        </a>

        {/* Join Roster / Upload CV Button */}
        <button
          onClick={onJoinUs}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white transition-all shadow-md shadow-emerald-800/40 active:scale-95 cursor-pointer"
          aria-label="Join Agency Team or Upload CV"
        >
          <UserPlus className="w-4 h-4 mb-0.5 text-white" />
          <span className="text-[10px] font-black tracking-tight leading-tight">Join / Apply</span>
          <span className="text-[8px] text-emerald-100 font-medium">Upload CV / Doc</span>
        </button>

        {/* Book Shift Cover Button */}
        <button
          onClick={onRequestStaff}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-800 hover:bg-teal-700 text-white transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Book Shift Cover"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5 text-teal-200" />
          <span className="text-[10px] font-black tracking-tight leading-tight">Book Staff</span>
          <span className="text-[8px] text-teal-100 font-medium">Care Providers</span>
        </button>
      </div>
    </div>
  );
};
