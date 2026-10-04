import { useState, useEffect } from 'react';
import { X, CalendarCheck, ShieldCheck, CheckCircle2, PhoneCall, Building2, Zap, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS } from '../data/mockData';
import type { StaffBookingFormData } from '../types';

interface StaffBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaffBookingModal: React.FC<StaffBookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<StaffBookingFormData>({
    facilityName: '',
    facilityType: 'Care Home',
    contactName: '',
    phone: '',
    email: '',
    postcode: '',
    staffType: ['Registered Nurse (RGN)'],
    numberOfStaff: 1,
    shiftTiming: 'Long Day (12h)',
    startDate: '',
    urgency: 'Emergency (< 2 Hours)',
    specialRequirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRoleToggle = (role: string) => {
    setFormData(prev => {
      const exists = prev.staffType.includes(role);
      if (exists) {
        if (prev.staffType.length === 1) return prev; // keep at least one
        return { ...prev, staffType: prev.staffType.filter(r => r !== role) };
      } else {
        return { ...prev, staffType: [...prev.staffType, role] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedTicket = `DHC-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/75 backdrop-blur-xs flex items-end sm:items-center justify-center sm:p-4 animate-in fade-in duration-200">
      {/* Mobile Bottom Sheet & Desktop Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[94vh] sm:h-auto sm:max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-6 sm:slide-in-from-bottom-2 duration-300">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-5 sm:p-6 relative shrink-0">
          {/* Mobile Drag Indicator Pill */}
          <div className="w-12 h-1.5 bg-white/40 rounded-full mx-auto mb-3 sm:hidden"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-700/50 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 flex-wrap pr-8">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Care Provider Portal
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-200 text-xs font-medium">
              24/7 On-Call Desk
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            Request Shift Cover / Book Staff
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 leading-snug">
            Immediate dispatch for care homes and hospitals across the North East & UK.
          </p>

          {/* Quick Call Button on Header for Mobile Users */}
          <div className="mt-3 pt-2.5 border-t border-emerald-700/50 flex items-center justify-between sm:hidden">
            <span className="text-[11px] text-emerald-200 font-medium">Need immediate phone answer?</span>
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs"
            >
              <Phone className="w-3 h-3" />
              <span>Call 01642 345242</span>
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-7 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Request Dispatched to 24/7 Coordinator
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">
                  Staff Request Received!
                </h4>
                <p className="text-xs font-mono text-slate-500">
                  Reference Ticket: <strong className="text-slate-800">{ticketId}</strong>
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs text-slate-700 space-y-2.5 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Facility:</span>
                  <span className="font-bold text-slate-900">{formData.facilityName} ({formData.facilityType})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Staff Needed:</span>
                  <span className="font-bold text-slate-900">{formData.numberOfStaff}x {formData.staffType.join(', ')}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Shift Pattern:</span>
                  <span className="font-bold text-slate-900">{formData.shiftTiming} ({formData.urgency})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Facility Contact:</span>
                  <span className="font-bold text-slate-900">{formData.contactName} ({formData.phone})</span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 flex items-start gap-3 max-w-lg mx-auto">
                <PhoneCall className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed text-left">
                  Our on-call coordinator is reviewing available staff files now. You will receive a direct telephone confirmation within <strong>15 minutes</strong> with the allocated staff member’s CQC compliance profile.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer min-h-[48px]"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form
              id="staff-booking-form"
              onSubmit={handleSubmit}
              name="staff-booking"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="staff-booking" />

              {/* Urgency Level Tabs (Touch-Friendly 48px buttons) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Shift Urgency Level *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['Emergency (< 2 Hours)', 'Urgent (Within 24 Hours)', 'Planned Rota / Block Cover'] as const).map(level => {
                    const isSelected = formData.urgency === level;
                    const isEmergency = level.includes('Emergency');
                    return (
                      <button
                        type="button"
                        key={level}
                        onClick={() => setFormData({ ...formData, urgency: level })}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer min-h-[48px] flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? isEmergency
                              ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-xs'
                              : 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {isEmergency && <Zap className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />}
                        <span>{level}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Roles Needed Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Roles Required (Select all needed) *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Registered Nurse (RGN)',
                    'Mental Health Nurse (RMN)',
                    'Healthcare Assistant (HCA)',
                    'Support Worker'
                  ].map(role => {
                    const isSelected = formData.staffType.includes(role);
                    return (
                      <button
                        type="button"
                        key={role}
                        onClick={() => handleRoleToggle(role)}
                        className={`p-3 rounded-xl text-xs font-semibold border text-left flex flex-col justify-between transition-all cursor-pointer min-h-[52px] ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{role}</span>
                        <span className={`text-[10px] mt-1 ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`}>
                          {isSelected ? '✓ Selected' : '+ Add'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Staff Count & Shift Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Number of Staff *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    required
                    inputMode="numeric"
                    value={formData.numberOfStaff}
                    onChange={e => setFormData({ ...formData, numberOfStaff: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Shift Timing *
                  </label>
                  <select
                    value={formData.shiftTiming}
                    onChange={e => setFormData({ ...formData, shiftTiming: e.target.value as any })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white min-h-[48px]"
                  >
                    <option value="Long Day (12h)">Long Day (08:00 - 20:00)</option>
                    <option value="Day Shift">Day Shift (08:00 - 14:00)</option>
                    <option value="Late Shift">Late Shift (14:00 - 20:00)</option>
                    <option value="Night Shift">Night Shift (20:00 - 08:00)</option>
                    <option value="Waking Night">Waking Night</option>
                    <option value="Custom">Custom / Block Booking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Shift Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white min-h-[48px]"
                  />
                </div>
              </div>

              {/* Facility Details */}
              <div className="border-t border-slate-200 pt-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Facility Information & Contact
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Facility / Care Home Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abbeyfield Nursing Home"
                      value={formData.facilityName}
                      onChange={e => setFormData({ ...formData, facilityName: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Facility Type *
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={e => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white min-h-[48px]"
                    >
                      <option value="Care Home">Residential Care Home</option>
                      <option value="Nursing Home">Nursing Home</option>
                      <option value="NHS Trust">NHS Trust / Hospital</option>
                      <option value="Private Hospital">Private Hospital</option>
                      <option value="Supported Living">Supported Living Scheme</option>
                      <option value="Hospice">Hospice / Palliative</option>
                      <option value="Other">Other Healthcare Provider</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Name & Title *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Lisa Davies (Deputy Manager)"
                      value={formData.contactName}
                      onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Mobile / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="e.g. 07700 900000 / 01642"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      inputMode="email"
                      autoComplete="email"
                      placeholder="manager@carehome.co.uk"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Facility Postcode *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="postal-code"
                      autoCapitalize="characters"
                      placeholder="e.g. TS18 1DW"
                      value={formData.postcode}
                      onChange={e => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white uppercase font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Requirements or Shift Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dementia unit experience, Hoist certified, PEG feeding"
                    value={formData.specialRequirements}
                    onChange={e => setFormData({ ...formData, specialRequirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  />
                </div>
              </div>

              {/* Safe distance for sticky footer */}
              <div className="h-2"></div>
            </form>
          )}
        </div>

        {/* Modal Sticky Bottom Action Bar (Thumb-Accessible on Mobile) */}
        {!submitted && (
          <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 sm:p-5 shrink-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>All assigned staff vetted to CQC standard</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 sm:flex-initial px-4 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors min-h-[48px] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="staff-booking-form"
                  disabled={isSubmitting}
                  className="flex-2 sm:flex-initial px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-900/30 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>{isSubmitting ? 'Dispatching...' : 'Confirm & Request Staff'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
