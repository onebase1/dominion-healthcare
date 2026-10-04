# Dominion Healthcare Services — Web Platform

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Deploy on Netlify](https://img.shields.io/badge/Netlify-Ready-00c7b7.svg)](https://www.netlify.com/)
[![Deploy on Vercel](https://img.shields.io/badge/Vercel-Ready-black.svg)](https://vercel.com/)

> **Modern web platform for Dominion Healthcare Services Ltd**, a leading UK healthcare recruitment and temporary staffing agency based in Stockton-on-Tees, North East England.

---

## 🏥 Critical Business Positioning

**Dominion Healthcare Services is a specialist B2B and B2C healthcare staffing agency—NOT a residential care home.** 

The agency provides fully vetted, compliant healthcare personnel to third-party healthcare facilities:
* **Registered General Nurses (RGN)** & **Registered Mental Health Nurses (RMN)**
* **Healthcare Assistants (HCA)** & **Senior Carers**
* **Specialist Support Workers** (Learning Disabilities, Autism, Mental Health)
* **24/7 Rapid Emergency Shift Cover** (Average 60–90 minute deployment across North East England)

---

## 🌟 Key Platform Features

1. **Two-Sided Healthcare Portal**:
   - **For Healthcare Providers**: Immediate shift cover request form, 7-point compliance guarantee, transparent agency rates, 24/7 on-call coordinator hotline.
   - **For Healthcare Professionals**: Quick-apply workflow, live vacancies board, weekly Friday payroll transparency, free certified mandatory training.

2. **Streamlined Navigation & Official DHCS Branding**:
   - Clean, grouped header navigation ("For Care Providers", "For Healthcare Staff", "About Us", "Contact Desk").
   - Official **DHCS** SVG brand logo featuring the 4 linked caregivers holding hands.
   - Matching authentic favicon (`public/favicon.svg`).

3. **Anti-Scraping Email Protection**:
   - Zero plain-text `mailto:` links visible to web scrapers and spambots.
   - Bot-deflecting `<ProtectedEmail />` component with 1-click clipboard copy and dynamic mail client trigger.

4. **Single Source of Truth Configuration**:
   - Change the agency telephone number or contact details across the whole platform in a single file: `src/config/siteConfig.ts`.

5. **Instant Theme & Font Customization**:
   - Easily swap brand colors (primary emerald, dark green, accent, gold) and typography directly in `src/index.css` via Tailwind CSS v4 `@theme`.

6. **Interactive Live Job Board**:
   - Filter by clinical category (RGN/RMN, HCA, Support Worker) and location (Stockton, Middlesbrough, Durham, Newcastle, Sunderland).
   - Real-time search and 1-click **Quick Apply** modal with pre-filled job metadata and CV upload.

7. **Rapid Staff Booking Modal (B2B)**:
   - Built specifically for care home managers, hospital ward matrons, and staffing coordinators.
   - Urgency levels: *Emergency (< 2 Hours)*, *Urgent (Within 24 Hours)*, *Planned Shift Rota / Block Booking*.
   - Instant dispatch reference code generation and 15-minute response SLA.

8. **Interactive Earnings & Rate Calculator**:
   - Estimate weekly take-home pay and client hourly rates with zero hidden fees.

9. **Accredited Compliance & Training Hub**:
   - Details of Dominion's 7-point vetting standard (Enhanced DBS on update service, real-time NMC PIN verification, right to work checks, 5-year work history audit).
   - Certified practical training courses: *Moving & Handling*, *Physical Intervention / PMVA*, *SoVA*, *BLS*.

10. **24/7 Emergency Dispatch Banner & Mobile Quick Action Bar**:
    - Sticky bottom dispatch banner and native mobile quick-action bar for instant calling on smartphones.

---

## 🛠️ Tech Stack

* **Frontend**: React 19, TypeScript
* **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
* **Icons**: Lucide React
* **Micro-interactions**: Canvas Confetti
* **Build System**: Vite 8 with Rolldown
* **Hosting Configurations**: Pre-configured for **Netlify** (`netlify.toml`) and **Vercel** (`vercel.json`)
* **Agent Documentation**: Standardized `AGENTS.md`, `CLAUDE.md`, and `.cursorrules`

---

## 🚀 Quickstart & Local Development

### Prerequisites
* Node.js v20.17+ or v22+
* npm v10+

### Setup Commands

```bash
# 1. Clone repository
git clone https://github.com/onebase1/dominion-healthcare.git
cd dominion-healthcare

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build & Production Preview

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Theme & Phone Customization Guide

### How to change the 24/7 phone number:
Open `src/config/siteConfig.ts` and update line 19:
```typescript
contact: {
  phone: '01642 345242',       // Format for display
  phoneClean: '01642345242',   // Numbers only for tel: links
  ...
}
```
All components throughout the website update immediately.

### How to change brand colors and fonts:
Open `src/index.css` and adjust the variables under `@theme`:
```css
@theme {
  --color-brand-primary: #047857;  /* Main buttons & CTA color */
  --color-brand-dark: #064e3b;     /* Hero background & headers */
  --color-brand-accent: #10b981;   /* Badges & highlights */
  --font-brand: 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

---

## 🌐 Deployment Instructions

### Deploy to Netlify
This repository contains a pre-configured `netlify.toml`:
1. Push this repository to GitHub.
2. Log into [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Select GitHub and choose `onebase1/dominion-healthcare`.
5. Build settings will auto-detect:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**. All Netlify forms (`staff-booking`, `candidate-registration`, `contact-general`, `newsletter`) and SPA routing redirects will work out of the box!

### Deploy to Vercel
This repository contains a pre-configured `vercel.json`:
1. Push this repository to GitHub.
2. Log into [Vercel](https://vercel.com/).
3. Click **"Add New Project"** and import `onebase1/dominion-healthcare`.
4. Framework preset will auto-detect as **Vite**.
5. Click **Deploy**.

---

## 🤖 AI Agent & Automation Preloads

For future autonomous AI agents or engineers maintaining this project:
* Please review **[`AGENTS.md`](./AGENTS.md)** for detailed domain constraints, form handling rules, British healthcare terminology requirements, and code patterns.
* Use `CLAUDE.md` and `.cursorrules` for tool-specific settings.

---

## 📞 Company Contact Details

* **Headquarters**: 219 Stockton Business Centre, Stockton-on-Tees, TS18 1DW, United Kingdom
* **24/7 Telephone Dispatch**: `01642 345242` (Configurable in `siteConfig.ts`)
* **Direct Email**: `info@dhcservicesltd.co.uk` (Protected by `<ProtectedEmail />`)
* **Operating Hours**: 24/7/365
