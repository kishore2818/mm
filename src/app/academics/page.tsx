import type { Metadata } from 'next';
import AcademicsClient from './AcademicsClient';

export const metadata: Metadata = {
  title: "Academics & Curriculum | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Explore our educational stages from Primary to Higher Secondary, academic departments, and standard subject streams (Science & Commerce) at M.M.MATRICULATION HR.SEC SCHOOL.",
  keywords: "school curriculum, higher secondary streams, commerce, science, M.M.MATRICULATION HR.SEC SCHOOL classes",
};

export default function AcademicsPage() {
  return <AcademicsClient />;
}
