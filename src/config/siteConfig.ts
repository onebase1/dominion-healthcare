/**
 * Dominion Healthcare Services Ltd — Central Site Configuration
 * 
 * Update contact details, 24/7 on-call dispatch numbers, office locations,
 * and company metadata in this SINGLE file. All components throughout the
 * site inherit from this single source of truth.
 */

export const SITE_CONFIG = {
  // Brand Names
  companyName: 'Dominion Healthcare Services Ltd',
  shortName: 'Dominion Healthcare',
  acronym: 'DHCS',
  tagline: 'UK Healthcare Employment & Temporary Staffing Agency',

  // 24/7 On-Call Coordinator & Contact Numbers
  // EDIT HERE WHEN THE PHONE NUMBER CHANGES:
  contact: {
    phone: '01642 345242',
    phoneClean: '01642345242',
    phoneFormatted: '01642 345242',
    phoneLabel: '24/7 On-Call Dispatch Desk',
    
    // Obfuscated Email (Protected against bot harvesters)
    emailUser: 'info',
    emailDomain: 'dhcservicesltd.co.uk',
    get email(): string {
      return `${this.emailUser}@${this.emailDomain}`;
    },

    // Headquarters & Registration
    address: '219 Stockton Business Centre, Stockton-on-Tees, TS18 1DW',
    postcode: 'TS18 1DW',
    region: 'North East England & Nationwide',
    registrationInfo: 'Registered in England & Wales • 219 Stockton Business Centre, TS18 1DW • UK Employment Agency',
  },

  // Hours & Availability
  availability: {
    desk: '24 Hours a Day, 365 Days a Year',
    responseTime: '< 60 Minutes Emergency Dispatch',
    payrollDay: 'Every Friday (Direct Bank Transfer)',
  },

  // Standard Agency Rates Guidance (GBP)
  rates: {
    rgnMin: 20.00,
    rgnMax: 38.00,
    hcaMin: 12.00,
    hcaMax: 16.50,
    supportMin: 12.00,
    supportMax: 15.50,
  }
} as const;

export type SiteConfig = typeof SITE_CONFIG;
