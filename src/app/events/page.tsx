import type { Metadata } from 'next';
import EventsClient from './EventsClient';

export const metadata: Metadata = {
  title: "News & Events Calendar | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Stay updated with M.M.MATRICULATION HR.SEC SCHOOL reopening dates, sports meets, science expos, parent-teacher association (PTA) meetings, and events.",
  keywords: "school news, calendar of events, school reopening, sports day, science expo, PTA meeting, Patemanagaram school events",
};

export default function EventsPage() {
  return <EventsClient />;
}
