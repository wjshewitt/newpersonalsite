"use client";

import { useState, useRef, useEffect } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  alignment?: 'left' | 'right';
  isOpen: boolean;
  onToggle: () => void;
}

export default function Section({ id, title, children, alignment = 'left', isOpen, onToggle }: SectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleWidth, setTitleWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [title]);

  // Calculate the exact center position for the title
  const centerPosition = containerWidth > 0 && titleWidth > 0 ? (containerWidth - titleWidth) / 2 : 0;
  
  const alignmentClasses = {
    container: alignment === 'right' ? 'items-end' : 'items-start',
    title: '', // Will be handled by inline styles
    underline: alignment === 'right' ? 'right-0' : 'left-0',
  };

  return (
    <section id={id} className="py-12 md:py-16 relative overflow-x-hidden">
      <div style={{ marginLeft: "calc(11% + 4px)", marginRight: "calc(11% + 4px)" }} className="overflow-x-hidden">
        <button
          onClick={onToggle}
          className="text-left group w-full"
          aria-expanded={isOpen}
        >
          <div
            ref={containerRef}
            className={`relative w-full flex ${alignmentClasses.container} flex-col`}
          >
            <h2 
              ref={titleRef} 
              className="text-2xl md:text-3xl font-sans mb-6 group-hover:opacity-70 transition-all duration-1000 ease-in-out cursor-pointer inline-block"
              style={{
                marginLeft: isOpen 
                  ? `${centerPosition}px` 
                  : (alignment === 'right' ? 'auto' : '0'),
                marginRight: isOpen 
                  ? `${centerPosition}px` 
                  : (alignment === 'right' ? '0' : 'auto'),
              }}
            >
              {title}
            </h2>
            <div
              className={`border-b-4 border-foreground transition-all duration-1000 ease-in-out absolute top-[calc(100%-8px)] ${alignmentClasses.underline}`}
              style={{ width: isOpen ? "100%" : `${titleWidth + 80}px` }}
            />
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}