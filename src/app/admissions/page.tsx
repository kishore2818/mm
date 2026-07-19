import type { Metadata } from 'next';
import AdmissionsClient from './AdmissionsClient';

export const metadata: Metadata = {
  title: "Admissions 2026–27 | MM Matric Higher Secondary School",
  description: "Learn about the MM Matric Higher Secondary School admission process, eligibility guidelines, required certificates/documents, and contact info.",
  keywords: "school admission process, admissions 2026, required certificates, apply to school, Patemanagaram school admissions",
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
