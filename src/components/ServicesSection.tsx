import { Stethoscope, HeartHandshake, UserCheck, Clock, Check, ArrowRight, Shield, Zap } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface ServicesSectionProps {
  onRequestStaff: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestStaff }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-emerald-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-green-400" />;
      default:
        return <Clock className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-950/70 border border-emerald-800/80 rounded-full inline-block mb-3">
            Comprehensive Healthcare Staffing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Healthcare Professionals for Every Clinical Need
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            From single ad-hoc emergency shift cover to comprehensive long-term block rotas, Dominion Healthcare Services supplies fully vetted, skilled professionals across North East England and nationwide.
          </p>
        </div>

        {/* 4 Cards Grid with Visual Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map(service => (
            <div
              key={service.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 rounded-2xl overflow-hidden shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  {/* Top Bar on Image */}
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-300 text-xs font-semibold border border-emerald-700/60 backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-400 mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Clinical Skills Checklist */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Verified Competencies & Clinical Skills:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable Settings Box */}
                  <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-xs text-slate-400">
                    <span className="text-slate-300 font-semibold block mb-0.5">Recommended Facilities:</span>
                    <span>{service.suitableFor}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> Vetted to CQC guidelines
                </span>
                <button
                  onClick={onRequestStaff}
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-700/30 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book This Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/90 border border-emerald-600/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a custom rota or multi-facility block contract?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                We design tailored staffing agreements with preferential agency rates for care home groups and NHS hospital trusts.
              </p>
            </div>
          </div>
          <button
            onClick={onRequestStaff}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer"
          >
            Speak to Our Director
          </button>
        </div>
      </div>
    </section>
  );
};
