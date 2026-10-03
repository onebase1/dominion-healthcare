import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DualFunnel } from './components/DualFunnel';
import { ServicesSection } from './components/ServicesSection';
import { JobBoard } from './components/JobBoard';
import { EarningsCalculator } from './components/EarningsCalculator';
import { ComplianceHub } from './components/ComplianceHub';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StaffBookingModal } from './components/StaffBookingModal';
import { CandidateApplyModal } from './components/CandidateApplyModal';
import { EmergencyBanner } from './components/EmergencyBanner';
import type { JobOpening } from './types';

export function App() {
  const [isStaffBookingOpen, setIsStaffBookingOpen] = useState(false);
  const [isCandidateApplyOpen, setIsCandidateApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenStaffBooking = () => {
    setIsStaffBookingOpen(true);
  };

  const handleOpenCandidateApply = () => {
    setSelectedJob(null);
    setIsCandidateApplyOpen(true);
  };

  const handleApplyForSpecificJob = (job: JobOpening) => {
    setSelectedJob(job);
    setIsCandidateApplyOpen(true);
  };

  const handleExploreJobs = () => {
    handleNavigate('jobs');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Header */}
      <Header
        onRequestStaff={handleOpenStaffBooking}
        onJoinUs={handleOpenCandidateApply}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          onRequestStaff={handleOpenStaffBooking}
          onJoinUs={handleOpenCandidateApply}
          onExploreJobs={handleExploreJobs}
        />

        {/* Dual Funnel: Care Facilities vs Healthcare Workers */}
        <DualFunnel
          onRequestStaff={handleOpenStaffBooking}
          onJoinUs={handleOpenCandidateApply}
          onExploreJobs={handleExploreJobs}
        />

        {/* Services & Roles Overview */}
        <ServicesSection onRequestStaff={handleOpenStaffBooking} />

        {/* Interactive Live Vacancies Board */}
        <JobBoard
          onApplyForJob={handleApplyForSpecificJob}
          onGeneralRegister={handleOpenCandidateApply}
        />

        {/* Interactive Earnings & Staffing Rate Calculator */}
        <EarningsCalculator
          onJoinUs={handleOpenCandidateApply}
          onRequestStaff={handleOpenStaffBooking}
        />

        {/* 7-Point Compliance & Accredited Training Hub */}
        <ComplianceHub
          onRequestStaff={handleOpenStaffBooking}
          onJoinUs={handleOpenCandidateApply}
        />

        {/* Company Heritage & North East Roots */}
        <AboutSection />

        {/* Social Proof & Client Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact & Dispatch Desk */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestStaff={handleOpenStaffBooking}
        onJoinUs={handleOpenCandidateApply}
      />

      {/* Floating Emergency Shift Cover Pill */}
      <EmergencyBanner onRequestStaff={handleOpenStaffBooking} />

      {/* Modals */}
      <StaffBookingModal
        isOpen={isStaffBookingOpen}
        onClose={() => setIsStaffBookingOpen(false)}
      />

      <CandidateApplyModal
        isOpen={isCandidateApplyOpen}
        onClose={() => {
          setIsCandidateApplyOpen(false);
          setSelectedJob(null);
        }}
        selectedJob={selectedJob}
      />
    </div>
  );
}

export default App;
