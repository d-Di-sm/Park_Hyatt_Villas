// Vercel Serverless Function — /api/contact
//
// Required environment variables (set in Vercel project settings):
//   RESEND_API_KEY        — your Resend API key (starts with re_...)
//   CONTACT_TO_EMAIL      — destination inbox, e.g. agent@soma.com
//   CONTACT_FROM_EMAIL    — sender shown to recipients, e.g. "Park Hyatt Cabos <onboarding@resend.dev>"
//                           Use a verified Resend domain in production; the onboarding address
//                           works out of the box for testing but only delivers to the account owner.

import { Resend } from 'resend';

// Escape HTML special characters to prevent XSS in the email body.
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // Only POST requests are accepted.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    interest,
    message,
    // Honeypot field — bots typically fill hidden fields.
    // If populated, silently pretend success without sending an email.
    website,
  } = req.body || {};

  // Spam protection: silently succeed if the honeypot field is filled.
  if (website) {
    return res.status(200).json({ success: true });
  }

  // Validate required fields.
  const name = [firstName, lastName].filter(Boolean).join(' ').trim();
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Please provide your name, email address, and message.',
    });
  }

  // Basic email format check.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || '');
  const safeInterest = escapeHtml(interest || '');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const html = `
    <table style="font-family:Arial,sans-serif;font-size:15px;color:#222;max-width:600px;width:100%">
      <tr><td style="padding:24px 0 8px"><h2 style="margin:0;font-size:20px">New enquiry — Park Hyatt Cabos</h2></td></tr>
      <tr><td style="padding:4px 0"><strong>Name:</strong> ${safeName}</td></tr>
      <tr><td style="padding:4px 0"><strong>Email:</strong> ${safeEmail}</td></tr>
      ${safePhone ? `<tr><td style="padding:4px 0"><strong>Phone:</strong> ${safePhone}</td></tr>` : ''}
      ${safeInterest ? `<tr><td style="padding:4px 0"><strong>Enquiry type:</strong> ${safeInterest}</td></tr>` : ''}
      <tr><td style="padding:16px 0 4px"><strong>Message:</strong><br><br>${safeMessage}</td></tr>
    </table>
  `;

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Park Hyatt Cabos — Enquiry from ${safeName}`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    // Do not expose internal error details to the client.
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
}
