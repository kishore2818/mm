import type { Metadata } from 'next';
import AlumniClient from './AlumniClient';

export const metadata: Metadata = {
  title: "Alumni Network & Directory | MM Matric Higher Secondary School",
  description: "Reconnect with the MM Matric Higher Secondary School alumni community. Browse our searchable directory of past graduates, register as an alumni, or verify/update your details.",
  keywords: "alumni directory, MM Matric alumni, register alumni, batch mates list, school reunion, Patemanagaram school alumni",
};

export default function AlumniPage() {
  return <AlumniClient />;
}
