import type { Metadata } from 'next';
import FacultyClient from './FacultyClient';

export const metadata: Metadata = {
  title: "Faculty & leadership | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Meet our dedicated school leaders, principal, vice principal, and our team of qualified teachers who foster academic success at M.M.MATRICULATION HR.SEC SCHOOL.",
  keywords: "school leadership, teachers, principal, secretary, M.M.MATRICULATION HR.SEC SCHOOL staff, Patemanagaram faculty",
};

export default function FacultyPage() {
  return <FacultyClient />;
}
