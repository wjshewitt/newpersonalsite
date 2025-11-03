"use client";

import { useEffect, useState } from "react";
import GrainGradient from "./GrainGradient";

interface NavigationProps {
  onSectionToggle: (sectionId: string) => void;
}

export default function Navigation({ onSectionToggle }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    onSectionToggle(sectionId);
    // Small delay to ensure section is expanded before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-30 relative">
      {/* Covers for the overspilling gradient */}
      <div className="absolute top-0 bottom-0 left-0 w-[11%] bg-background z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-[11%] bg-background z-20" />

      {/* Solid background */}
      <div className="absolute top-0 bottom-0 left-[11%] right-[11%] bg-background z-0" />
      {/* Left half: from left vertical (11%) to midpoint (50%) */}
      <div className="absolute top-0 bottom-0 left-[calc(11%-50px)] right-[50%] z-10 pointer-events-none overflow-hidden">
        <GrainGradient className="absolute inset-0 object-cover" />
      </div>
      {/* Right half: from midpoint (50%) to right vertical (11%), mirrored */}
      <div className="absolute top-0 bottom-0 left-[50%] right-[calc(11%-50px)] z-10 pointer-events-none overflow-hidden" style={{ transform: 'scaleX(-1)' }}>
        <GrainGradient className="absolute inset-0 object-cover" />
      </div>
      <div className="pt-4 pb-8 md:pt-6 md:pb-10 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          <button
            onClick={() => handleNavClick("bio")}
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "bio" ? "active" : ""}`}
            aria-current={activeSection === "bio" ? "page" : undefined}
          >
            Bio
          </button>
          <button
            onClick={() => handleNavClick("experience")}
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "experience" ? "active" : ""}`}
            aria-current={activeSection === "experience" ? "page" : undefined}
          >
            Experience
          </button>
          {/* Hero name as centerpiece */}
          <h1 className="text-5xl md:text-6xl font-serif px-8 md:px-4 lg:px-8 text-foreground tracking-normal">
            Will Hewitt
          </h1>

          <button
            onClick={() => handleNavClick("interests")}
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "interests" ? "active" : ""}`}
            aria-current={activeSection === "interests" ? "page" : undefined}
          >
            Interests
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "skills" ? "active" : ""}`}
            aria-current={activeSection === "skills" ? "page" : undefined}
          >
            Skills
          </button>
        </div>
      </div>
      {/* Horizontal line below navigation - spans between vertical lines */}
      <div className="absolute left-[11%] right-[11%] top-full h-[4px] bg-foreground" />
    </nav>
  );
}
