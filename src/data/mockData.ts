import type { JobOpening } from '../types';

export const COMPANY_DETAILS = {
  name: 'Dominion Healthcare Services Ltd',
  shortName: 'Dominion Healthcare',
  tagline: 'Premier UK Healthcare Recruitment & Temporary Staffing Specialists',
  subtagline: 'Supplying compliant, compassionate Registered Nurses, HCAs, and Support Workers to Care Homes, NHS Trusts, and Hospitals 24/7/365.',
  address: '219, Stockton Business Centre, Stockton-on-Tees, TS18 1DW, United Kingdom',
  phone: '01642 345242',
  phoneClean: '01642345242',
  emergencyPhone: '01642 345242',
  email: 'info@dhcservicesltd.co.uk',
  operatingHours: '24 Hours a Day / 7 Days a Week (365 Days/Year)',
  stats: [
    { label: 'Completed Shifts', value: '70,000+', suffix: 'shifts' },
    { label: 'Healthcare Partners', value: '120+', suffix: 'facilities' },
    { label: 'Active Healthcare Staff', value: '500+', suffix: 'professionals' },
    { label: 'Annual Care Hours', value: '24,000+', suffix: 'hours/yr' },
    { label: 'Years of Experience', value: '10+', suffix: 'years' },
    { label: 'Fast Response Rate', value: '< 60 mins', suffix: 'avg emergency dispatch' },
  ],
  serviceAreas: [
    'Stockton-on-Tees',
    'Middlesbrough',
    'County Durham',
    'Newcastle upon Tyne',
    'Sunderland',
    'Gateshead',
    'Darlington',
    'Hartlepool',
    'Seaham',
    'Nationwide UK Coverage'
  ],
};

export const FEATURED_JOBS: JobOpening[] = [
  {
    id: 'dhc-1374',
    title: 'Registered General Nurse (RGN)',
    category: 'Registered Nurse',
    location: 'Seaham',
    facilityType: 'Residential Home',
    payRate: '£22.00 – £36.00 / hour',
    hourlyRateMin: 22.00,
    hourlyRateMax: 36.00,
    shiftType: 'Flexible',
    urgent: true,
    postedDate: 'Recently Posted',
    description: 'We are seeking compassionate and experienced Registered General Nurses (RGN) to provide high-quality nursing care within residential and nursing facilities in Seaham. Flexible day, night, and weekend shifts available.',
    requirements: [
      'Active NMC PIN with no restrictions',
      'Minimum 6 months relevant UK nursing home or hospital experience',
      'Up-to-date Mandatory Training (or complete free via Dominion)',
      'Clear Enhanced DBS check (Update Service preferred)',
      'Proof of Right to Work in the UK'
    ],
    responsibilities: [
      'Assess, plan, and administer clinical nursing care',
      'Accurate medication administration and clinical documentation',
      'Liaise with multidisciplinary teams, GPs, and families',
      'Oversee and support healthcare assistants on shift'
    ]
  },
  {
    id: 'dhc-1372',
    title: 'Registered Nurse (RGN / RMN)',
    category: 'Registered Nurse',
    location: 'Newcastle',
    facilityType: 'Care Home',
    payRate: '£22.50 – £37.00 / hour',
    hourlyRateMin: 22.50,
    hourlyRateMax: 37.00,
    shiftType: 'Flexible',
    urgent: true,
    postedDate: 'Recently Posted',
    description: 'Exciting opportunities for Registered Nurses (RGN or RMN) in leading Newcastle care facilities. Fast weekly payroll, choose your own shift pattern, and receive continuous CPD training.',
    requirements: [
      'Valid NMC PIN (Registered Adult or Mental Health Nurse)',
      'Reliable, punctual, with strong patient advocacy skills',
      'Experience in elder care, dementia, or rehabilitation settings',
      'Enhanced DBS certificate on update service'
    ],
    responsibilities: [
      'Lead clinical shifts ensuring patient dignity and safety',
      'Manage complex wound dressings, catheter care, and PEG feeds',
      'Safeguarding vulnerable residents and reporting escalations promptly'
    ]
  },
  {
    id: 'dhc-1370',
    title: 'Registered Mental Health Nurse (RMN)',
    category: 'Registered Nurse',
    location: 'Middlesbrough',
    facilityType: 'Specialist Facility',
    payRate: '£23.00 – £38.00 / hour',
    hourlyRateMin: 23.00,
    hourlyRateMax: 38.00,
    shiftType: 'Flexible',
    urgent: true,
    postedDate: '1 day ago',
    description: 'Urgent temporary coverage needed for skilled RMNs supporting adults with acute mental health needs and cognitive impairments across specialist residential units in Middlesbrough.',
    requirements: [
      'NMC Registration as Mental Health Nurse (RMN)',
      'De-escalation and PMVA / Physical Intervention training',
      'Strong clinical assessment and risk management skills',
      'Commitment to person-centred recovery care'
    ],
    responsibilities: [
      'Provide therapeutic care and support during acute mental health episodes',
      'Collaborate with psychiatrists, social workers, and care teams',
      'Supervise observation levels and medication regimes'
    ]
  },
  {
    id: 'dhc-1368',
    title: 'Registered Nurse – Day & Night Rotas',
    category: 'Registered Nurse',
    location: 'Durham',
    facilityType: 'Nursing Home',
    payRate: '£22.00 – £35.50 / hour',
    hourlyRateMin: 22.00,
    hourlyRateMax: 35.50,
    shiftType: 'Flexible',
    urgent: false,
    postedDate: '2 days ago',
    description: 'Join Dominion’s premier nursing roster in Durham. We offer generous weekend and night uplifts, block booking options, and round-the-clock clinical coordinator support.',
    requirements: [
      'NMC PIN in good standing',
      'Right to work in the UK without sponsorship restrictions',
      'Two professional clinical references'
    ],
    responsibilities: [
      'Administer controlled drugs according to NMC guidelines',
      'Conduct holistic nursing assessments and evaluate care plans',
      'Maintain exemplary hygiene and infection control standards'
    ]
  },
  {
    id: 'dhc-1342',
    title: 'Healthcare Assistant (HCA)',
    category: 'Healthcare Assistant',
    location: 'Durham',
    facilityType: 'Nursing Home',
    payRate: '£12.00 – £15.00 / hour',
    hourlyRateMin: 12.00,
    hourlyRateMax: 15.00,
    shiftType: 'Flexible',
    urgent: true,
    postedDate: 'Recently Posted',
    description: 'Passionate Healthcare Assistants wanted for high-rated nursing and care homes in Durham. Shifts fit around your life: early, late, long days, or waking nights.',
    requirements: [
      'Minimum 3-6 months paid care experience in the UK',
      'Compassionate, respectful, and reliable demeanor',
      'Care Certificate or NVQ/QCF Level 2/3 in Health & Social Care advantageous',
      'Enhanced DBS check'
    ],
    responsibilities: [
      'Assist residents with personal hygiene, dressing, and mobility',
      'Provide mealtime assistance and monitor nutritional intake',
      'Promote resident independence, dignity, and comfort'
    ]
  },
  {
    id: 'dhc-1340',
    title: 'Support Worker (Learning Disabilities & Autism)',
    category: 'Support Worker',
    location: 'Middlesbrough',
    facilityType: 'Supported Living',
    payRate: '£12.50 – £15.50 / hour',
    hourlyRateMin: 12.50,
    hourlyRateMax: 15.50,
    shiftType: 'Flexible',
    urgent: false,
    postedDate: '3 days ago',
    description: 'Empower adults with learning disabilities and autism to live independently in supported living environments across Middlesbrough. Rewarding role with ongoing specialist training provided.',
    requirements: [
      'Experience in supported living or social care environments',
      'Patient, active listener with proactive communication',
      'Willingness to undertake physical intervention & safeguarding refresher courses',
      'Full driving license preferred but not essential'
    ],
    responsibilities: [
      'Support service users with daily living skills, budgeting, and social activities',
      'Implement positive behaviour support (PBS) plans',
      'Encourage community participation and personal autonomy'
    ]
  },
  {
    id: 'dhc-1338',
    title: 'Support Worker (Mental Health & Complex Needs)',
    category: 'Support Worker',
    location: 'Newcastle',
    facilityType: 'Residential Home',
    payRate: '£12.50 – £15.50 / hour',
    hourlyRateMin: 12.50,
    hourlyRateMax: 15.50,
    shiftType: 'Flexible',
    urgent: true,
    postedDate: 'Recently Posted',
    description: 'Dedicated Support Workers required for specialist supported accommodation in Newcastle. You will be helping residents rebuild confidence and daily living routines.',
    requirements: [
      'Experience supporting individuals with mental health conditions or brain injuries',
      'Calm under pressure with de-escalation skills',
      'Clean DBS and solid work history'
    ],
    responsibilities: [
      'Deliver person-centred emotional and practical support',
      'Assist with medication prompts and daily appointments',
      'Accurate daily log reporting and handover notes'
    ]
  },
  {
    id: 'dhc-1335',
    title: 'Senior Healthcare Assistant (SHCA)',
    category: 'Healthcare Assistant',
    location: 'Stockton-on-Tees',
    facilityType: 'Residential Home',
    payRate: '£13.50 – £16.50 / hour',
    hourlyRateMin: 13.50,
    hourlyRateMax: 16.50,
    shiftType: 'Full Time',
    urgent: true,
    postedDate: 'Recently Posted',
    description: 'Senior HCA needed to assist with shift coordination, medication administration, and care plan updates in Stockton-on-Tees. Excellent pathway to nursing or management.',
    requirements: [
      'NVQ / Diploma Level 3 in Health and Social Care',
      'Medication administration certificate and verified competency',
      'At least 1 year in a senior or supervisory care role'
    ],
    responsibilities: [
      'Safely dispense prescribed medications according to MAR charts',
      'Coordinate and support a team of care assistants during shift',
      'Liaise with visiting clinicians, families, and emergency services'
    ]
  },
  {
    id: 'dhc-496',
    title: 'Frontline Healthcare Assistant – Urgent Cover',
    category: 'Healthcare Assistant',
    location: 'Middlesbrough',
    facilityType: 'Care Home',
    payRate: '£12.00 – £15.00 / hour',
    hourlyRateMin: 12.00,
    hourlyRateMax: 15.00,
    shiftType: 'Full Time',
    urgent: false,
    postedDate: '4 days ago',
    description: 'Join our rapid response care team covering planned rotas and last-minute shift vacancies in modern residential homes across Teesside.',
    requirements: [
      'Previous healthcare or care home experience',
      'Good English communication skills (written and spoken)',
      'Reliable with enthusiasm for elderly care'
    ],
    responsibilities: [
      'Provide essential personal care with warmth and dignity',
      'Safely operate hoists and mobility aids (training refreshed free)',
      'Record food, fluid, and vital observations accurately'
    ]
  },
  {
    id: 'dhc-495',
    title: 'Support Worker – Frontline Care Delivery',
    category: 'Support Worker',
    location: 'Durham',
    facilityType: 'Supported Living',
    payRate: '£12.00 – £14.80 / hour',
    hourlyRateMin: 12.00,
    hourlyRateMax: 14.80,
    shiftType: 'Flexible',
    urgent: false,
    postedDate: '5 days ago',
    description: 'Work with individuals requiring specialist assistance in residential and community settings throughout County Durham. Flexible hours, free uniforms, and weekly payslips.',
    requirements: [
      'Passionate about helping vulnerable adults thrive',
      'Empathy, patience, and clear boundary-setting',
      'Enhanced DBS check'
    ],
    responsibilities: [
      'Help service users achieve their personal goals and hobbies',
      'Maintain clean, safe, and welcoming living spaces',
      'Participate in team handovers and care reviews'
    ]
  }
];

export const SERVICES = [
  {
    id: 'registered-nurses',
    title: 'Registered Nurses (RGN & RMN)',
    subtitle: 'Clinical Excellence & Safe Patient Care',
    description: 'Fully qualified, NMC-registered nurses ready for immediate deployment in care homes, private hospitals, hospice, and rehabilitation centers.',
    skills: [
      'Medication administration & IV therapy',
      'Complex wound care & pressure ulcer management',
      'PEG feeding & syringe driver monitoring',
      'Catheter care & stoma management',
      'End-of-life / Palliative care',
      'Clinical leadership & shift management'
    ],
    suitableFor: 'Nursing homes, rehabilitation hospitals, complex care units, hospice, NHS & private wards.',
    badge: 'Clinical Grade',
    icon: 'Stethoscope'
  },
  {
    id: 'healthcare-assistants',
    title: 'Healthcare Assistants (HCA)',
    subtitle: 'Compassionate Dignified Daily Care',
    description: 'Experienced, trained HCAs providing personalized daily living assistance, personal care, and emotional companionship with warmth and dignity.',
    skills: [
      'Personal care & hygiene support',
      'Safe moving & handling with hoists & slide sheets',
      'Hydration & nutrition monitoring (fluid charts)',
      'Dementia & Alzheimer’s care support',
      'Observation taking (blood pressure, temperature, pulse)',
      'Falls prevention & resident comfort'
    ],
    suitableFor: 'Residential care homes, nursing homes, dementia units, day care centres.',
    badge: 'Frontline Care',
    icon: 'HeartHandshake'
  },
  {
    id: 'support-workers',
    title: 'Specialist Support Workers',
    subtitle: 'Empowering Independence & Well-being',
    description: 'Trained professionals supporting individuals with learning disabilities, mental health diagnoses, autism, and brain injuries in community and residential settings.',
    skills: [
      'Positive Behaviour Support (PBS)',
      'De-escalation & physical intervention techniques',
      'Independent life skills encouragement',
      'Social inclusion & community access',
      'Medication prompts & routine structure',
      'Safeguarding vulnerable adults (SoVA)'
    ],
    suitableFor: 'Supported living schemes, mental health rehabilitation units, youth transitions, respite homes.',
    badge: 'Specialist Care',
    icon: 'UserCheck'
  },
  {
    id: 'emergency-cover',
    title: '24/7 Rapid Emergency Shift Cover',
    subtitle: '60–90 Minute Average Response Time',
    description: 'Last-minute sickness, unexpected absences, or sudden surges in occupancy? Our on-call coordinators dispatch verified staff within minutes.',
    skills: [
      'Dedicated 24/7 phone line (no robot answering)',
      'Immediate staff availability confirmation',
      'Pre-vetted, shift-ready staff files sent prior to arrival',
      'Day, twilight, long day, and waking night cover',
      'Block bookings and regular rota stability',
      'Transparent flat agency rates with no surprise fees'
    ],
    suitableFor: 'All healthcare facilities experiencing shortfalls, critical staffing alerts, or emergency absences.',
    badge: '24/7 On-Call',
    icon: 'ClockAlert'
  }
];

export const TRAINING_MODULES = [
  {
    title: 'Moving and Handling of People',
    type: 'Practical & Theory',
    description: 'Comprehensive training on biomechanics, hoist operation, slide sheets, standing aids, risk assessments, and preserving resident dignity during transfer.',
    frequency: 'Annual Mandatory Recertification',
    skillsCovered: ['Manual handling legislation', 'Hoist operation (all types)', 'Slide sheets & repositioning', 'Spine safety & biomechanics']
  },
  {
    title: 'Physical Intervention (Face to Face)',
    type: 'Practical Scenario Training',
    description: 'Accredited de-escalation, conflict resolution, breakaway techniques, and safe physical intervention tailored for mental health and challenging behaviour.',
    frequency: 'Face-to-Face Certified',
    skillsCovered: ['De-escalation verbal strategies', 'Disengagement & breakaways', 'Proportional physical intervention', 'Post-incident debriefing & duty of care']
  },
  {
    title: 'Safeguarding of Vulnerable Adults (SoVA)',
    type: 'Clinical & Legal Framework',
    description: 'Identifying indicators of abuse, neglect, exploitation, mental capacity act principles, deprivation of liberty safeguards (DoLS), and whistleblowing.',
    frequency: 'Mandatory Core Skill',
    skillsCovered: ['Types and signs of abuse', 'Mental Capacity Act & DoLS', 'Duty of Candour', 'Reporting & referral procedures']
  },
  {
    title: 'Basic Life Support (BLS) & First Aid',
    type: 'Practical Life-Saving Skills',
    description: 'Adult resuscitation (CPR), automated external defibrillator (AED) usage, recovery position, choking protocols, and urgent emergency response.',
    frequency: 'Annual Practical Assessment',
    skillsCovered: ['Adult CPR & chest compressions', 'AED deployment & safety', 'Choking intervention', 'Emergency response chain']
  },
  {
    title: 'Infection Prevention & Control (IPC)',
    type: 'Hygiene & Clinical Safety',
    description: 'PPE protocols, hand hygiene, clinical waste segregation, outbreak management (COVID-19, Norovirus, MRSA), and biohazard safety.',
    frequency: 'CQC Compliant Standard',
    skillsCovered: ['5 moments for hand hygiene', 'Correct PPE donning & doffing', 'Aseptic non-touch technique (ANTT)', 'Outbreak containment protocols']
  },
  {
    title: 'Medication Administration & Safe Handling',
    type: 'Clinical Competency',
    description: 'The 6 rights of medication administration, MAR chart documentation, controlled drug handling, errors prevention, and safe storage.',
    frequency: 'Clinical Competency Verified',
    skillsCovered: ['6 Rights of medication', 'MAR chart audits', 'Controlled drugs regulations', 'Side effect observation & reporting']
  }
];

export const VETTING_STANDARDS = [
  {
    step: '1',
    title: 'Enhanced DBS with Barred Lists Check',
    detail: 'Every single staff member holds an Enhanced Disclosure and Barring Service check, re-verified via the DBS Update Service regularly.'
  },
  {
    step: '2',
    title: 'Right to Work & Identity Verification',
    detail: 'Full biometric and statutory Home Office Right to Work verification, passport checks, and proof of national insurance.'
  },
  {
    step: '3',
    title: 'Professional Registration (NMC PIN)',
    detail: 'Real-time online verification with the Nursing and Midwifery Council (NMC) ensuring active registration without sanctions or restrictions.'
  },
  {
    step: '4',
    title: '5-Year Verified Work History',
    detail: 'Strict audit of 5-year employment and training history with every gap investigated and accounted for.'
  },
  {
    step: '5',
    title: 'Two Clinical & Professional References',
    detail: 'Directly verified written references from previous clinical line managers and registered care home managers.'
  },
  {
    step: '6',
    title: 'Occupational Health & Immunisation Clearance',
    detail: 'Health fitness questionnaires and proof of immunisation (Hepatitis B, Rubella, Varicella, Tuberculosis) ensuring patient safety.'
  },
  {
    step: '7',
    title: 'Face-to-Face Competency Interview',
    detail: 'In-depth interview assessing clinical knowledge, communication skills, bedside manner, and situational decision making.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Dominion Healthcare has been an absolute lifesaver for our nursing facility. When we had a severe staff shortage on a Saturday night, they had an outstanding RGN on our floor within 45 minutes. The compliance documents were in our inbox before the nurse even arrived.",
    author: "Sarah Thompson",
    role: "Registered Care Home Manager",
    location: "Middlesbrough",
    facility: "54-Bed Nursing & Dementia Facility"
  },
  {
    quote: "Unlike many agencies who treat clients like a transaction, Dominion understands the pressures care homes face. Their HCAs are polite, proactive, know how to use all our hoists, and genuinely care about our residents. We now use them as our primary staffing partner.",
    author: "David Reynolds",
    role: "Operations Director",
    location: "Stockton-on-Tees",
    facility: "Residential Care Group"
  },
  {
    quote: "Working as an agency nurse with Dominion has transformed my work-life balance. I choose exactly when and where I work, the pay is in my account every single Friday without fail, and the team at the Stockton office always has my back.",
    author: "Grace M., RGN",
    role: "Registered General Nurse",
    location: "Newcastle",
    facility: "Dominion Agency Nurse (3 Years)"
  }
];

export const FAQS = [
  {
    question: "How quickly can Dominion Healthcare supply temp staff in an emergency?",
    answer: "Our 24/7 on-call coordinator team can confirm availability within 15 minutes. In urgent situations across Stockton, Middlesbrough, Durham, and Newcastle, we typically have a qualified staff member at your facility within 60 to 90 minutes.",
    category: 'Clients'
  },
  {
    question: "How do you ensure agency staff are fully compliant with CQC regulations?",
    answer: "Every candidate undergoes our rigorous 7-point vetting procedure: Enhanced DBS check via the Update Service, biometric Right to Work check, NMC PIN verification for nurses, 5-year work history check, 2 verified professional references, occupational health clearance, and mandatory training. Full compliance packs are sent digitally prior to every shift.",
    category: 'Clients'
  },
  {
    question: "Do you supply staff on short-term notice as well as planned block rotas?",
    answer: "Yes, we support both immediate ad-hoc shift coverage (day, twilight, waking night, weekend) and planned block bookings for maternity leaves, sickness absence, or seasonal peaks. Block bookings often benefit from discounted agency rates.",
    category: 'Clients'
  },
  {
    question: "How does payroll work for nurses and healthcare assistants?",
    answer: "Dominion operates a weekly payroll system. Timesheets submitted and authorised by Monday are paid directly into your chosen bank account that Friday. We support both standard PAYE (with accrued holiday pay and pension) and approved Umbrella company arrangements.",
    category: 'Candidates'
  },
  {
    question: "Do I have to pay for training courses or uniform?",
    answer: "No! Dominion Healthcare provides full mandatory training and regular practical refreshers (Moving & Handling, Physical Intervention, SoVA, BLS) free of charge to all active roster members. We also provide initial uniforms and badges.",
    category: 'Candidates'
  },
  {
    question: "Can I choose my own working hours and locations?",
    answer: "Absolutely. As a Dominion agency worker, you maintain full control over your availability. You can choose to work full-time hours, weekend-only shifts, or pick up supplemental shifts around an existing NHS or care home contract.",
    category: 'Candidates'
  }
];
