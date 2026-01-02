import nodemailer from 'nodemailer';

// API endpoint for contact form submissions.
// - If SMTP env vars are set (SMTP_HOST, SMTP_USER, SMTP_PASS), it will use Nodemailer (SMTP).
// - Else if SENDGRID_API_KEY is set, it will use SendGrid.
// - Otherwise it logs the submission (useful for local/dev).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end();
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const toEmail = process.env.TO_EMAIL || 'prithwish2dey@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'no-reply@yourdomain.com';

  // Prefer SMTP if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: `"Portfolio Contact" <${fromEmail}>`,
        to: toEmail,
        subject,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: email,
      });

      console.log('SMTP send result:', info);
      return res.status(200).json({ ok: true, via: 'smtp' });
    } catch (err) {
      console.error('SMTP error:', err);
      // If SendGrid is not configured, return error; otherwise fall back to SendGrid
      if (!process.env.SENDGRID_API_KEY) {
        return res.status(502).json({ error: 'Failed to send via SMTP' });
      }
      // else fall through to SendGrid path
    }
  }

  // If SendGrid key is present, forward the message to SendGrid
  if (process.env.SENDGRID_API_KEY) {
    try {
      const payload = {
        personalizations: [
          {
            to: [{ email: toEmail }],
            subject: subject,
          },
        ],
        from: { email: fromEmail, name: 'Portfolio Contact' },
        content: [
          {
            type: 'text/plain',
            value: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          },
        ],
      };

      const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const text = await resp.text();
        console.error('SendGrid error:', text);
        return res.status(502).json({ error: 'Failed to send email via SendGrid' });
      }

      return res.status(200).json({ ok: true, via: 'sendgrid' });
    } catch (err) {
      console.error('SendGrid exception:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Fallback: log it locally (no email provider configured)
  console.log('Contact form submission (not sent):', { name, email, subject, message });

  return res.status(200).json({ ok: true, info: 'not-configured' });
}
