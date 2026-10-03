# CLAUDE.md — Dominion Healthcare Project Instructions

This project is a modern, high-performance website for **Dominion Healthcare Services Ltd**, a UK healthcare staffing and recruitment agency.

## Critical Business Identity
- **Do NOT portray Dominion as a care home or nursing home.** It is a temporary healthcare employment agency supplying nurses and carers *to* care homes, hospitals, and supported living providers.
- **Headquarters**: 219 Stockton Business Centre, Stockton-on-Tees, TS18 1DW.
- **24/7 Hotline**: `01642 345242`.

## Architecture & Commands
- **Framework**: React 19 + TypeScript + Vite 8 + Tailwind CSS v4.
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Code Guidelines
- Keep components modular in `src/components/`.
- Centralize all types in `src/types/index.ts`.
- Tailwind CSS v4 is configured via `@tailwindcss/vite` and imported in `src/index.css`.
- Forms are Netlify-ready (paired with hidden crawler forms in `index.html`).
- Always run `npm run build` to verify code correctness before concluding tasks.
