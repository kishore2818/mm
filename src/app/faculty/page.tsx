import type { Metadata } from 'next';
import FacultyClient from './FacultyClient';

export const metadata: Metadata = {
  title: "Faculty & Board of Trustees | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Meet the Board of Trustees of M.M. Public Charitable Trust and our team of dedicated teachers who foster academic success at M.M.MATRICULATION HR.SEC SCHOOL.",
  keywords: "board of trustees, trustees, M.M. Public Charitable Trust, teachers, M.M.MATRICULATION HR.SEC SCHOOL staff, Patemanagaram faculty",
};

export default function FacultyPage() {
  return <FacultyClient />;
}
