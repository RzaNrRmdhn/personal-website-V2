import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialsMedia from "@/components/SocialsMedia";
import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Project from "@/components/Project"; 
import MoreProjects from "@/components/MoreProjects";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return(
    <main className="min-h-screen bg-[#0a192f] text-white">
      <Navbar/>
      <HeroSection />
      <SocialsMedia />
      <AboutMe />
      <Experiences />
      <Project />
      <MoreProjects />
      <GetInTouch />
    </main>
  );
}