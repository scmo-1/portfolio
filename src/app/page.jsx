import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-2xl flex-col px-10">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
