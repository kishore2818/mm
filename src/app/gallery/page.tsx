import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: "Campus Life Gallery | M.M.MATRICULATION HR.SEC SCHOOL",
  description: "Browse our photos and videos capturing Morning Assemblies, KG Graduation Ceremonies, NCC & Scouts events, Independence Day celebrations, and academic achievements at M.M.MATRICULATION HR.SEC SCHOOL.",
  keywords: "school gallery, photo album, events video, KG graduation photos, scout parade, school building, achievements",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
