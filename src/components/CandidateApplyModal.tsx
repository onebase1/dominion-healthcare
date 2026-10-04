import { useState, useEffect, useRef } from 'react';
import { X, UserPlus, Upload, ShieldCheck, CheckCircle2, Phone, FileText, Camera, Trash2, Check } from 'lucide-react';
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

  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string; type: string } | null>(null);
  const [secondaryFile, setSecondaryFile] = useState<{ name: string; size: string; type: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const docInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const certInputRef = useRef<HTMLInputElement>(null);

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

  // Lock body scroll when modal is open on mobile
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

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>, isCert = false) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileInfo = {
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type || 'Document'
      };
      if (isCert) {
        setSecondaryFile(fileInfo);
      } else {
        setUploadedFile(fileInfo);
      }
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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setUploadedFile(null);
    setSecondaryFile(null);
    onClose();
  };

  const isNurseRole = formData.roleApplyingFor.includes('Nurse');

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/75 backdrop-blur-xs flex items-end sm:items-center justify-center sm:p-4 animate-in fade-in duration-200">
      {/* Modal / Bottom Sheet Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[94vh] sm:h-auto sm:max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-6 sm:slide-in-from-bottom-2 duration-300">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-5 sm:p-6 relative shrink-0">
          {/* Mobile Drag Indicator Pill */}
          <div className="w-12 h-1.5 bg-white/40 rounded-full mx-auto mb-3 sm:hidden"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full text-emerald-100 hover:text-white hover:bg-emerald-600/50 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 flex-wrap pr-8">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <UserPlus className="w-3.5 h-3.5" /> Staff Registration Portal
            </span>
            {selectedJob && (
              <span className="px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-200 text-xs font-medium">
                Vac: {selectedJob.id}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            {selectedJob ? `Apply: ${selectedJob.title}` : 'Join the Dominion Healthcare Agency Roster'}
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 leading-snug">
            Fast mobile application. Weekly Friday payroll, top North East hourly rates, and free certified training.
          </p>
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
                  Registration Successful
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">
                  Welcome to Dominion Healthcare!
                </h4>
                <p className="text-xs font-mono text-slate-500">
                  Application ID: <strong className="text-slate-800">{applicationId}</strong>
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs text-slate-700 space-y-2.5 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Candidate Name:</span>
                  <span className="font-bold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Role Applied:</span>
                  <span className="font-bold text-slate-900">{formData.roleApplyingFor}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-bold text-slate-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Availability:</span>
                  <span className="font-bold text-slate-900">{formData.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Document Uploaded:</span>
                  <span className="font-semibold text-emerald-700">
                    {uploadedFile ? uploadedFile.name : 'Application Profile Submitted'}
                  </span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 flex items-start gap-3 max-w-lg mx-auto">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed text-left">
                  Our Stockton recruitment team will contact you by telephone / WhatsApp within <strong>24 business hours</strong> to fast-track your compliance file, confirm your shift preferences, and book your free practical training modules.
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
              id="candidate-apply-form"
              onSubmit={handleSubmit}
              name="candidate-registration"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="candidate-registration" />

              {/* Mobile Fast-Track Tip */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-emerald-900">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Mobile Fast Apply:</strong> You can apply in under 2 minutes. CV upload is optional—you can also take a photo of your certificate or credentials right from your phone.
                </span>
              </div>

              {/* Personal Details (Mobile Keyboards: tel, email, name) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    autoCapitalize="words"
                    placeholder="e.g. Sarah Thompson"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. 07700 900000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    placeholder="e.g. sarah.t@example.co.uk"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Town or Postcode (North East / UK) *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="postal-code"
                    autoCapitalize="characters"
                    placeholder="e.g. Stockton / TS18"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px] bg-white"
                  />
                </div>
              </div>

              {/* Role Selection & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Clinical Role *
                  </label>
                  <select
                    value={formData.roleApplyingFor}
                    onChange={e => setFormData({ ...formData, roleApplyingFor: e.target.value as any })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white min-h-[48px]"
                  >
                    <option value="Registered Nurse (RGN)">Registered General Nurse (RGN)</option>
                    <option value="Mental Health Nurse (RMN)">Registered Mental Health Nurse (RMN)</option>
                    <option value="Healthcare Assistant (HCA)">Healthcare Assistant (HCA)</option>
                    <option value="Support Worker">Specialist Support Worker</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    UK Healthcare Experience *
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white min-h-[48px]"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    NMC PIN Number *
                  </label>
                  <input
                    type="text"
                    required
                    autoCapitalize="characters"
                    autoCorrect="off"
                    placeholder="e.g. 12A3456E"
                    value={formData.nmcPin}
                    onChange={e => setFormData({ ...formData, nmcPin: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden uppercase min-h-[48px] bg-white font-mono"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    We verify active NMC registration in real-time.
                  </span>
                </div>
              )}

              {/* Compliance & Availability Questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Earliest Availability *
                  </label>
                  <select
                    value={formData.availability}
                    onChange={e => setFormData({ ...formData, availability: e.target.value as any })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white min-h-[48px]"
                  >
                    <option value="Immediate">Immediate / Available Now</option>
                    <option value="1-2 Weeks">Within 1–2 Weeks</option>
                    <option value="1 Month">1 Month Notice</option>
                    <option value="Weekends / Part-time">Weekends & Part-time Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enhanced DBS Status *
                  </label>
                  <select
                    value={formData.hasEnhancedDBS ? 'yes' : 'no'}
                    onChange={e => setFormData({ ...formData, hasEnhancedDBS: e.target.value === 'yes' })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white min-h-[48px]"
                  >
                    <option value="yes">Yes - Enhanced DBS on Update Service</option>
                    <option value="no">No / Need assistance applying for new DBS</option>
                  </select>
                </div>
              </div>

              {/* Mobile-Optimised Document & CV Upload Zone */}
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Upload CV / Qualifications (Optional)
                  </label>
                  <span className="text-[11px] text-emerald-700 font-medium">Phone & camera supported</span>
                </div>

                {/* Hidden Inputs */}
                <input
                  type="file"
                  ref={docInputRef}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={e => handleFileSelection(e, false)}
                  className="hidden"
                />
                <input
                  type="file"
                  ref={cameraInputRef}
                  accept="image/*"
                  capture="environment"
                  onChange={e => handleFileSelection(e, false)}
                  className="hidden"
                />
                <input
                  type="file"
                  ref={certInputRef}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={e => handleFileSelection(e, true)}
                  className="hidden"
                />

                {uploadedFile ? (
                  /* Uploaded File Pill */
                  <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {uploadedFile.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {uploadedFile.size} • Ready for recruitment review
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setUploadedFile(null)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Dual Upload Triggers: Document or Phone Camera */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => docInputRef.current?.click()}
                      className="p-3.5 rounded-xl border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50/70 hover:bg-emerald-50/30 flex items-center justify-center gap-2.5 transition-all text-left cursor-pointer min-h-[52px]"
                    >
                      <Upload className="w-5 h-5 text-emerald-700 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Choose Document</span>
                        <span className="text-[10px] text-slate-500 block">PDF, DOC, DOCX or Image</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => cameraInputRef.current?.click()}
                      className="p-3.5 rounded-xl border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50/70 hover:bg-emerald-50/30 flex items-center justify-center gap-2.5 transition-all text-left cursor-pointer min-h-[52px]"
                    >
                      <Camera className="w-5 h-5 text-teal-700 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Snap with Camera</span>
                        <span className="text-[10px] text-slate-500 block">Photo of CV / Certificates</span>
                      </div>
                    </button>
                  </div>
                )}

                {/* Secondary Certificate upload trigger if primary file added */}
                {uploadedFile && !secondaryFile && (
                  <button
                    type="button"
                    onClick={() => certInputRef.current?.click()}
                    className="mt-2 text-xs text-emerald-700 hover:underline font-semibold flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>+ Attach DBS or training certificate photo</span>
                  </button>
                )}

                {secondaryFile && (
                  <div className="mt-2 bg-slate-100 border border-slate-300 rounded-xl p-2.5 flex items-center justify-between gap-2">
                    <span className="text-xs text-slate-700 truncate">
                      Attached: <strong>{secondaryFile.name}</strong> ({secondaryFile.size})
                    </span>
                    <button
                      type="button"
                      onClick={() => setSecondaryFile(null)}
                      className="text-slate-400 hover:text-rose-600 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Shift Pattern & Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Looking for night shifts in Stockton or Middlesbrough. Own transport."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                ></textarea>
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
                <span>Confidential registration under UK GDPR</span>
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
                  form="candidate-apply-form"
                  disabled={isSubmitting}
                  className="flex-2 sm:flex-initial px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-700/30 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
