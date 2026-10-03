# AGENTS.md — Dominion Healthcare Services AI Agent Specification

> **Target Audience**: AI Coding Agents (Google Antigravity, Claude Code, Cursor, GitHub Copilot, Windsurf) and Software Engineers.
> **Standard Compliance**: AGENTS.md open specification for autonomous agent guidance and persistent context.

---

## 1. Project Overview & Business Domain

### 1.1 Company Identity
* **Organization**: Dominion Healthcare Services Ltd (DHC Services Ltd)
* **Website**: Production target for `https://dhcservicesltd.co.uk/`
* **Headquarters**: 219 Stockton Business Centre, Stockton-on-Tees, TS18 1DW, United Kingdom
* **Core Business**: **UK Healthcare Recruitment & Temporary Staffing Agency**
* **Target B2B Clients**: Care Homes, Nursing Homes, NHS Trusts, Private Hospitals, Supported Living Schemes, and Hospices across North East England (Stockton-on-Tees, Middlesbrough, Durham, Newcastle, Sunderland) and nationwide.
* **Target Candidates**: Registered General Nurses (RGN), Registered Mental Health Nurses (RMN), Healthcare Assistants (HCA), Senior Carers, and Specialist Support Workers.

### 1.2 Critical Brand Positioning Guardrail
> ⚠️ **MANDATORY DIRECTIVE FOR ALL AGENTS**:
> Under NO circumstances should this website or any of its copy portray Dominion Healthcare Services as a residential care home or nursing home. Dominion Healthcare is a **B2B & B2C staffing and recruitment agency** that *supplies* qualified temporary and permanent staff *to* care homes and hospitals. Any future edits or copy must preserve this distinction clearly.

---

## 2. Tech Stack & Environment

| Layer | Technology | Description |
|---|---|---|
| **Framework** | React 19 (TypeScript) | Fast, responsive modern SPA |
| **Build Tool** | Vite 8 + Rolldown | Blazing-fast development & production bundling |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Modern CSS-first utility framework (`@import "tailwindcss";`) |
| **Icons** | Lucide React | Modern, accessible SVG icon set |
| **Effects** | Canvas Confetti | Form submission celebration feedback |
| **Deployment Targets** | Netlify & Vercel | Zero-configuration static hosting with serverless form support |

---

## 3. Repository Architecture & Directory Structure

```
dominion_healthcare/
├── public/
│   ├── favicon.svg             # Brand vector favicon (shield & 'D' crest)
│   └── ...
├── src/
│   ├── types/
│   │   └── index.ts            # Type definitions (Jobs, StaffBooking, CandidateApplication, Contact)
│   ├── data/
│   │   └── mockData.ts         # Authentic agency data, live job listings, training modules, testimonials
│   ├── components/
│   │   ├── Header.tsx          # Sticky navigation, 24/7 emergency dispatch bar, responsive drawer
│   │   ├── Hero.tsx            # B2B & Candidate hero with real-time counters & dual CTAs
│   │   ├── DualFunnel.tsx      # Side-by-side funnel: "Hire Staff" vs "Join Our Team"
│   │   ├── ServicesSection.tsx # In-depth service breakdown (RGN, RMN, HCA, Support, 24/7 Rapid Cover)
│   │   ├── JobBoard.tsx        # Searchable, filterable vacancies board with quick-apply integration
│   │   ├── EarningsCalculator.tsx # Interactive pay & staffing rate estimation widget
│   │   ├── ComplianceHub.tsx   # 7-point vetting standard & certified in-house training showcase
│   │   ├── AboutSection.tsx    # 10+ year North East heritage, stats (70k+ shifts), and core values
│   │   ├── Testimonials.tsx    # Quotes from care home managers & agency nurses
│   │   ├── FAQSection.tsx      # Two-sided categorized accordion (Clients vs Candidates)
│   │   ├── ContactSection.tsx  # Stockton office details & general contact form
│   │   ├── Footer.tsx          # Comprehensive footer with legal disclosures & newsletter signup
│   │   ├── StaffBookingModal.tsx # Dedicated B2B shift booking modal with urgent dispatch ticket
│   │   ├── CandidateApplyModal.tsx # Healthcare worker application & CV registration modal
│   │   └── EmergencyBanner.tsx # Floating bottom pill with 1-click 01642 345242 dispatch call
│   ├── App.tsx                 # Root coordinator managing modals and scroll navigation
│   ├── main.tsx                # React DOM entrypoint
│   └── index.css               # Tailwind CSS v4 entrypoint
├── index.html                  # SEO metadata & Netlify Forms crawler fallback templates
├── netlify.toml                # Netlify build, SPA rewrite (/* -> /index.html 200), security headers
├── vercel.json                 # Vercel routes & SPA rewrites
├── package.json                # Dependencies and npm scripts
├── vite.config.ts              # Vite configuration with React & Tailwind v4 plugins
├── AGENTS.md                   # This machine-readable specification
├── CLAUDE.md                   # Claude Code agent guide
├── .cursorrules                # Cursor IDE coding rules
└── README.md                   # Human-readable documentation & deployment instructions
```

---

## 4. Key Development & Build Commands

Always run these commands from the project root:

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Run TypeScript compilation & production build
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Coding Standards & Conventions

1. **TypeScript Strictness**:
   - Use strict typing. Avoid `any` where possible.
   - Centralize shared interfaces in `src/types/index.ts`.
2. **Tailwind CSS v4 Practices**:
   - Do not create legacy `tailwind.config.js` unless necessary. Tailwind v4 uses `@import "tailwindcss";` in `src/index.css`.
   - Prefer standard Tailwind utility classes (`bg-blue-600`, `text-slate-900`, `rounded-2xl`).
3. **Form Handling & Netlify Integration**:
   - Every user form has a matching hidden static form in `index.html` with `netlify` and `netlify-honeypot="bot-field"` attributes.
   - When introducing new forms, ensure the form name is mirrored in `index.html` to maintain Netlify Forms auto-discovery.
4. **Autonomous Verification Before Completion**:
   - Always run `npm run build` after making modifications to ensure TypeScript compiles and Vite produces zero errors.
   - Check console logs and verify all interactive states (modals, filters, calculators).

---

## 6. Business Logic & Rates Reference

- **Phone Hotline**: `01642 345242` (Direct line to 24/7 on-call coordinator).
- **Email**: `info@dhcservicesltd.co.uk`.
- **Pay Ranges**:
  - Registered Nurses (RGN/RMN): £20.00 – £38.00 / hr
  - Senior Healthcare Assistants (SHCA): £13.50 – £16.50 / hr
  - Healthcare Assistants (HCA): £12.00 – £15.00 / hr
  - Specialist Support Workers: £12.00 – £15.50 / hr
- **Compliance Requisites**:
  - Enhanced DBS on Update Service
  - Real-time NMC PIN verification
  - Right to Work in UK verification
  - Mandatory Training: Moving & Handling, Physical Intervention / PMVA, SoVA, BLS.
