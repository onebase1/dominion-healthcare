import { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, Clock, Building, ArrowRight, Share2, Check, Filter } from 'lucide-react';
import { FEATURED_JOBS } from '../data/mockData';
import type { JobOpening, JobCategory, JobLocation } from '../types';

interface JobBoardProps {
  onApplyForJob: (job: JobOpening) => void;
  onGeneralRegister: () => void;
}

export const JobBoard: React.FC<JobBoardProps> = ({ onApplyForJob, onGeneralRegister }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<JobCategory>('All');
  const [selectedLocation, setSelectedLocation] = useState<JobLocation>('All');
  const [copiedJobId, setCopiedJobId] = useState<string | null>(null);

  const categories: JobCategory[] = ['All', 'Registered Nurse', 'Healthcare Assistant', 'Support Worker'];
  const locations: JobLocation[] = [
    'All',
    'Stockton-on-Tees',
    'Middlesbrough',
    'Durham',
    'Newcastle',
    'Seaham',
    'Sunderland'
  ];

  const filteredJobs = useMemo(() => {
    return FEATURED_JOBS.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesLocation =
        selectedLocation === 'All' ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchTerm, selectedCategory, selectedLocation]);

  const handleShare = async (job: JobOpening) => {
    const shareUrl = `${window.location.origin}/#jobs?id=${job.id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${job.title} - Dominion Healthcare`,
          text: `Check out this ${job.title} vacancy (${job.payRate}) with Dominion Healthcare Services:`,
          url: shareUrl
        });
        return;
      } catch (err) {
        // User dismissed share dialog, fallback to clipboard
      }
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedJobId(job.id);
      setTimeout(() => setCopiedJobId(null), 2500);
    }
  };

  return (
    <section id="jobs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full inline-block mb-3">
              Dominion Careers & Vacancies
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Live Healthcare Shifts & Vacancies
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Browse latest shifts across Teesside, County Durham, and Tyne and Wear. Competitive rates, flexible hours, and weekly Friday pay.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onGeneralRegister}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              <span>Don't see your role? Send CV</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile-Optimized Filter Controls Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
            {/* Search Input (text-base prevents iOS auto-zoom) */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search job title, skill or keyword..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 p-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Location Select (native mobile wheel / picker) */}
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value as JobLocation)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-base sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden min-h-[48px]"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc === 'All' ? 'All Locations (North East & UK)' : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-500 py-1">
              <span className="font-medium">
                Showing <strong className="text-slate-900 font-bold">{filteredJobs.length}</strong> vacancies
              </span>
              {(searchTerm || selectedCategory !== 'All' || selectedLocation !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedLocation('All');
                  }}
                  className="text-emerald-700 hover:underline font-bold cursor-pointer py-1"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs (Smooth Horizontal Scroll for Mobile Fingers) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Role:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[42px] flex items-center shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredJobs.map(job => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative"
              >
                {/* Card Top Badges */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                        {job.category}
                      </span>
                      {job.urgent && (
                        <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[11px] font-bold border border-rose-200 animate-pulse">
                          Urgent Need
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleShare(job)}
                      title="Share job via WhatsApp or link"
                      className="p-2 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                      aria-label="Share Job"
                    >
                      {copiedJobId === job.id ? (
                        <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <Check className="w-4 h-4 text-emerald-600" /> Copied
                        </span>
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title & Pay Rate */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {job.title}
                  </h3>

                  <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-sm font-extrabold mb-4">
                    {job.payRate}
                  </div>

                  {/* Meta Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{job.facilityType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{job.shiftType}</span>
                    </div>
                  </div>

                  {/* Description Snippet */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Key Requirements */}
                  <div className="space-y-1 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Key Highlights:
                    </span>
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span className="line-clamp-1">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Weekly payroll • {job.postedDate}
                  </span>
                  <button
                    onClick={() => onApplyForJob(job)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    <span>Quick Apply for Shift</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto">
            <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No vacancies matching your search</h3>
            <p className="text-xs text-slate-600 mb-6">
              Try adjusting your role or location filter, or register your CV so our consultants can notify you as soon as new shifts drop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedLocation('All');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold cursor-pointer hover:bg-emerald-800 min-h-[44px]"
              >
                Reset Filters
              </button>
              <button
                onClick={onGeneralRegister}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-white cursor-pointer min-h-[44px]"
              >
                Register Your CV
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
