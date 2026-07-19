import type { Metadata } from 'next';
import FacultyClient from './FacultyClient';

export const metadata: Metadata = {
  title: "Faculty & leadership | MM Matric Higher Secondary School",
  description: "Meet our dedicated school leaders, principal, vice principal, and our team of qualified teachers who foster academic success at MM Matric Higher Secondary School.",
  keywords: "school leadership, teachers, principal, secretary, MM matric staff, Patemanagaram faculty",
};

export default function FacultyPage() {
  return <FacultyClient />;
}
