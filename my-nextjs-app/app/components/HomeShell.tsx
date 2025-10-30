import Navigation from "./Navigation";
import Section from "./Section";

export default function HomeShell() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Fixed border frame */}
      <div className="fixed inset-0 pointer-events-none border-[8px] md:border-[6px] sm:border-[4px] border-foreground z-50" />

      {/* Main content */}
      <div className="min-h-screen py-8 relative bg-[#F8F6EE]">
        {/* Vertical decorative lines */}
        <div className="absolute top-0 bottom-0 left-[11%] w-[4px] bg-foreground z-40" />
        <div className="absolute top-0 bottom-0 right-[11%] w-[4px] bg-foreground z-40" />

        
        <Navigation />

        <main className="relative z-10" id="main-content">
          <Section id="bio" title="Who am I?">
            <p className="font-serif">
              A 21-year-old history grad based in London. I&apos;m interested in
              housing, planning, startups, private markets, and anything else
              derivative of or related to those things. I particularly enjoy
              reading, learning, questioning things, and research. When I can, I
              like to tinker with boats, sail them, climb things, watch
              motorsport, code projects and cross-country run
            </p>
          </Section>

          <Section id="experience" title="Experience" alignment="right">
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

          <Section id="interests" title="Interests">
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

          <Section id="skills" title="Skills" alignment="right">
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
        </main>
      </div>
    </>
  );
}
