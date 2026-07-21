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

    const profile = {
      alumniId:             row.get('Alumni ID'),
      fullName:             row.get('Full Name'),
      dob:                  row.get('DOB'),
      maritalStatus:        row.get('Marital Status'),
      gender:               row.get('Gender'),
      passoutYear:          row.get('Passout Year'),
      admissionNumber:      row.get('Admission Number'),
      email:                row.get('Email'),
      mobile:               row.get('Mobile'),
      whatsapp:             row.get('WhatsApp'),
      country:              row.get('Country'),
      postalAddress:        row.get('Postal Address'),
      standardLastAttended: row.get('Standard Last Attended'),
      standardsAttended:    row.get('Standards Attended'),
      educationLevel:       row.get('Education Level'),
      schoolCollegeName:    row.get('School / College Name'),
      currentCity:          row.get('Current City'),
      qualification:        row.get('Qualification'),
      college:              row.get('College / University'),
      company:              row.get('Company'),
      jobRole:              row.get('Job Role'),
      sector:               row.get('Sector'),
      facebook:             row.get('Facebook'),
      instagram:            row.get('Instagram'),
      areaOfInterest:       row.get('Area of Interest'),
      fondestMemory:        row.get('Fondest Memory'),
      shareContact:         row.get('Share Contact'),
      profilePhoto:         row.get('Profile Photo URL'),
      status:               row.get('Status'),
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

    const country        = data.country === 'Other'        ? (data.countryOther || 'Other')        : (data.country || '');
    const educationLevel = data.educationLevel === 'Other' ? (data.educationLevelOther || 'Other') : (data.educationLevel || '');
    const jobRole        = data.jobRole === 'Other'        ? (data.jobRoleOther || 'Other')        : (data.jobRole || '');
    const sector         = data.sector === 'Other'         ? (data.sectorOther || 'Other')         : (data.sector || '');

    const updates: Record<string, string> = {
      'Email':                  data.email                || '',
      'Mobile':                 data.mobile               || '',
      'WhatsApp':               data.whatsapp             || '',
      'Country':                country,
      'Postal Address':         data.postalAddress        || '',
      'Standard Last Attended': data.standardLastAttended || '',
      'Standards Attended':     typeof data.standardsAttended === 'string'
                                  ? data.standardsAttended
                                  : (Array.isArray(data.standardsAttended) ? data.standardsAttended.join(', ') : ''),
      'Education Level':        educationLevel,
      'School / College Name':  data.schoolCollegeName    || '',
      'Current City':           country,
      'Qualification':          educationLevel,
      'College / University':   data.schoolCollegeName || data.college || '',
      'Company':                data.company      || '',
      'Job Role':               jobRole,
      'Sector':                 sector,
      'Facebook':               data.facebook     || '',
      'Instagram':              data.instagram    || '',
      'Area of Interest':       data.areaOfInterest || '',
      'Fondest Memory':         data.fondestMemory  || '',
      'Share Contact':          data.shareContact   || '',
      'Marital Status':         data.maritalStatus  || '',
      'Profile Photo URL':      data.profilePhoto   || '',
    };

    Object.entries(updates).forEach(([field, value]) => row.set(field, value));
    row.set('Status', 'Pending');
    row.set('Updated At', format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
    await row.save();

    return NextResponse.json({
      success: true,
      message: 'Your profile update has been submitted successfully. Changes will be visible after approval by the school administration.',
    });

  } catch (error) {
    console.error('Profile PUT error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
