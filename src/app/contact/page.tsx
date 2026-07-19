import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | MM Matric Higher Secondary School",
  description: "Get in touch with MM Matric Higher Secondary School. Find our campus address in Patemanagaram, phone numbers, email addresses, office hours, and Google Map location.",
  keywords: "contact MM Matric, school address, phone, email, office hours, map",
};

export default function ContactPage() {
  return <ContactClient />;
}
