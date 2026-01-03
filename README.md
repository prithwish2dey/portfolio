# Portfolio — README

> Comprehensive project documentation, setup instructions, architecture, and contact/email flow.

---

## 🚀 Overview

This repository is a personal portfolio built with Vite + React + TypeScript and shadcn/ui components.
---

## 📁 Project Structure (high level)

- `src/`
  - `components/`
    - `Contact.tsx` — Contact form UI and client POST to `/api/send-message`.
    - Other UI components under `ui/` and section components (`Hero`, `Projects`, etc.).
  - `pages/api/`
    - `send-message.js` — Server endpoint that attempts to send mail via SMTP (Nodemailer) or SendGrid; otherwise logs the message.
    - `visitor.js` — Simple visitor-counter API (GET/POST stats).
- `public/` — static assets (backgrounds, images, models).
- `.env.example` — environment variable examples (SMTP + SendGrid fallback).
- `package.json` — scripts and dependencies.

> See `src` for additional pages and UI building blocks.
