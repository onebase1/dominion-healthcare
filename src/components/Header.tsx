import { useState } from 'react';
import { Phone, Mail, Menu, X, ShieldCheck, UserPlus, CalendarCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeaderProps {
  onRequestStaff: () => void;
  onJoinUs: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestStaff, onJoinUs, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Announcement & Emergency Bar - Deep Healthcare Forest Green */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 sm:px-8 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 Shift Coordinator Live</span>
            </div>
            <span className="hidden sm:inline text-emerald-800">|</span>
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Emergency Dispatch: {COMPANY_DETAILS.phone}</span>
            </a>
            <span className="hidden md:inline text-emerald-800">|</span>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors text-emerald-200"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-emerald-200">
            <span className="hidden lg:inline text-emerald-300/80">Stockton-on-Tees • Middlesbrough • Durham • Newcastle</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 text-[11px] font-semibold">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> CQC-Compliant Staffing
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Healthcare Green Crest */}
        <div
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-800 via-emerald-700 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform border border-emerald-600/40">
            <span className="font-extrabold text-2xl tracking-tighter text-white">D</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl tracking-tight text-slate-900 font-sans">DOMINION</span>
              <span className="font-bold text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">Agency</span>
            </div>
            <span className="text-[11px] tracking-wide text-emerald-800 font-semibold -mt-0.5 uppercase">
              Healthcare Staffing Services
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-emerald-700 transition-colors py-1 cursor-pointer"
          >
            Staffing Solutions
          </button>
          <button
            onClick={() => handleNavClick('for-facilities')}
            className="hover:text-emerald-700 transition-colors py-1 cursor-pointer"
          >
            For Care Homes & Hospitals
          </button>
          <button
            onClick={() => handleNavClick('jobs')}
            className="hover:text-emerald-700 transition-colors py-1 cursor-pointer flex items-center gap-1.5"
          >
            <span>Live Jobs</span>
            <span className="px-1.5 py-0.2 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded-full">
              Hiring
            </span>
          </button>
          <button
            onClick={() => handleNavClick('compliance')}
            className="hover:text-emerald-700 transition-colors py-1 cursor-pointer"
          >
            Compliance & Training
          </button>
          <button
            onClick={() => handleNavClick('calculator')}
            className="hover:text-emerald-700 transition-colors py-1 cursor-pointer"
          >
            Rates Calculator
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-emerald-700 transition-colors py-1 cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-emerald-700 transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* CTA Dual Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onJoinUs}
            className="px-4 py-2.5 rounded-xl border border-emerald-700/30 hover:border-emerald-700 text-emerald-900 text-xs font-bold hover:bg-emerald-50 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <UserPlus className="w-3.5 h-3.5 text-emerald-700" />
            <span>Join Our Team</span>
          </button>

          <button
            onClick={onRequestStaff}
            className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-md shadow-emerald-800/25 flex items-center gap-1.5 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Request Staff Now</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={onRequestStaff}
            className="lg:hidden px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold"
          >
            Request Staff
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-emerald-50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-base font-semibold text-slate-800">
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-700 flex justify-between items-center"
            >
              <span>Staffing Solutions (Nurses & Carers)</span>
            </button>
            <button
              onClick={() => handleNavClick('for-facilities')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-700 flex justify-between items-center"
            >
              <span>For Care Homes & Hospitals</span>
            </button>
            <button
              onClick={() => handleNavClick('jobs')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-700 flex justify-between items-center"
            >
              <span>Live Job Openings</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded-full font-bold">10+ Open</span>
            </button>
            <button
              onClick={() => handleNavClick('compliance')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-700"
            >
              Compliance & Mandatory Training
            </button>
            <button
              onClick={() => handleNavClick('calculator')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-700"
            >
              Pay & Rate Calculator
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-700"
            >
              About Dominion Healthcare
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-700"
            >
              Contact Us & Locations
            </button>

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  onRequestStaff();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Shift Cover (For Facilities)</span>
              </button>

              <button
                onClick={() => {
                  onJoinUs();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl border border-emerald-700/40 text-emerald-950 font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-50"
              >
                <UserPlus className="w-4 h-4 text-emerald-700" />
                <span>Register as Candidate (Nurses & Carers)</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="w-full py-2.5 rounded-xl bg-emerald-950 text-emerald-100 text-center font-medium text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call 24/7 Line: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
