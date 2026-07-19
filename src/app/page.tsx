import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import StatsSection from "@/components/home/StatsSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import EventsPreview from "@/components/home/EventsPreview";
import CallToAction from "@/components/home/CallToAction";
import PrincipalsMessage from "@/components/home/PrincipalsMessage";
import FounderSnippet from "@/components/home/FounderSnippet";

export const metadata: Metadata = {
  title: "MM Matric Higher Secondary School | Patemanagaram",
  description: "Welcome to MM Matric Higher Secondary School, Patemanagaram. We foster academic excellence, character building, and modern learning standard templates.",
  keywords: "MM Matric School, Patemanagaram, school in Thoothukudi, matriculation higher secondary school, school admissions, curriculum",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementBar />
      <FounderSnippet />
      <PrincipalsMessage />
      <StatsSection />
      <AboutSnippet />
      <FacilitiesSection />
      <EventsPreview />
      <CallToAction />
    </>
  );
}

