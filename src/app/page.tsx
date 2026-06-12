import HeroSection from "@/components/home/HeroSection";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import StatsSection from "@/components/home/StatsSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import EventsPreview from "@/components/home/EventsPreview";
import CallToAction from "@/components/home/CallToAction";
import PrincipalsMessage from "@/components/home/PrincipalsMessage";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementBar />
      <PrincipalsMessage />
      <StatsSection />
      <AboutSnippet />
      <FacilitiesSection />
      <EventsPreview />
      <CallToAction />
    </>
  );
}

