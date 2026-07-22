import type { Metadata } from 'next';
import AlumniClient from './AlumniClient';

export const metadata: Metadata = {
  title: "Alumni Network & Directory | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Reconnect with the M.M.MATRICULATION HR.SEC SCHOOL alumni community. Browse our searchable directory of past graduates, register as an alumni, or verify/update your details.",
  keywords: "alumni directory, M.M.MATRICULATION HR.SEC SCHOOL alumni, register alumni, batch mates list, school reunion, Patemanagaram school alumni",
};

export default function AlumniPage() {
  return <AlumniClient />;
}
