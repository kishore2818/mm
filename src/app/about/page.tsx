import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Our School | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Learn about the history, key milestones, vision, values, clubs, and notable achievements of M.M.MATRICULATION HR.SEC SCHOOL in Patemanagaram.",
  keywords: "about M.M.MATRICULATION HR.SEC SCHOOL, school milestones, awards, clubs, Patemanagaram school",
};

export default function AboutPage() {
  return <AboutClient />;
}
