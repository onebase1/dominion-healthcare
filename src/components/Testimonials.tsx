import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full inline-block mb-3">
            Real Feedback from Healthcare Partners & Staff
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Care Home Leaders & Healthcare Professionals
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read why facilities across North East England rely on Dominion for critical shift cover, and why nurses and HCAs love our flexible agency rota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 hover:border-emerald-300 rounded-2xl p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-emerald-300/80 mb-2" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{item.author}</div>
                  <div className="text-xs font-semibold text-emerald-700">{item.role}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {item.facility} • {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
