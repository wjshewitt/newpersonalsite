"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
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

  return (
    <nav className="sticky top-2 z-30">
      <div className="pt-4 pb-8 md:pt-6 md:pb-10 bg-background -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          <a
            href="#bio"
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "bio" ? "active" : ""}`}
            aria-current={activeSection === "bio" ? "page" : undefined}
          >
            Bio
          </a>
          <a
            href="#experience"
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "experience" ? "active" : ""}`}
            aria-current={activeSection === "experience" ? "page" : undefined}
          >
            Experience
          </a>

          {/* Hero name as centerpiece */}
          <h1 className="text-5xl md:text-6xl font-serif px-8 md:px-4 lg:px-8 text-foreground tracking-normal">
            Will Hewitt
          </h1>

          <a
            href="#interests"
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "interests" ? "active" : ""}`}
            aria-current={activeSection === "interests" ? "page" : undefined}
          >
            Interests
          </a>
          <a
            href="#skills"
            className={`font-sans text-xl uppercase tracking-wider nav-link md:text-lg ${activeSection === "skills" ? "active" : ""}`}
            aria-current={activeSection === "skills" ? "page" : undefined}
          >
            Skills
          </a>
        </div>
      </div>
      {/* Horizontal line below navigation - spans between vertical lines */}
      <div className="absolute left-[11%] right-[11%] top-full h-[4px] bg-foreground" />
    </nav>
  );
}
