import { useState, useEffect } from 'react';
import { X, UserPlus, Upload, ShieldCheck, CheckCircle2, Phone, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { JobOpening, CandidateApplicationFormData } from '../types';

interface CandidateApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob?: JobOpening | null;
}

export const CandidateApplyModal: React.FC<CandidateApplyModalProps> = ({
  isOpen,
  onClose,
  selectedJob
}) => {
  const [formData, setFormData] = useState<CandidateApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    roleApplyingFor: 'Registered Nurse (RGN)',
    experienceYears: '1-3 years',
    hasEnhancedDBS: true,
    nmcPin: '',
    driverLicense: false,
    availability: 'Immediate',
    notes: ''
  });

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  useEffect(() => {
    if (selectedJob) {
      if (selectedJob.category === 'Registered Nurse') {
        setFormData(prev => ({ ...prev, roleApplyingFor: 'Registered Nurse (RGN)' }));
      } else if (selectedJob.category === 'Healthcare Assistant') {
        setFormData(prev => ({ ...prev, roleApplyingFor: 'Healthcare Assistant (HCA)' }));
      } else {
        setFormData(prev => ({ ...prev, roleApplyingFor: 'Support Worker' }));
      }
    }
  }, [selectedJob]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationId(generatedId);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setUploadedFileName(null);
    onClose();
  };

  const isNurseRole = formData.roleApplyingFor.includes('Nurse');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-600/50 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <UserPlus className="w-3.5 h-3.5" /> Healthcare Candidate Registration
            </span>
            {selectedJob && (
              <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200 text-xs font-medium">
                Ref: {selectedJob.id}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {selectedJob ? `Apply for ${selectedJob.title}` : 'Join the Dominion Healthcare Agency Roster'}
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Enjoy top North East hourly rates, weekly Friday payroll, flexible shifts, and free mandatory training.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Registration Successful
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">
                  Welcome to Dominion Healthcare!
                </h4>
                <p className="text-xs font-mono text-slate-500">
                  Application ID: <strong className="text-slate-800">{applicationId}</strong>
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Candidate Name:</span>
                  <span className="font-bold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Target Role:</span>
                  <span className="font-bold text-slate-900">{formData.roleApplyingFor}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Availability:</span>
                  <span className="font-bold text-slate-900">{formData.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Uploaded CV:</span>
                  <span className="font-semibold text-emerald-700">{uploadedFileName || 'Details Submitted Online'}</span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 flex items-start gap-3 max-w-lg mx-auto">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed text-left">
                  Our Stockton recruitment coordinator will contact you by telephone within <strong>24 business hours</strong> to fast-track your onboarding, confirm your shift preferences, and register you for free mandatory training modules.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="candidate-registration"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="candidate-registration" />

              {/* Position Header if from job */}
              {selectedJob && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-blue-600 font-semibold">Applying For: </span>
                    <span className="font-bold text-slate-800">{selectedJob.title} ({selectedJob.location})</span>
                  </div>
                  <span className="font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                    {selectedJob.payRate}
                  </span>
                </div>
              )}

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07700 900000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
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
                    placeholder="e.g. eleanor.vance@example.co.uk"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Current Location / Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Middlesbrough, TS1"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Role Selection & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Primary Role *
                  </label>
                  <select
                    value={formData.roleApplyingFor}
                    onChange={e => setFormData({ ...formData, roleApplyingFor: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
                  >
                    <option value="Registered Nurse (RGN)">Registered General Nurse (RGN)</option>
                    <option value="Mental Health Nurse (RMN)">Registered Mental Health Nurse (RMN)</option>
                    <option value="Healthcare Assistant (HCA)">Healthcare Assistant (HCA)</option>
                    <option value="Support Worker">Specialist Support Worker</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    UK Healthcare Experience *
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
                  >
                    <option value="Under 6 months">Under 6 months</option>
                    <option value="6 - 12 months">6 – 12 months</option>
                    <option value="1 - 3 years">1 – 3 years</option>
                    <option value="3 - 5 years">3 – 5 years</option>
                    <option value="5+ years">5+ years senior experience</option>
                  </select>
                </div>
              </div>

              {/* Conditional Nurse NMC Pin */}
              {isNurseRole && (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    NMC PIN Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 12A3456E"
                    value={formData.nmcPin}
                    onChange={e => setFormData({ ...formData, nmcPin: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden uppercase"
                  />
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    We verify all pins directly on the Nursing & Midwifery Council register.
                  </span>
                </div>
              )}

              {/* Compliance & Availability Questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Earliest Availability *
                  </label>
                  <select
                    value={formData.availability}
                    onChange={e => setFormData({ ...formData, availability: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
                  >
                    <option value="Immediate">Immediate / Available Now</option>
                    <option value="1-2 Weeks">Within 1–2 Weeks</option>
                    <option value="1 Month">1 Month Notice</option>
                    <option value="Weekends / Part-time">Weekends & Part-time Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Enhanced DBS Status *
                  </label>
                  <select
                    value={formData.hasEnhancedDBS ? 'yes' : 'no'}
                    onChange={e => setFormData({ ...formData, hasEnhancedDBS: e.target.value === 'yes' })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
                  >
                    <option value="yes">Yes - I have an Enhanced DBS on Update Service</option>
                    <option value="no">No / Need assistance applying for a new DBS</option>
                  </select>
                </div>
              </div>

              {/* CV Upload Box */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Upload CV / Resume (Optional, you can also register without it)
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50/50">
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer block">
                    <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                    {uploadedFileName ? (
                      <span className="text-xs font-semibold text-emerald-700 flex items-center justify-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> {uploadedFileName}
                      </span>
                    ) : (
                      <>
                        <span className="text-xs font-semibold text-slate-700">Click to upload your CV</span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">PDF, DOC, or DOCX (max 10MB)</span>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Preferred Shift Patterns or Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Prefer night shifts in Durham or Newcastle; driver with own car."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strictly confidential under UK GDPR</span>
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
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>{isSubmitting ? 'Registering...' : 'Submit Application'}</span>
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
