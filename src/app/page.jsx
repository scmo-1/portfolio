import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import Toolbox from "@/components/sections/toolbox/toolbox";

export default function Home() {
  return (
    <div className="mx-auto flex h-fit w-full max-w-screen-2xl flex-col px-5 lg:px-10">
      <HeroSection />
      <AboutSection />
      <Toolbox />
      <ProjectsSection />
    </div>
  );
}
