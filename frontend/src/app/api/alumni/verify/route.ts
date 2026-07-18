import { NextResponse } from 'next/server';
import { getAlumniSheet } from '@/lib/google-sheets';
import { signVerificationToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, passoutYear, dob } = data;

    if (!fullName || !passoutYear || !dob) {
      return NextResponse.json({ error: 'Missing required verification fields.' }, { status: 400 });
    }

    const sheet = await getAlumniSheet();
    const rows = await sheet.getRows();

    const normalizedName = fullName.trim().toLowerCase();

    const matchedRow = rows.find(row => {
      return (
        row.get('Full Name')?.trim().toLowerCase() === normalizedName &&
        row.get('Passout Year') === passoutYear &&
        row.get('DOB') === dob
      );
    });

    if (!matchedRow) {
      // Do not reveal which field was incorrect
      return NextResponse.json({ error: "We couldn't find an alumni record matching the provided details. Please check your information or contact the school administration." }, { status: 401 });
    }

    const alumniId = matchedRow.get('Alumni ID');
    if (!alumniId) {
      return NextResponse.json({ error: 'Record error: Missing Alumni ID.' }, { status: 500 });
    }

    // Generate secure token
    const token = await signVerificationToken(alumniId);

    // Set cookie
    const response = NextResponse.json({ success: true, message: 'Verification successful.' });
    response.cookies.set({
      name: 'alumni_session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 2 // 2 hours
    });

    return response;

  } catch (error: any) {
    console.error('Verification error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
