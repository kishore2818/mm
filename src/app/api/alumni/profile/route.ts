import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAlumniSheet } from '@/lib/google-sheets';
import { verifyToken } from '@/lib/auth';
import { format } from 'date-fns';

async function getSessionAlumniId() {
  const cookieStore = await cookies();
  const token = cookieStore.get('alumni_session')?.value;
  if (!token) return null;
  const payload = await verifyToken(token);
  return payload?.alumniId || null;
}

export async function GET() {
  try {
    const alumniId = await getSessionAlumniId();
    if (!alumniId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const sheet = await getAlumniSheet();
    const rows = await sheet.getRows();
    const row = rows.find(r => r.get('Alumni ID') === alumniId);

    if (!row) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Return current profile data
    const profile = {
      alumniId: row.get('Alumni ID'),
      fullName: row.get('Full Name'),
      passoutYear: row.get('Passout Year'),
      email: row.get('Email'),
      mobile: row.get('Mobile'),
      currentCity: row.get('Current City'),
      qualification: row.get('Qualification'),
      college: row.get('College / University'),
      company: row.get('Company'),
      jobRole: row.get('Job Role'),
      profilePhoto: row.get('Profile Photo URL'),
      status: row.get('Status')
    };

    return NextResponse.json({ profile });
  } catch (error) {
    console.error('Profile GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const alumniId = await getSessionAlumniId();
    if (!alumniId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const sheet = await getAlumniSheet();
    const rows = await sheet.getRows();
    const row = rows.find(r => r.get('Alumni ID') === alumniId);

    if (!row) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Update allowed fields
    const allowedFields = [
      'Email', 'Mobile', 'Current City', 
      'Qualification', 'College / University', 
      'Company', 'Job Role', 'Profile Photo URL'
    ];

    const mappedData: any = {
      'Email': data.email,
      'Mobile': data.mobile,
      'Current City': data.currentCity,
      'Qualification': data.qualification,
      'College / University': data.college,
      'Company': data.company,
      'Job Role': data.jobRole,
      'Profile Photo URL': data.profilePhoto
    };

    allowedFields.forEach(field => {
      if (mappedData[field] !== undefined) {
        row.set(field, mappedData[field]);
      }
    });

    // We set status to Pending again after an update to trigger manual admin review
    row.set('Status', 'Pending');
    row.set('Updated At', format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
    
    await row.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Your profile update has been submitted successfully. The changes will be visible after approval by the school administration.' 
    });

  } catch (error) {
    console.error('Profile PUT error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
