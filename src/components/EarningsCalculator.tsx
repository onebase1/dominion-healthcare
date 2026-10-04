import { useState } from 'react';
import { Wallet, Building, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface EarningsCalculatorProps {
  onJoinUs: () => void;
  onRequestStaff: () => void;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({ onJoinUs, onRequestStaff }) => {
  const [calculatorMode, setCalculatorMode] = useState<'candidate' | 'facility'>('candidate');

  // Candidate state
  const [role, setRole] = useState<'rgn' | 'rmn' | 'shca' | 'hca' | 'support'>('rgn');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(36);
  const [shiftUplift, setShiftUplift] = useState<'day' | 'night' | 'weekend'>('day');

  // Facility state
  const [facilityRole, setFacilityRole] = useState<'rgn' | 'hca' | 'support'>('rgn');
  const [shiftsPerWeek, setShiftsPerWeek] = useState<number>(4);
  const [facilityShiftType, setFacilityShiftType] = useState<'day' | 'night'>('day');

  const baseRates = {
    rgn: { title: 'Registered General Nurse (RGN)', baseRate: 26.50, clientRate: 32.50 },
    rmn: { title: 'Mental Health Nurse (RMN)', baseRate: 28.00, clientRate: 34.50 },
    shca: { title: 'Senior Healthcare Assistant', baseRate: 14.50, clientRate: 18.50 },
    hca: { title: 'Healthcare Assistant (HCA)', baseRate: 13.00, clientRate: 16.50 },
    support: { title: 'Specialist Support Worker', baseRate: 13.50, clientRate: 17.00 },
  };

  const getEffectiveRate = () => {
    let rate = baseRates[role].baseRate;
    if (shiftUplift === 'night') rate *= 1.15;
    if (shiftUplift === 'weekend') rate *= 1.25;
    return rate;
  };

  const weeklyCandidateEarnings = getEffectiveRate() * hoursPerWeek;
  const monthlyCandidateEarnings = weeklyCandidateEarnings * 4.33;

  // Facility calculations (12 hour shifts)
  const getFacilityRate = () => {
    let rate = baseRates[facilityRole].clientRate;
    if (facilityShiftType === 'night') rate *= 1.12;
    return rate;
  };

  const weeklyFacilityCost = getFacilityRate() * (shiftsPerWeek * 12);
  const monthlyFacilityCost = weeklyFacilityCost * 4.33;

  return (
    <section id="calculator" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full inline-block mb-3">
            Interactive Rate & Pay Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing & Rewarding Pay
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No hidden clauses. Calculate your weekly agency take-home as a healthcare worker, or preview transparent cover costs for your care facility.
          </p>

          {/* Toggle between Candidate and Facility */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-200 border border-slate-300 shadow-inner">
            <button
              onClick={() => setCalculatorMode('candidate')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                calculatorMode === 'candidate'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wallet className="w-4 h-4 text-emerald-600" />
              <span>For Nurses & Carers (Earnings)</span>
            </button>
            <button
              onClick={() => setCalculatorMode('facility')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                calculatorMode === 'facility'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4 text-emerald-800" />
              <span>For Facilities (Staffing Rates)</span>
            </button>
          </div>
        </div>

        {/* Calculator Main Box */}
        {calculatorMode === 'candidate' ? (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Input Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Your Clinical Role
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(Object.keys(baseRates) as (keyof typeof baseRates)[]).map(key => (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setRole(key)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                        role === key
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="truncate">{baseRates[key].title}</div>
                      <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                        Base from £{baseRates[key].baseRate.toFixed(2)}/hr
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Hours Worked Per Week
                  </label>
                  <span className="text-sm font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {hoursPerWeek} Hours / week
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="60"
                  step="4"
                  value={hoursPerWeek}
                  onChange={e => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>Part-Time (12h)</span>
                  <span>Standard (36h)</span>
                  <span>Full Overtime (60h)</span>
                </div>
              </div>

              {/* Shift Uplift Buttons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Predominant Shift Pattern
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setShiftUplift('day')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      shiftUplift === 'day'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Day Shifts
                  </button>
                  <button
                    type="button"
                    onClick={() => setShiftUplift('night')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      shiftUplift === 'night'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Nights (+15%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setShiftUplift('weekend')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      shiftUplift === 'weekend'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Weekends (+25%)
                  </button>
                </div>
              </div>
            </div>

            {/* Output Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-6 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6">
                  <Sparkles className="w-3.5 h-3.5" /> Fast Weekly Friday Payroll
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Estimated Hourly Average</span>
                    <div className="text-2xl font-extrabold text-emerald-300">
                      £{getEffectiveRate().toFixed(2)} <span className="text-xs text-slate-400 font-normal">/ hour</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                    <span className="text-xs text-slate-400 font-medium block mb-1">Estimated Weekly Pay</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">
                      £{Math.round(weeklyCandidateEarnings).toLocaleString('en-GB')}
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium mt-1 block">
                      Paid directly to your bank account every Friday
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-medium">Estimated Monthly Potential</span>
                    <div className="text-xl font-bold text-slate-200">
                      £{Math.round(monthlyCandidateEarnings).toLocaleString('en-GB')} <span className="text-xs text-slate-400 font-normal">/ month</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Free mandatory & clinical training included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full freedom to set your weekly shift rota</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Free uniforms & 24/7 on-call coordinator support</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onJoinUs}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register to Earn This Rate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Facility Inputs */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Staffing Category Required
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'rgn', title: 'Registered Nurse (RGN/RMN)' },
                    { key: 'hca', title: 'Healthcare Assistant' },
                    { key: 'support', title: 'Support Worker' }
                  ].map(item => (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() => setFacilityRole(item.key as any)}
                      className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        facilityRole === item.key
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Shifts Required Per Week (12-Hour Shifts)
                  </label>
                  <span className="text-sm font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {shiftsPerWeek} shifts ({shiftsPerWeek * 12} hrs)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="14"
                  step="1"
                  value={shiftsPerWeek}
                  onChange={e => setShiftsPerWeek(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>Single Shift (1)</span>
                  <span>Part Coverage (7)</span>
                  <span>Full Department (14)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Shift Timing
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFacilityShiftType('day')}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      facilityShiftType === 'day'
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Day Shift (08:00 – 20:00)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFacilityShiftType('night')}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      facilityShiftType === 'night'
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Night Shift (20:00 – 08:00)
                  </button>
                </div>
              </div>
            </div>

            {/* Facility Outputs */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-6 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6">
                  <Building className="w-3.5 h-3.5" /> CQC-Compliant Shift Pricing
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">All-Inclusive Agency Hourly Rate</span>
                    <div className="text-2xl font-extrabold text-emerald-300">
                      £{getFacilityRate().toFixed(2)} <span className="text-xs text-slate-400 font-normal">/ hour</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                    <span className="text-xs text-slate-400 font-medium block mb-1">Estimated Weekly Investment</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">
                      £{Math.round(weeklyFacilityCost).toLocaleString('en-GB')}
                    </div>
                    <span className="text-[11px] text-emerald-300 font-medium mt-1 block">
                      Includes NI, holiday pay, compliance checks & insurance
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-medium">Monthly Budget Estimate</span>
                    <div className="text-xl font-bold text-slate-200">
                      £{Math.round(monthlyFacilityCost).toLocaleString('en-GB')} <span className="text-xs text-slate-400 font-normal">/ month</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No upfront retainer or hidden administrative charges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Volume discounts available on block rota contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full digital compliance pack sent prior to shift start</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onRequestStaff}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Shifts at These Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
