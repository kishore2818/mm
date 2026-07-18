import { NextResponse } from 'next/server';
import { getAlumniSheet } from '@/lib/google-sheets';
import { format } from 'date-fns';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const sheet = await getAlumniSheet();
    const rows = await sheet.getRows();
    
    // Validate required fields
    const {
      fullName,
      dob,
      passoutYear,
      email,
      mobile,
      currentCity,
      qualification,
      college,
      company,
      jobRole
    } = data;

    if (!fullName || !dob || !passoutYear) {
      return NextResponse.json({ error: 'Full Name, DOB, and Passout Year are required' }, { status: 400 });
    }

    // Check for duplicates
    const normalizedName = fullName.trim().toLowerCase();
    const isDuplicate = rows.some(row => {
      return (
        row.get('Full Name')?.trim().toLowerCase() === normalizedName &&
        row.get('Passout Year') === passoutYear &&
        row.get('DOB') === dob
      );
    });

    if (isDuplicate) {
      return NextResponse.json({ error: 'An alumni record with these details already exists.' }, { status: 409 });
    }

    // Generate unique ID
    const currentYear = new Date().getFullYear();
    const nextIdNumber = rows.length + 1;
    const alumniId = `ALU-${currentYear}-${nextIdNumber.toString().padStart(4, '0')}`;

    const now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    // Add row
    await sheet.addRow({
      'Alumni ID': alumniId,
      'Full Name': fullName.trim(),
      'DOB': dob,
      'Passout Year': passoutYear,
      'Admission Number': data.admissionNumber || '',
      'Email': email || '',
      'Mobile': mobile || '',
      'Current City': currentCity || '',
      'Qualification': qualification || '',
      'College / University': college || '',
      'Company': company || '',
      'Job Role': jobRole || '',
      'Profile Photo URL': data.profilePhoto || '',
      'Status': 'Pending',
      'Created At': now,
      'Updated At': now
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Your alumni registration has been submitted successfully and is awaiting school approval.' 
    });

  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
