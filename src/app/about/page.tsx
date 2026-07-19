import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Our School | MM Matric Higher Secondary School",
  description: "Learn about the history, key milestones, vision, values, clubs, and notable achievements of MM Matric Higher Secondary School in Patemanagaram.",
  keywords: "about MM Matric, school milestones, awards, clubs, Patemanagaram school",
};

export default function AboutPage() {
  return <AboutClient />;
}
