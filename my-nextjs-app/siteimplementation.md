# Will Hewitt Portfolio - Implementation Guide

## Implementation Overview

This is a single-page application with fixed navigation and scrollable content sections. Built with Next.js 14+, TypeScript, and Tailwind CSS v4.

## Step-by-Step Implementation

### 1. Foundation Setup

**Already Complete:**
- ✓ Next.js project initialized
- ✓ Tailwind CSS v4 configured
- ✓ Fonts loaded (EB Garamond, IBM Plex Mono)
- ✓ CSS variables defined in globals.css
- ✓ Base layout configured

### 2. Component Architecture

**Components to Build:**
```
app/
├── components/
│   ├── HomeShell.tsx (existing - needs update)
│   ├── Navigation.tsx (new)
│   ├── Hero.tsx (new)
│   ├── Section.tsx (new)
│   └── GradientVignette.tsx (new)
```

### 3. Border Frame Implementation

**Create outer frame container:**
```tsx
// In HomeShell.tsx or new BorderFrame.tsx
<div className="fixed inset-0 pointer-events-none border-[4px] md:border-[3px] sm:border-[2px] border-foreground z-50" />
```

**Adjust main content padding:**
```tsx
<main className="px-8 md:px-12 lg:px-16 py-8 md:py-12">
  {/* Content here */}
</main>
```

### 4. Gradient Vignette Component

**Create atmospheric top gradient:**
```tsx
// components/GradientVignette.tsx
export default function GradientVignette() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[60vh] pointer-events-none z-40"
         style={{
           background: 'radial-gradient(ellipse 150% 100% at 50% 0%, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 70%)'
         }}
    />
  );
}
```

**Alternative approach** (if using fixed images):
```tsx
<div className="fixed top-0 left-0 right-0 h-[60vh] pointer-events-none z-40">
  <Image 
    src="/gradient-vignette.png" 
    alt="" 
    fill 
    className="object-cover object-top opacity-75"
    priority
  />
</div>
```

### 5. Navigation Component

**Structure:**
```tsx
// components/Navigation.tsx
export default function Navigation() {
  const navItems = ['Bio', 'Experience', 'Interests', 'Skills'];
  
  return (
    <nav className="sticky top-8 z-30 py-8 md:py-12">
      <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
        <a href="#bio" className="font-sans text-sm uppercase tracking-wider nav-link">Bio</a>
        <a href="#experience" className="font-sans text-sm uppercase tracking-wider nav-link">Experience</a>
        
        {/* Hero name as centerpiece */}
        <h1 className="text-5xl md:text-6xl font-serif px-8">Will Hewitt</h1>
        
        <a href="#interests" className="font-sans text-sm uppercase tracking-wider nav-link">Interests</a>
        <a href="#skills" className="font-sans text-sm uppercase tracking-wider nav-link">Skills</a>
      </div>
    </nav>
  );
}
```

### 6. Navigation Hover/Active States

**Add to globals.css:**
```css
.nav-link {
  position: relative;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--foreground);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}
```

### 7. Section Component

**Reusable section with styled heading:**
```tsx
// components/Section.tsx
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 md:py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 pb-2 border-b-2 border-foreground inline-block">
        {title}
      </h2>
      <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}
```

### 8. Main Layout Structure

**Update HomeShell.tsx:**
```tsx
import GradientVignette from './GradientVignette';
import Navigation from './Navigation';
import Section from './Section';

export default function HomeShell() {
  return (
    <>
      {/* Fixed decorative elements */}
      <GradientVignette />
      <div className="fixed inset-0 pointer-events-none border-[4px] md:border-[3px] sm:border-[2px] border-foreground z-50" />
      
      {/* Main content */}
      <div className="min-h-screen px-8 md:px-12 lg:px-16 py-8">
        <Navigation />
        
        <main className="relative z-10" id="main-content">
          <Section id="bio" title="Who am I?">
            <p>[Bio content]</p>
          </Section>
          
          <Section id="experience" title="Experience">
            <p>[Experience content]</p>
          </Section>
          
          <Section id="interests" title="Interests">
            <p>[Interests content]</p>
          </Section>
          
          <Section id="skills" title="Skills">
            <p>[Skills content]</p>
          </Section>
        </main>
      </div>
    </>
  );
}
```

### 9. Responsive Behavior

**Navigation on mobile:**
- Keep horizontal layout if space permits
- Name remains centered as anchor
- Reduce font sizes: `text-xs` for nav items
- Stack vertically only on very small screens (<480px)

**Border scaling:**
- Desktop (>1024px): 4px
- Tablet (640-1024px): 3px  
- Mobile (<640px): 2px

**Typography scaling:**
- Use Tailwind responsive prefixes: `text-base md:text-lg lg:text-xl`
- Maintain proportions at all breakpoints

### 10. Smooth Scrolling & Active States

**Add scroll behavior:**
```css
/* globals.css */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 120px;
}
```

**Implement active section detection:**
```tsx
// Use intersection observer to track visible section
// Update nav link with 'active' class when section is in view
```

### 11. Performance Optimizations

- Use `next/image` for any images (gradient vignette if using image)
- Lazy load content sections below fold
- Optimize font loading with `font-display: swap`
- Minimize layout shift with fixed header height

### 12. Accessibility Implementation

**Focus states:**
```css
.nav-link:focus-visible {
  outline: 2px solid var(--foreground);
  outline-offset: 4px;
  border-radius: 2px;
}
```

**Skip link:**
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

**ARIA labels:**
- Add `aria-current="page"` to active nav item
- Use semantic HTML (`<nav>`, `<section>`, `<h1>`, etc.)

### 13. Testing Checklist

- [ ] Border frame displays correctly on all screen sizes
- [ ] Gradient vignette creates proper atmospheric effect
- [ ] Navigation underline animations work smoothly
- [ ] Active section detection updates nav correctly
- [ ] Smooth scrolling with proper offset
- [ ] Responsive breakpoints adjust properly
- [ ] Typography scales appropriately
- [ ] Focus states visible for keyboard navigation
- [ ] Color contrast meets WCAG AA standards
- [ ] No layout shift on load

### 14. Build Order

1. Update globals.css with navigation styles and scroll behavior
2. Create GradientVignette component (or prepare gradient image)
3. Create BorderFrame as fixed overlay
4. Build Navigation component with hover states
5. Build Section component with styled headings
6. Compose HomeShell with all components
7. Add content to sections
8. Implement active section detection
9. Test responsive behavior at all breakpoints
10. Verify accessibility with keyboard and screen reader

### 15. Optional Enhancements

- Fade-in animations for sections on scroll
- Parallax effect on gradient vignette
- Cursor trail or subtle interactive elements
- Dark mode toggle (invert colors maintaining aesthetic)
- Print stylesheet for CV export

## Technical Notes

- **Z-index hierarchy**: Gradient (40) → Navigation (30) → Content (10) → Border (50)
- **Color variables**: Maintained in CSS custom properties for easy theming
- **Font loading**: Already optimized with Next.js Google Fonts
- **Tailwind v4**: Using `@import "tailwindcss"` and `@theme inline` syntax
