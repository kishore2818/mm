import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// We expect these in .env.local
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL || '';
// Format the private key to handle literal \n characters from env variables
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '';
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || '';

// Singleton pattern for the doc instance
let docInstance: GoogleSpreadsheet | null = null;

export async function getGoogleSheet() {
  if (docInstance) {
    return docInstance;
  }

  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    throw new Error('Missing Google Sheets credentials in environment variables.');
  }

  const serviceAccountAuth = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
  await doc.loadInfo(); 
  docInstance = doc;
  return doc;
}

// Helper to get or create the main Alumni sheet
export async function getAlumniSheet() {
  const doc = await getGoogleSheet();
  const sheetTitle = 'Alumni_Directory';
  
  let sheet = doc.sheetsByTitle[sheetTitle];
  if (!sheet) {
    // Create it if it doesn't exist, with necessary headers
    sheet = await doc.addSheet({
      title: sheetTitle,
      headerValues: [
        'Alumni ID',
        'Full Name',
        'DOB',
        'Passout Year',
        'Admission Number',
        'Email',
        'Mobile',
        'Current City',
        'Qualification',
        'College / University',
        'Company',
        'Job Role',
        'Profile Photo URL',
        'Status',
        'Created At',
        'Updated At'
      ]
    });
  }
  return sheet;
}
