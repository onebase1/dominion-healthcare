import { useState } from 'react';
import { Phone, Menu, X, ShieldCheck, UserPlus, CalendarCheck, ChevronDown, Building2, Users, Briefcase, GraduationCap, Calculator, Clock, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';
import { ProtectedEmail } from './ProtectedEmail';
import { DominionLogo } from './DominionLogo';

interface HeaderProps {
  onRequestStaff: () => void;
  onJoinUs: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestStaff, onJoinUs, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);
  const [workersDropdownOpen, setWorkersDropdownOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setFacilitiesDropdownOpen(false);
    setWorkersDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top 24/7 Emergency Dispatch Strip */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 sm:px-8 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 Shift Desk Active</span>
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
            <div className="hidden md:flex items-center gap-1.5 text-emerald-200">
              <ProtectedEmail className="text-emerald-200 hover:text-white" />
            </div>
          </div>

          <div className="flex items-center gap-3 text-emerald-200 text-[11px]">
            <span className="hidden lg:inline text-emerald-300/80">Stockton-on-Tees • Middlesbrough • Durham • Newcastle</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 font-semibold">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> CQC-Compliant Roster
            </span>
          </div>
        </div>
      </div>

      {/* Main Streamlined Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Authentic DHCS Brand Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer group select-none py-1"
          title="Dominion Healthcare Services Ltd - Home"
        >
          <DominionLogo variant="full" height={44} />
        </div>

        {/* Clean, Organized Desktop Nav Links (Grouped into Clear Categories) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          
          {/* Group 1: For Healthcare Providers (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setFacilitiesDropdownOpen(true)}
            onMouseLeave={() => setFacilitiesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('for-facilities')}
              className={`hover:text-emerald-700 transition-colors py-2 flex items-center gap-1 cursor-pointer ${
                facilitiesDropdownOpen ? 'text-emerald-800 font-bold' : ''
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>For Care Providers</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${facilitiesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {facilitiesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-800">Staffing Roles & Solutions</div>
                    <div className="text-[11px] text-slate-500">RGNs, RMNs, HCAs & Support Workers</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('for-facilities')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-800">24/7 Rapid Shift Cover</div>
                    <div className="text-[11px] text-slate-500">&lt; 60 minute emergency dispatch</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('compliance')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-800 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-800">7-Point Compliance Vetting</div>
                    <div className="text-[11px] text-slate-500">Enhanced DBS, NMC PIN & CQC packs</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-800">Staffing Cost Estimator</div>
                    <div className="text-[11px] text-slate-500">Transparent facility cover pricing</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Group 2: For Healthcare Staff (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setWorkersDropdownOpen(true)}
            onMouseLeave={() => setWorkersDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('jobs')}
              className={`hover:text-emerald-700 transition-colors py-2 flex items-center gap-1 cursor-pointer ${
                workersDropdownOpen ? 'text-emerald-800 font-bold' : ''
              }`}
            >
              <Users className="w-4 h-4 text-emerald-700" />
              <span>For Healthcare Staff</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${workersDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {workersDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <button
                  onClick={() => handleNavClick('jobs')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-800 flex items-center gap-1.5">
                      <span>Live Shift Vacancies</span>
                      <span className="px-1.5 py-0.2 bg-emerald-100 text-emerald-800 font-bold text-[9px] rounded-full">Hiring</span>
                    </div>
                    <div className="text-[11px] text-slate-500">Nursing, HCA & Support shifts</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-800">Weekly Pay Calculator</div>
                    <div className="text-[11px] text-slate-500">£20–£38/hr Nurses, weekly Friday pay</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('compliance')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-800 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-800">Free Certified Training</div>
                    <div className="text-[11px] text-slate-500">Moving & Handling, SoVA, BLS</div>
                  </div>
                </button>

                <button
                  onClick={onJoinUs}
                  className="w-full text-left p-2.5 rounded-xl bg-emerald-50 text-emerald-950 font-bold text-xs hover:bg-emerald-100 transition-colors flex items-center justify-between cursor-pointer mt-1"
                >
                  <span className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-emerald-700" /> Register / Send CV
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold">2 Mins →</span>
                </button>
              </div>
            )}
          </div>

          {/* Group 3: Standalone About & Contact */}
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
          >
            About Us
          </button>
          
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-emerald-700 transition-colors py-2 cursor-pointer flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Contact Desk</span>
          </button>
        </nav>

        {/* Clean Right Actions (Focused Dual CTA) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onJoinUs}
            className="px-4 py-2.5 rounded-xl border border-emerald-700/40 text-emerald-950 text-xs font-bold hover:bg-emerald-50 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5 text-emerald-700" />
            <span>Join Roster</span>
          </button>

          <button
            onClick={onRequestStaff}
            className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-md shadow-emerald-800/25 flex items-center gap-1.5 cursor-pointer hover:shadow-lg"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Book Shift Cover</span>
          </button>
        </div>

        {/* Mobile Header Actions (Compact for Phones) */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${COMPANY_DETAILS.phoneClean}`}
            className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1 min-h-[40px]"
            title={`Call 24/7 Desk: ${COMPANY_DETAILS.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden xs:inline">Call</span>
          </a>
          <button
            onClick={onRequestStaff}
            className="px-3 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold min-h-[40px]"
          >
            Book Staff
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-emerald-50 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Organized into Clean Two-Sided Sections) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
          <div className="space-y-6">
            
            {/* Section 1: For Healthcare Providers */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-2">
                <Building2 className="w-3.5 h-3.5" /> For Care Homes & Hospitals
              </span>
              <button
                onClick={() => handleNavClick('services')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-800 hover:text-emerald-700 flex justify-between items-center"
              >
                <span>Staffing Roles (RGN, RMN, HCA, Support)</span>
                <span className="text-slate-400">→</span>
              </button>
              <button
                onClick={() => handleNavClick('for-facilities')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-800 hover:text-emerald-700 flex justify-between items-center"
              >
                <span>24/7 Rapid Cover & Emergency Dispatch</span>
                <span className="text-slate-400">→</span>
              </button>
              <button
                onClick={() => handleNavClick('compliance')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-800 hover:text-emerald-700 flex justify-between items-center"
              >
                <span>7-Point Vetting & CQC Compliance Packs</span>
                <span className="text-slate-400">→</span>
              </button>
              <button
                onClick={() => handleNavClick('calculator')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-800 hover:text-emerald-700 flex justify-between items-center"
              >
                <span>Staffing Rate Calculator</span>
                <span className="text-slate-400">→</span>
              </button>
            </div>

            {/* Section 2: For Nurses & Healthcare Workers */}
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-2">
                <Users className="w-3.5 h-3.5" /> For Nurses & Healthcare Workers
              </span>
              <button
                onClick={() => handleNavClick('jobs')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-800 hover:text-emerald-700 flex justify-between items-center"
              >
                <span>Live Shift Vacancies</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">10+ Open</span>
              </button>
              <button
                onClick={() => handleNavClick('calculator')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-800 hover:text-emerald-700 flex justify-between items-center"
              >
                <span>Weekly Friday Pay & Hourly Rates</span>
                <span className="text-slate-400">→</span>
              </button>
              <button
                onClick={() => handleNavClick('compliance')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-800 hover:text-emerald-700 flex justify-between items-center"
              >
                <span>Free Certified Mandatory Training</span>
                <span className="text-slate-400">→</span>
              </button>
            </div>

            {/* Section 3: Company & Direct Contacts */}
            <div className="space-y-2 border-t border-slate-200 pt-3">
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 flex justify-between"
              >
                <span>About Dominion Healthcare Services Ltd</span>
                <span className="text-slate-400">→</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 flex justify-between"
              >
                <span>Contact Stockton HQ & Locations</span>
                <span className="text-slate-400">→</span>
              </button>
            </div>

            {/* Section 4: Primary Mobile Actions */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onRequestStaff();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Staff / Request Shift Cover</span>
              </button>

              <button
                onClick={() => {
                  onJoinUs();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl border border-emerald-700/40 text-emerald-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-emerald-50 cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-emerald-700" />
                <span>Register as Candidate (Nurses & Carers)</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="w-full py-2.5 rounded-xl bg-emerald-950 text-emerald-200 text-center font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct 24/7 Hotline: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
