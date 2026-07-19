import type { Metadata } from 'next';
import AcademicsClient from './AcademicsClient';

export const metadata: Metadata = {
  title: "Academics & Curriculum | MM Matric Higher Secondary School",
  description: "Explore our educational stages from Primary to Higher Secondary, academic departments, and standard subject streams (Science & Commerce) at MM Matric.",
  keywords: "school curriculum, higher secondary streams, commerce, science, MM matric classes",
};

export default function AcademicsPage() {
  return <AcademicsClient />;
}
