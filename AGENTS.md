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

## 2. British Healthcare Terminology Standard (UK Lingo Guardrail)

Always adhere to authentic British healthcare terminology. **Never use North American staffing vernacular**:

| ❌ Forbidden American Phrasing | ✅ Mandatory British Healthcare Term | Context / Notes |
|---|---|---|
| *Work schedule* | **Shift rota** | Agency shifts and rotas |
| *Nursing home / Assisted living* | **Care home / Residential nursing home** | Third-party client facilities |
| *Zip code* | **Postcode** | UK postal addresses (e.g., TS18 1DW) |
| *Resume* | **CV** | Candidate curriculum vitae |
| *Background check* | **Enhanced DBS check (Update Service)** | UK Disclosure and Barring Service |
| *OR nurse* | **Theatre nurse** | Operating theatre registration |
| *Night shift only* | **Twilight shift / Waking night shift** | Standard UK shift patterns |
| *License number* | **NMC PIN / HCPC registration** | Nursing & Midwifery Council PIN |
| *Sick leave coverage* | **Sickness & absence cover / Short-notice cover** | Temporary emergency staffing |

---

## 3. Configuration & Single Source of Truth

### 3.1 24/7 Telephone Number Management
The 24/7 on-call hotline (`01642 345242`) is centralized in a single configuration file:
* **Config File**: `src/config/siteConfig.ts`
* **Object**: `SITE_CONFIG.contact.phone` and `SITE_CONFIG.contact.phoneClean`
* **Rule**: **NEVER hardcode phone numbers into JSX components or templates.** When the agency hotline changes, update only `src/config/siteConfig.ts`. All components (`Header`, `Footer`, `EmergencyBanner`, `MobileQuickBar`, `StaffBookingModal`, `ContactSection`, etc.) inherit dynamically.

```typescript
// src/config/siteConfig.ts
export const SITE_CONFIG = {
  contact: {
    phone: '01642 345242',       // Formatted display number
    phoneClean: '01642345242',   // Clean tel: dial URI string
    ...
  }
}
```

### 3.2 Anti-Scraping Email Protection
To defend the agency's primary email address (`info@dhcservicesltd.co.uk`) against automated spam harvesters and crawlers:
* **Rule**: **NEVER write plain text `mailto:info@...` links in public HTML.**
* **Protected Component**: `src/components/ProtectedEmail.tsx`
* **Mechanism**:
  1. The email is split into separate tokens in `src/config/siteConfig.ts` (`emailUser: 'info'`, `emailDomain: 'dhcservicesltd.co.uk'`).
  2. The email address is assembled dynamically in client-side JavaScript.
  3. Interactive features provide 1-tap clipboard copying with feedback ("Copied!") and dynamic mailto invocation on human click, deflecting automated web scrapers.

### 3.3 Theme Customization (Colors & Typography)
To modify website colors or typography upon user or client feedback:
* **Stylesheet**: `src/index.css`
* **Theme Tokens**: Managed via Tailwind CSS v4 `@theme` and `:root`:

```css
/* src/index.css */
@theme {
  --color-brand-primary: #047857;       /* Emerald 700 - Main buttons & links */
  --color-brand-primary-hover: #065f46; /* Emerald 800 - Button hover state */
  --color-brand-dark: #064e3b;          /* Emerald 900 - Deep hero headers */
  --color-brand-accent: #10b981;        /* Emerald 500 - Active badges & status dots */
  --color-brand-light: #ecfdf5;         /* Emerald 50 - Soft badge backgrounds */
  --color-brand-gold: #f59e0b;          /* Amber 500 - Urgency dispatch notices */

  --font-brand: 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

* **Font Replacement**: Font families are imported in `index.html` via Google Fonts (`Plus Jakarta Sans` and `Inter`). To switch fonts, swap the font link in `index.html` and update `--font-brand` in `src/index.css`.

---

## 4. Brand Logo & Visual Assets

* **Official Brand Vector Logo**: `src/components/DominionLogo.tsx`
  - Anatomy: **DHCS** stylized monogram + **4 linked healthcare workers holding hands** underneath + full typographic branding (*Dominion Healthcare Services Ltd*).
  - Supported variants: `variant="full"`, `variant="compact"`, `variant="white"` (for dark footers).
* **Favicon**: `public/favicon.svg` (Matches the authentic DHCS emblem with linked healthcare workers).
* **Reference Image**: `public/brand-logo.png`.

---

## 5. Tech Stack & Environment

| Layer | Technology | Description |
|---|---|---|
| **Framework** | React 19 (TypeScript) | Fast, responsive modern SPA |
| **Build Tool** | Vite 8 + Rolldown | Blazing-fast development & production bundling |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Modern CSS-first utility framework (`@import "tailwindcss";`) |
| **Icons** | Lucide React | Modern, accessible SVG icon set |
| **Effects** | Canvas Confetti | Form submission celebration feedback |
| **Deployment Targets** | Netlify & Vercel | Zero-configuration static hosting with serverless form support |

---

## 6. Repository Architecture & Directory Structure

```
dominion_healthcare/
├── public/
│   ├── favicon.svg             # Authentic DHCS emblem vector favicon
│   ├── brand-logo.png          # Reference brand logo asset
│   └── ...
├── src/
│   ├── config/
│   │   └── siteConfig.ts       # SINGLE SOURCE OF TRUTH (Phone, protected email, address, rates)
│   ├── types/
│   │   └── index.ts            # Type definitions (Jobs, StaffBooking, CandidateApplication, Contact)
│   ├── data/
│   │   └── mockData.ts         # Authentic agency data, vacancies, training modules, testimonials
│   ├── components/
│   │   ├── DominionLogo.tsx    # Official DHCS SVG logo (full, compact, white variants)
│   │   ├── ProtectedEmail.tsx  # Anti-crawler email obfuscation & 1-tap copy component
│   │   ├── Header.tsx          # Streamlined dropdown navigation & 24/7 emergency bar
│   │   ├── Hero.tsx            # B2B & Candidate hero with real-time counters & dual CTAs
│   │   ├── DualFunnel.tsx      # Side-by-side funnel: "Hire Staff" vs "Join Our Team"
│   │   ├── ServicesSection.tsx # In-depth service breakdown (RGN, RMN, HCA, Support, 24/7 Rapid Cover)
│   │   ├── JobBoard.tsx        # Searchable, filterable vacancies board with quick-apply
│   │   ├── EarningsCalculator.tsx # Interactive pay & staffing rate estimation widget
│   │   ├── ComplianceHub.tsx   # 7-point vetting standard & certified in-house training showcase
│   │   ├── AboutSection.tsx    # 10+ year North East heritage, stats (70k+ shifts), core values
│   │   ├── Testimonials.tsx    # Quotes from care home managers & agency nurses
│   │   ├── FAQSection.tsx      # Two-sided categorized accordion (Clients vs Candidates)
│   │   ├── ContactSection.tsx  # Stockton office details, protected email & contact form
│   │   ├── Footer.tsx          # Comprehensive footer with white logo, disclosures & newsletter
│   │   ├── StaffBookingModal.tsx # Dedicated B2B shift booking modal with urgent dispatch ticket
│   │   ├── CandidateApplyModal.tsx # Healthcare worker application & CV registration modal
│   │   ├── EmergencyBanner.tsx # Floating bottom pill with 1-click dispatch call
│   │   └── MobileQuickBar.tsx  # Native mobile fixed bottom quick-action bar
│   ├── App.tsx                 # Root coordinator managing modals and scroll navigation
│   ├── main.tsx                # React DOM entrypoint
│   └── index.css               # Tailwind CSS v4 entrypoint with @theme customization
├── index.html                  # SEO metadata, fonts & Netlify Forms crawler fallback templates
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

## 7. Key Development & Build Commands

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

## 8. Coding Standards & Conventions

1. **TypeScript Strictness**:
   - Use strict typing. Avoid `any` where possible.
   - Centralize shared interfaces in `src/types/index.ts`.
2. **Tailwind CSS v4 Practices**:
   - Do not create legacy `tailwind.config.js`. Tailwind v4 uses `@import "tailwindcss";` in `src/index.css`.
   - Prefer standard Tailwind utility classes (`bg-emerald-700`, `text-slate-900`, `rounded-2xl`).
3. **Form Handling & Netlify Integration**:
   - Every user form has a matching hidden static form in `index.html` with `netlify` and `netlify-honeypot="bot-field"` attributes.
   - When introducing new forms, ensure the form name is mirrored in `index.html` to maintain Netlify Forms auto-discovery.
4. **Autonomous Verification Before Completion**:
   - Always run `npm run build` after making modifications to ensure TypeScript compiles and Vite produces zero errors.
   - Check console logs and verify all interactive states (modals, filters, calculators).

---

## 9. Business Logic & Rates Reference

- **Phone Hotline**: `01642 345242` (Direct line to 24/7 on-call coordinator, configured in `siteConfig.ts`).
- **Protected Email**: `info@dhcservicesltd.co.uk` (Rendered via `<ProtectedEmail />`).
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
