import type { Metadata } from 'next';
import EventsClient from './EventsClient';

export const metadata: Metadata = {
  title: "News & Events Calendar | MM Matric Higher Secondary School",
  description: "Stay updated with MM Matric Higher Secondary School reopening dates, sports meets, science expos, parent-teacher association (PTA) meetings, and events.",
  keywords: "school news, calendar of events, school reopening, sports day, science expo, PTA meeting, Patemanagaram school events",
};

export default function EventsPage() {
  return <EventsClient />;
}
