import { ShieldCheck, CheckCircle2, FileCheck, GraduationCap, ArrowRight, Lock, MapPin } from 'lucide-react';
import { TRAINING_MODULES, VETTING_STANDARDS, IMAGES } from '../data/mockData';

interface ComplianceHubProps {
  onRequestStaff: () => void;
  onJoinUs: () => void;
}

export const ComplianceHub: React.FC<ComplianceHubProps> = ({ onRequestStaff, onJoinUs }) => {
  return (
    <section id="compliance" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full inline-block mb-3">
            Clinical Governance & Quality Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Highest Standards of Vetting & Accredited Training
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Patient safety and clinical dignity are non-negotiable. Every nurse, HCA, and support worker dispatched by Dominion Healthcare is rigorously audited to ensure 100% CQC and Care Inspectorate compliance.
          </p>
        </div>

        {/* 7-Point Vetting Guarantee */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> 7-Point Quality Standard
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our Rigorous Compliance Protocol
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Audit Pass Rate
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VETTING_STANDARDS.map(standard => (
              <div
                key={standard.step}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow-md">
                    {standard.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {standard.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {standard.detail}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1 text-[11px] text-emerald-300 font-medium">
                  <Lock className="w-3 h-3" /> Fully Verified
                </div>
              </div>
            ))}

            {/* Final Summary Card with Digital Compliance File */}
            <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 border border-emerald-600/50 rounded-2xl p-6 flex flex-col justify-between text-white shadow-xl">
              <div>
                <FileCheck className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Digital Compliance Packs
                </h4>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Before any agency staff member crosses your threshold, your management team receives an electronic compliance file with DBS verification, photo ID, and training credentials.
                </p>
              </div>
              <button
                onClick={onRequestStaff}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer text-center shadow-md shadow-emerald-900/30"
              >
                Request Facility Staff
              </button>
            </div>
          </div>
        </div>

        {/* Accredited Training Hub Section with Photo */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full inline-block mb-2">
                Certified Practical Courses
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                In-House Training & Revalidation
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                We don’t just recruit—we actively train our staff face-to-face in our Stockton-on-Tees training facility.
              </p>
            </div>
            <button
              onClick={onJoinUs}
              className="px-5 py-2.5 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Enroll in Free Training Modules</span>
            </button>
          </div>

          {/* Visual Highlight Banner for Training Facility */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-4 h-48 md:h-full relative">
              <img
                src={IMAGES.trainingEquipment}
                alt="Accredited clinical training equipment and healthcare skills suite"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/80 hidden md:block"></div>
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 text-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <MapPin className="w-4 h-4" /> Stockton Business Centre Clinical Suite
              </div>
              <h4 className="text-xl font-bold">
                Practical, Hands-On Mandatory Training for All Roster Staff
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                Every nurse and healthcare assistant refreshes their Moving & Handling hoists, CPR mannequins, and PMVA de-escalation drills in person with certified clinical instructors. Our clients rest easy knowing Dominion staff are prepared from day one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRAINING_MODULES.map((module, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-emerald-500 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      {module.type}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {module.frequency}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {module.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {module.description}
                  </p>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Curriculum Highlights:
                    </span>
                    {module.skillsCovered.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Certificate Issued Upon Completion
                  </span>
                  <button
                    onClick={onJoinUs}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Register</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
