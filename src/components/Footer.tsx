import { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestStaff: () => void;
  onJoinUs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestStaff, onJoinUs }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
      setTimeout(() => setNewsletterSent(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-emerald-900/40">
                D
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">DOMINION</span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 block -mt-1 font-semibold">
                  Healthcare Staffing Services Ltd
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dominion Healthcare Services is a premier UK healthcare recruitment and temporary staffing agency. We supply fully compliant Registered Nurses (RGN/RMN), Healthcare Assistants, and Support Workers to Care Homes, NHS Trusts, and Hospitals 24/7/365.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="hover:text-white transition-colors font-semibold">
                  01642 345242 (24/7 Dispatch)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: For Facilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              For Healthcare Facilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={onRequestStaff}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Book Shift Cover
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Registered Nurses (RGN/RMN)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Healthcare Assistants (HCA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Specialist Support Workers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('compliance')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  7-Point Vetting Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Staffing Rate Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: For Candidates */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              For Healthcare Workers
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={onJoinUs}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Join Our Agency Roster
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Live Shift Vacancies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('compliance')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Free Mandatory Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pay & Take-Home Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Our Values & Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Stockton HQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Dispatch */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe for shift releases, healthcare compliance news, and agency rate updates.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              name="newsletter"
              data-netlify="true"
              className="space-y-2"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="w-full pl-3 pr-9 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {newsletterSent && (
                <span className="text-[11px] text-emerald-400 block font-medium">
                  ✓ Thank you for subscribing!
                </span>
              )}
            </form>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 font-semibold block mb-1">
                Emergency Shift Line:
              </span>
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="text-xs font-extrabold text-emerald-400 hover:underline block"
              >
                01642 345242
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <div>
              © {new Date().getFullYear()} Dominion Healthcare Services Ltd. All rights reserved.
            </div>
            <div className="text-[11px] text-slate-600">
              Registered in England & Wales • 219 Stockton Business Centre, TS18 1DW • UK Employment Agency
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> CQC-Aligned Standards
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
