export type JobCategory = 'All' | 'Registered Nurse' | 'Healthcare Assistant' | 'Support Worker';
export type JobLocation = 'All' | 'Stockton-on-Tees' | 'Middlesbrough' | 'Durham' | 'Newcastle' | 'Seaham' | 'Sunderland';
export type ShiftPattern = 'All' | 'Flexible' | 'Full Time' | 'Part Time' | 'Night Shifts' | 'Day Shifts';

export interface JobOpening {
  id: string;
  title: string;
  category: 'Registered Nurse' | 'Healthcare Assistant' | 'Support Worker';
  location: string;
  facilityType: 'Care Home' | 'Nursing Home' | 'Residential Home' | 'Specialist Facility' | 'Supported Living' | 'Hospital';
  payRate: string;
  hourlyRateMin: number;
  hourlyRateMax: number;
  shiftType: 'Flexible' | 'Full Time' | 'Part Time';
  urgent: boolean;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface StaffBookingFormData {
  facilityName: string;
  facilityType: string;
  contactName: string;
  phone: string;
  email: string;
  postcode: string;
  staffType: string[];
  numberOfStaff: number;
  shiftTiming: 'Day Shift' | 'Night Shift' | 'Long Day (12h)' | 'Weekend' | 'Waking Night' | 'Custom';
  startDate: string;
  urgency: 'Emergency (< 2 Hours)' | 'Urgent (Within 24 Hours)' | 'Planned Rota / Block Cover';
  specialRequirements: string;
}

export interface CandidateApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  roleApplyingFor: 'Registered Nurse (RGN)' | 'Mental Health Nurse (RMN)' | 'Healthcare Assistant (HCA)' | 'Support Worker';
  experienceYears: string;
  hasEnhancedDBS: boolean;
  nmcPin?: string;
  driverLicense: boolean;
  availability: 'Immediate' | '1-2 Weeks' | '1 Month' | 'Weekends / Part-time';
  notes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: 'Facility Staffing' | 'Candidate Recruitment' | 'Training Courses' | 'General Query';
  message: string;
}
