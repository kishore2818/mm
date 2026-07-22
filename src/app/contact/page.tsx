import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Get in touch with M.M.MATRICULATION HR.SEC SCHOOL. Find our campus address in Patemanagaram, phone numbers, email addresses, office hours, and Google Map location.",
  keywords: "contact M.M.MATRICULATION HR.SEC SCHOOL, school address, phone, email, office hours, map",
};

export default function ContactPage() {
  return <ContactClient />;
}
