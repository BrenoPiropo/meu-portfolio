import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Global cursor glow effect */}
      <CursorGlow />

      {/* Ambient background blurs */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-cyan-600/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <div className="relative z-10">
        <HeroSection />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <SkillsSection />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <ProjectsSection />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <AboutSection />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}