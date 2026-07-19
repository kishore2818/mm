import { NextResponse } from 'next/server';
import { getContactSheet } from '@/lib/google-sheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'First Name, Email, and Message are required fields.' }, { status: 400 });
    }

    const sheet = await getContactSheet();
    await sheet.addRow({
      'First Name': firstName,
      'Last Name': lastName || '',
      'Email': email,
      'Subject': subject || 'General Enquiry',
      'Message': message,
      'Created At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    });

    return NextResponse.json({ success: true, message: 'Your message has been received! We will get back to you soon.' });
  } catch (error: any) {
    console.error('Contact form submission API error:', error);
    return NextResponse.json({ error: error.message || 'Failed to submit contact form.' }, { status: 500 });
  }
}
