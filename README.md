# Portfolio — README

> Comprehensive project documentation, setup instructions, architecture, and contact/email flow.

---

## 🚀 Overview

This repository is a personal portfolio built with Vite + React + TypeScript and shadcn/ui components. It contains a contact form that sends messages directly via an internal API endpoint. The server-side endpoint supports sending via SMTP (Nodemailer) or SendGrid, and falls back to logging submissions when no provider is configured.

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

---

## 🔀 Contact Flow (Diagram)

Mermaid flowchart (rendered on GitHub/GitLab/compatible viewers):

```mermaid
flowchart LR
  User[User] -->|Fill form| ContactForm[Contact Form (client)]
  ContactForm -->|POST /api/send-message| API[/api/send-message]
  API -->|SMTP configured| SMTP[Nodemailer (SMTP)]
  API -->|else if SENDGRID| SendGrid[SendGrid API]
  API -->|else| Log[Log submission (server console)]
  SMTP -->|Send success| Done[Success → HTTP 200]
  SendGrid -->|Send success| Done
  Log -->|Logged| Done
  Done -->|Response| ContactForm
```

If your environment has SMTP credentials (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`) the endpoint will prefer Nodemailer (SMTP). If not, but `SENDGRID_API_KEY` is set, it will use SendGrid. Otherwise the message is logged and a success response is returned to the client.

---

## ⚙️ Environment Variables

Use `.env` (do not commit secrets). See `.env.example` for a template.

Important variables:

- SMTP (preferred for direct sending)
  - `SMTP_HOST` - SMTP server host (e.g., `smtp.gmail.com` or your provider)
  - `SMTP_PORT` - port (default `587`)
  - `SMTP_SECURE` - `true` for 465, otherwise `false`
  - `SMTP_USER` - SMTP username
  - `SMTP_PASS` - SMTP password (use an app password if provider requires)
  - `FROM_EMAIL` - optional; defaults to `no-reply@yourdomain.com`
  - `TO_EMAIL` - where contact messages are delivered (defaults to `prithwish2dey@gmail.com`)

- SendGrid (fallback)
  - `SENDGRID_API_KEY` - SendGrid API key (if you prefer SendGrid)

Security note: Use platform secrets on your hosting provider (Vercel/Netlify/Heroku/…); never commit `.env` to Git.

---

## 🛠️ Local Setup & Run

Prerequisites: Node.js (16+ recommended), npm/yarn.

1. Install dependencies:

```bash
npm install
# and (if not installed automatically) explicitly add nodemailer:
npm install nodemailer
```

2. Copy `.env.example` to `.env` and fill required values.

3. Start dev server:

```bash
npm run dev
```

4. Open the site and test the contact form. Check server logs for delivery status when using the log fallback.

---

## 📬 API: `/api/send-message` (contract)

- Method: POST
- Content-Type: `application/json`
- Body JSON:

```json
{
  "name": "Your name",
  "email": "you@example.com",
  "subject": "Hello",
  "message": "Message body"
}
```

- Responses:
  - `200 OK` — `{ ok: true, via: 'smtp' | 'sendgrid' | undefined }`
  - `400 Bad Request` — missing fields
  - `502` or `500` — provider errors

---

## ✅ Testing Email Locally

- Use Ethereal (https://ethereal.email/) or Mailtrap for safe local SMTP testing. For Ethereal run a small Node script to create test accounts, or set `SMTP_*` env vars to your Mailtrap credentials.

- Example: testing with Gmail requires an app password and correct security settings (Gmail may block plain username/password from less secure apps).

---

## 🧰 Troubleshooting

- If `send-message` returns an error:
  - Check server logs (the server prints SendGrid and SMTP errors).
  - Ensure env vars are set correctly, and ports/security flags match your provider.
  - If SMTP fails, try `SMTP_SECURE=true` (port 465) or `SMTP_SECURE=false` (port 587) depending on provider.

- If the contact form opens Gmail instead of posting: ensure the contact form button is type `submit` and the client is running the updated code.

---

## 📦 Production / Deployment Tips

- Use your hosting provider's environment variables (Vercel/Netlify/Heroku) to set secrets.
- For reliability, prefer a transactional email service (SendGrid, Mailgun) in production or use SMTP relay with proper credentials.
- Add monitoring (log delivery failures and metrics).

---

## 🤝 Contributing

PRs welcome. Please ensure code formatting and tests (if you add features) before submitting.

---

## 📜 License

This project is provided as-is. No license declared — add one if you plan to share it publicly.

---

If you'd like, I can also:
- Add a generated PNG of the flow diagram and include it in `README.md`.
- Add example `.env` values for Mailtrap/Ethereal.
- Create a small smoke-test script for the API that uses a test SMTP account.

Tell me which of these you'd prefer next.
