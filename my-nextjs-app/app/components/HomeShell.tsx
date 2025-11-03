"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import Section from "./Section";
import RailsBottomGrain from "./RailsBottomGrain";

export default function HomeShell() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    bio: false,
    experience: false,
    interests: false,
    skills: false,
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <div className="relative min-h-[200vh]">
        {/* Border frame that scales with the page height */}
        <div
          className="pointer-events-none absolute inset-0 border-[8px] md:border-[6px] sm:border-[4px] border-foreground z-50"
          aria-hidden="true"
        />

        {/* Bottom image sitting behind content */}
        <div className="fixed bottom-0 left-[11%] right-[11%] z-0 pointer-events-none" style={{ marginLeft: "4px", marginRight: "4px" }}>
          <img
            src="/bottom-image.png"
            alt=""
            className="w-full h-auto object-contain"
            style={{
              maxHeight: '65vh',
              marginBottom: '0',
              filter: 'brightness(1.1) contrast(1.05)'
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative min-h-[100vh] bg-gradient-to-t from-[#F8F6EE]/40 via-[#F8F6EE]/60 to-[#F8F6EE] overflow-x-hidden">
          {/* Vertical decorative lines */}
          <div className="absolute top-0 bottom-0 left-[11%] w-[4px] bg-foreground z-40" />
          <div className="absolute top-0 bottom-0 right-[11%] w-[4px] bg-foreground z-40" />


          <Navigation onSectionToggle={toggleSection} />

          <main className="relative z-10 py-8" id="main-content">
            <Section id="bio" title="Who am I?" isOpen={openSections.bio} onToggle={() => toggleSection('bio')}>
              <p className="font-serif">
                A 21-year-old history grad based in London. I&apos;m interested in
                housing, planning, startups, private markets, and anything else
                derivative of or related to those things. I particularly enjoy
                reading, learning, questioning things, and research. When I can, I
                like to tinker with boats, sail them, climb things, watch
                motorsport, code projects and cross-country run
              </p>
            </Section>

            <Section id="experience" title="Experience" alignment="right" isOpen={openSections.experience} onToggle={() => toggleSection('experience')}>
              <h3 className="font-medium mb-4">Professional Background</h3>
              <p className="font-serif">
                My experience spans historical research, urban planning
                assessment, and involvement with startup initiatives focused on
                housing technology and sustainable development.
              </p>
              <p className="font-serif">
                I&apos;ve worked with organizations that bridge the gap between
                traditional urban planning and innovative tech solutions, helping
                to bring fresh perspectives to longstanding housing challenges in
                London and beyond.
              </p>
            </Section>

            <Section id="interests" title="Interests" isOpen={openSections.interests} onToggle={() => toggleSection('interests')}>
              <p className="font-serif">
                My interests center around the evolution of urban living spaces,
                from historical housing patterns to modern co-living concepts.
                I&apos;m particularly fascinated by how technology is reshaping
                our relationship with the cities we inhabit.
              </p>
              <p className="font-serif">
                I follow developments in proptech, sustainable architecture, and
                community-focused development models that balance efficiency with
                the human element of urban living.
              </p>
            </Section>

            <Section id="skills" title="Skills" alignment="right" isOpen={openSections.skills} onToggle={() => toggleSection('skills')}>
              <h3 className="font-medium mb-4">Areas of Expertise</h3>
              <p className="font-serif">
                Historical research and analysis, urban planning assessment,
                housing market analysis, startup ecosystem engagement, and
                strategic thinking about future urban development patterns.
              </p>
              <p className="font-serif">
                I combine traditional academic research methods with modern data
                analysis approaches to provide comprehensive insights into housing
                and urban development trends.
              </p>
            </Section>

            <div className="mt-[28rem]" aria-hidden="true">
              <RailsBottomGrain height="65vh" scale={2.4} />
            </div>

          </main>
        </div>
      </div>
    </>
  );
}
