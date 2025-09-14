import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col">
      <HeroSection />
    </div>
  );
}
