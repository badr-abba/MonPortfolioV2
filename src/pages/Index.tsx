import { useState, useRef, useEffect } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const sections = ["hero", "about", "skills", "experience", "projects", "contact"];

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = window.innerWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      setActiveSection(newSection);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth"
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && activeSection < sections.length - 1) {
        navigateToSection(activeSection + 1);
      } else if (e.key === "ArrowLeft" && activeSection > 0) {
        navigateToSection(activeSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation
        sections={sections}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="horizontal-scroll h-screen"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Section indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "w-8 bg-gradient-to-r from-primary to-accent"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
