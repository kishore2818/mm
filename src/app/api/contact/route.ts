import { NextResponse } from 'next/server';
import { getContactSheet } from '@/lib/google-sheets';
import nodemailer from 'nodemailer';

const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'mmschoolpatema@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'First Name, Email, and Message are required fields.' }, { status: 400 });
    }

    // 1. Record message in Google Sheet database
    try {
      const sheet = await getContactSheet();
      await sheet.addRow({
        'First Name': firstName,
        'Last Name': lastName || '',
        'Email': email,
        'Subject': subject || 'General Enquiry',
        'Message': message,
        'Created At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });
    } catch (sheetError) {
      // Log sheet error but don't halt email delivery
      console.error('Google Sheet logging failed:', sheetError);
    }

    // 2. Dispatch email to official school inbox
    if (SMTP_USER && SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        });

        const fullName = lastName ? `${firstName} ${lastName}` : firstName;

        const mailOptions = {
          from: `"${fullName}" <${SMTP_USER}>`,
          to: CONTACT_TO_EMAIL,
          replyTo: email,
          subject: `[New School Enquiry] ${subject || 'General Enquiry'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded: 10px;">
              <h2 style="color: #1a1a5e; border-bottom: 2px solid #c9a227; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #555555;">Name:</td>
                  <td style="padding: 8px 0; color: #333333;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555555;">Email:</td>
                  <td style="padding: 8px 0; color: #333333;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555555;">Subject:</td>
                  <td style="padding: 8px 0; color: #333333; font-weight: bold;">${subject || 'General Enquiry'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #555555;">Message:</td>
                  <td style="padding: 8px 0; color: #333333; white-space: pre-line;">${message}</td>
                </tr>
              </table>
              <div style="margin-top: 30px; font-size: 11px; color: #999999; border-top: 1px solid #eeeeee; padding-top: 10px; text-align: center;">
                Sent from M.M.MATRICULATION HR.SEC SCHOOL contact page.
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email successfully dispatched from ${email} to ${CONTACT_TO_EMAIL}`);
      } catch (emailError) {
        console.error('Email dispatch failed:', emailError);
        // We still return success: true because the database log is complete,
        // but log the email server error for administrators.
      }
    } else {
      console.log('Skipping email delivery: SMTP credentials are not configured in environment variables.');
    }

    return NextResponse.json({ success: true, message: 'Your message has been received! We will get back to you soon.' });
  } catch (error: any) {
    console.error('Contact form submission API error:', error);
    return NextResponse.json({ error: error.message || 'Failed to submit contact form.' }, { status: 500 });
  }
}
