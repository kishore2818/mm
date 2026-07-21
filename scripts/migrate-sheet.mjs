/**
 * migrate-sheet.mjs
 * ONE-TIME migration: Recreates Alumni_Directory with all 31 new headers
 * Run: node scripts/migrate-sheet.mjs
 */

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load .env.local
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return;
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx === -1) return;
  const key = trimmed.slice(0, eqIdx).trim();
  const val = trimmed.slice(eqIdx + 1).trim().replace(/^"|"$/g, '');
  process.env[key] = val;
});

const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_SHEET_ID      = process.env.GOOGLE_SHEET_ID;

if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
  console.error('❌  Missing credentials in .env.local');
  process.exit(1);
}

const NEW_HEADERS = [
  'Alumni ID', 'Full Name', 'DOB', 'Marital Status', 'Gender',
  'Passout Year', 'Admission Number', 'Email', 'Mobile', 'WhatsApp',
  'Country', 'Postal Address', 'Standard Last Attended', 'Standards Attended',
  'Education Level', 'School / College Name', 'Current City', 'Qualification',
  'College / University', 'Company', 'Job Role', 'Sector', 'Facebook',
  'Instagram', 'Area of Interest', 'Fondest Memory', 'Share Contact',
  'Profile Photo URL', 'Status', 'Created At', 'Updated At',
];

async function migrate() {
  console.log('🔗  Connecting to Google Sheets...');

  const auth = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, auth);
  await doc.loadInfo();
  console.log(`📄  Spreadsheet: "${doc.title}"`);

  const SHEET_TITLE = 'Alumni_Directory';
  let sheet = doc.sheetsByTitle[SHEET_TITLE];

  if (sheet) {
    console.log(`🗑️   Deleting old sheet "${SHEET_TITLE}"...`);
    await sheet.delete();
    await doc.loadInfo(); // reload after delete
    console.log(`   ✅  Deleted.`);
  }

  // Create with enough columns from the start
  console.log(`📝  Creating new sheet with ${NEW_HEADERS.length} columns...`);
  sheet = await doc.addSheet({
    title: SHEET_TITLE,
    gridProperties: { rowCount: 1000, columnCount: NEW_HEADERS.length + 5 },
  });

  // Set the headers using setHeaderRow
  await sheet.setHeaderRow(NEW_HEADERS);

  console.log(`\n✅  New sheet "${SHEET_TITLE}" created with ${NEW_HEADERS.length} columns:\n`);
  NEW_HEADERS.forEach((h, i) => {
    console.log(`   ${(i + 1).toString().padStart(2, '0')}. ${h}`);
  });
  console.log('\n🎉  Migration complete! Google Sheet is ready for new registrations.\n');
}

migrate().catch(err => {
  console.error('❌  Migration failed:', err.message || err);
  process.exit(1);
});
