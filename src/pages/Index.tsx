import NavBar from "@/components/wedding/NavBar";
import HeroSection from "@/components/wedding/HeroSection";
import DetailsSection from "@/components/wedding/DetailsSection";
import StorySection from "@/components/wedding/StorySection";
import GallerySection from "@/components/wedding/GallerySection";
import RsvpSection from "@/components/wedding/RsvpSection";
import ContactsSection from "@/components/wedding/ContactsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <DetailsSection />
      <StorySection />
      <GallerySection />
      <RsvpSection />
      <ContactsSection />
    </main>
  );
};

export default Index;
