import type { Metadata } from 'next';
import AdmissionsClient from './AdmissionsClient';

export const metadata: Metadata = {
  title: "Admissions 2026–27 | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Learn about the M.M.MATRICULATION HR.SEC SCHOOL admission process, eligibility guidelines, required certificates/documents, and contact info.",
  keywords: "school admission process, admissions 2026, required certificates, apply to school, Patemanagaram school admissions",
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
