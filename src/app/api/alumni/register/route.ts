import { NextResponse } from 'next/server';
import { getAlumniSheet } from '@/lib/google-sheets';
import { format } from 'date-fns';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const sheet = await getAlumniSheet();
    const rows = await sheet.getRows();

    // Validate required fields
    const { fullName, dob, passoutYear } = data;

    if (!fullName || !dob || !passoutYear) {
      return NextResponse.json(
        { error: 'Full Name, DOB, and Passout Year are required' },
        { status: 400 }
      );
    }

    // Check for duplicates
    const normalizedName = fullName.trim().toLowerCase();
    const isDuplicate = rows.some(row =>
      row.get('Full Name')?.trim().toLowerCase() === normalizedName &&
      row.get('Passout Year') === passoutYear &&
      row.get('DOB') === dob
    );

    if (isDuplicate) {
      return NextResponse.json(
        { error: 'An alumni record with these details already exists.' },
        { status: 409 }
      );
    }

    // Generate unique ID
    const currentYear = new Date().getFullYear();
    const nextIdNumber = rows.length + 1;
    const alumniId = `ALU-${currentYear}-${nextIdNumber.toString().padStart(4, '0')}`;

    const now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    // Resolve country value
    const country = data.country === 'Other' ? (data.countryOther || 'Other') : (data.country || '');
    // Resolve education level
    const educationLevel = data.educationLevel === 'Other' ? (data.educationLevelOther || 'Other') : (data.educationLevel || '');
    // Resolve job role
    const jobRole = data.jobRole === 'Other' ? (data.jobRoleOther || 'Other') : (data.jobRole || '');
    // Resolve sector
    const sector = data.sector === 'Other' ? (data.sectorOther || 'Other') : (data.sector || '');
    // Standards attended as comma-separated string
    const standardsAttended = Array.isArray(data.standardsAttended)
      ? data.standardsAttended.join(', ')
      : (data.standardsAttended || '');

    // Add row to Google Sheet with ALL fields
    await sheet.addRow({
      'Alumni ID':              alumniId,
      'Full Name':              fullName.trim(),
      'DOB':                    data.dob || '',
      'Marital Status':         data.maritalStatus || '',
      'Gender':                 data.gender || '',
      'Passout Year':           passoutYear || '',
      'Admission Number':       data.admissionNumber || '',
      'Email':                  data.email || '',
      'Mobile':                 data.mobile || '',
      'WhatsApp':               data.whatsapp || '',
      'Country':                country,
      'Postal Address':         data.postalAddress || '',
      'Standard Last Attended': data.standardLastAttended || '',
      'Standards Attended':     standardsAttended,
      'Education Level':        educationLevel,
      'School / College Name':  data.schoolCollegeName || '',
      'Current City':           country, // kept for backward compat
      'Qualification':          educationLevel, // kept for backward compat
      'College / University':   data.schoolCollegeName || data.college || '',
      'Company':                data.company || '',
      'Job Role':               jobRole,
      'Sector':                 sector,
      'Facebook':               data.facebook || '',
      'Instagram':              data.instagram || '',
      'Area of Interest':       data.areaOfInterest || '',
      'Fondest Memory':         data.fondestMemory || '',
      'Share Contact':          data.shareContact || '',
      'Profile Photo URL':      data.profilePhoto || '',
      'Status':                 'Pending',
      'Created At':             now,
      'Updated At':             now,
    });

    return NextResponse.json({
      success: true,
      message: 'Your alumni registration has been submitted successfully and is awaiting school approval.',
    });

  } catch (error: unknown) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
