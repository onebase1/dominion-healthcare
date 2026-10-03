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

2. **Interactive Live Job Board**:
   - Filter by clinical category (RGN/RMN, HCA, Support Worker).
   - Filter by location (Stockton-on-Tees, Middlesbrough, Durham, Newcastle, Seaham, Sunderland).
   - Real-time search by title or keyword.
   - 1-click **Quick Apply** modal with pre-filled job metadata and optional CV upload.

3. **Rapid Staff Booking Modal (B2B)**:
   - Tailored specifically for care home managers, hospital ward matrons, and staffing coordinators.
   - Urgency levels: *Emergency (< 2 Hours)*, *Urgent (Within 24 Hours)*, *Planned Rota / Block Booking*.
   - Instant dispatch reference code generation and 15-minute response SLA.

4. **Interactive Earnings & Rate Calculator**:
   - **Candidates**: Calculate estimated weekly take-home and monthly earnings based on role, hours, and night/weekend enhancements.
   - **Care Homes**: Preview all-inclusive agency hourly rates with zero hidden fees.

5. **Accredited Compliance & Training Hub**:
   - Details of Dominion's 7-point vetting standard (Enhanced DBS on update service, real-time NMC PIN verification, right to work checks, 5-year work history audit, clinical references).
   - Showcase of certified practical training courses: *Moving & Handling of People*, *Physical Intervention / PMVA*, *Safeguarding of Vulnerable Adults (SoVA)*, *Basic Life Support*, and *Infection Control*.

6. **24/7 Emergency Dispatch Banner**:
   - Always-accessible floating hotline pill allowing 1-tap phone connection to `01642 345242`.

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
* Please review **[`AGENTS.md`](./AGENTS.md)** for detailed domain constraints, form handling rules, and code patterns.
* Use `CLAUDE.md` and `.cursorrules` for tool-specific settings.

---

## 📞 Company Contact Details

* **Headquarters**: 219, Stockton Business Centre, Stockton-on-Tees, TS18 1DW, United Kingdom
* **24/7 Telephone Dispatch**: `01642 345242`
* **Direct Email**: `info@dhcservicesltd.co.uk`
* **Operating Hours**: 24/7/365
