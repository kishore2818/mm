import { NextResponse } from 'next/server';
import { getAlumniSheet } from '@/lib/google-sheets';

export const revalidate = 600; // Cache alumni directory for 10 minutes

export async function GET() {
  try {
    const sheet = await getAlumniSheet();
    const rows = await sheet.getRows();

    // Filter only Approved alumni and select public fields
    const publicAlumni = rows
      .filter(row => row.get('Status') === 'Approved')
      .map(row => ({
        alumniId: row.get('Alumni ID'),
        fullName: row.get('Full Name'),
        passoutYear: row.get('Passout Year'),
        currentCity: row.get('Current City'),
        qualification: row.get('Qualification'),
        company: row.get('Company'),
        jobRole: row.get('Job Role'),
        profilePhoto: row.get('Profile Photo URL'),
        college: row.get('College / University')
      }));

    return NextResponse.json({ alumni: publicAlumni });

  } catch (error) {
    console.error('Public alumni GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
