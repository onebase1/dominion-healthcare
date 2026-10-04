import { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS } from '../data/mockData';
import { ProtectedEmail } from './ProtectedEmail';
import type { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'Facility Staffing',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full inline-block">
              Get in Touch
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Connect With Our Healthcare Staffing Desk
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you need urgent shift coverage, want to establish a service-level agreement, or wish to register as a healthcare professional, our coordinators are here 24 hours a day.
            </p>

            {/* Mobile-Friendly 1-Tap Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 active:scale-98 transition-all group min-h-[64px]"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">24/7 Phone Dispatch</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {COMPANY_DETAILS.phone}
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold block">Tap to call our coordinator</span>
                </div>
              </a>

              <ProtectedEmail
                variant="card"
                className="bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 active:scale-98 transition-all min-h-[64px]"
              />

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 min-h-[64px]">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Stockton Office</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {COMPANY_DETAILS.address}
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-0.5">North East England Regional HQ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Dominion Healthcare Services. A staffing consultant or recruitment specialist will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        inquiryType: 'Facility Staffing',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer min-h-[44px]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact-general"
                  data-netlify="true"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact-general" />

                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">
                    Fill in your details and we will direct your message to the appropriate department.
                  </p>

                  {/* Inquiry Type Radio / Pill Tabs (Touch-friendly 44px min-height) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      I am contacting regarding: *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Facility Staffing', 'Candidate Recruitment', 'Training Courses', 'General Query'] as const).map(type => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                            formData.inquiryType === type
                              ? 'border-emerald-700 bg-emerald-700 text-white font-bold shadow-xs'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        autoCapitalize="words"
                        placeholder="e.g. John Miller"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="e.g. 01642 xxxxxx"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        inputMode="email"
                        autoComplete="email"
                        autoCapitalize="none"
                        placeholder="e.g. j.miller@caregroup.co.uk"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Weekend RGN cover or joining as HCA"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please tell us about your shift requirements or inquiry..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Data protected under UK GDPR regulations</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
