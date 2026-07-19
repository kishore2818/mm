import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: "Campus Life Gallery | MM Matric Higher Secondary School",
  description: "Browse our photos and videos capturing Morning Assemblies, KG Graduation Ceremonies, NCC & Scouts events, Independence Day celebrations, and academic achievements at MM Matric.",
  keywords: "school gallery, photo album, events video, KG graduation photos, scout parade, school building, achievements",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
