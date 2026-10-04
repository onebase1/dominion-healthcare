import { useState } from 'react';
import { X, CalendarCheck, ShieldCheck, CheckCircle2, PhoneCall, Building2 } from 'lucide-react';
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

    // Generate random reference code
    const generatedTicket = `DHC-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-700/50 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Healthcare Facility Portal
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-200 text-xs font-medium">
              24/7 Fast Dispatch
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Request Shift Cover / Book Healthcare Staff
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Need staff coverage for your care home, hospital, or supported living facility? Submit your request below or call <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="font-bold underline hover:text-white">{COMPANY_DETAILS.phone}</a>.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Request Dispatched to 24/7 On-Call Coordinator
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">
                  Staff Request Received!
                </h4>
                <p className="text-xs font-mono text-slate-500">
                  Reference Ticket: <strong className="text-slate-800">{ticketId}</strong>
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2 max-w-lg mx-auto">
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
                  <span className="font-bold text-slate-900">{formData.shiftTiming} (Urgency: {formData.urgency})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Person:</span>
                  <span className="font-bold text-slate-900">{formData.contactName} ({formData.phone})</span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 flex items-start gap-3 max-w-lg mx-auto">
                <PhoneCall className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Our on-call coordinator is reviewing staff files right now. You will receive a direct telephone confirmation within <strong>15 minutes</strong> with the allocated staff member’s CQC compliance profile.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="staff-booking"
              data-netlify="true"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="staff-booking" />

              {/* Urgency Badge Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Shift Urgency Level *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['Emergency (< 2 Hours)', 'Urgent (Within 24 Hours)', 'Planned Rota / Block Cover'] as const).map(level => (
                    <button
                      type="button"
                      key={level}
                      onClick={() => setFormData({ ...formData, urgency: level })}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                        formData.urgency === level
                          ? level.includes('Emergency')
                            ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-xs'
                            : 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Roles Needed Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Roles Required (Select all that apply) *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                        className={`p-2.5 rounded-lg text-xs font-medium border text-left flex flex-col justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
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

              {/* Staff Count & Shift Pattern */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Number of Staff *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    required
                    value={formData.numberOfStaff}
                    onChange={e => setFormData({ ...formData, numberOfStaff: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Shift Timing *
                  </label>
                  <select
                    value={formData.shiftTiming}
                    onChange={e => setFormData({ ...formData, shiftTiming: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
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
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Shift Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  />
                </div>
              </div>

              {/* Facility Details */}
              <div className="border-t border-slate-200 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Facility Information & Contact
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Facility / Care Home Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Primrose Court Nursing Home"
                      value={formData.facilityName}
                      onChange={e => setFormData({ ...formData, facilityName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Facility Type *
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={e => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Contact Name & Role *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins (Manager)"
                      value={formData.contactName}
                      onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01642 xxxxxx / 07xxx"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="manager@carehome.co.uk"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Facility Postcode / Town *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. TS18 1DW, Stockton"
                      value={formData.postcode}
                      onChange={e => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Special Requirements / Unit Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dementia unit, Hoist training, PEG feed"
                      value={formData.specialRequirements}
                      onChange={e => setFormData({ ...formData, specialRequirements: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>All assigned staff vetted to CQC standard</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-md shadow-emerald-900/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>{isSubmitting ? 'Dispatching...' : 'Confirm & Request Staff'}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
