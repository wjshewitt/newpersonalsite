# Will Hewitt Portfolio - Design System Specification

## Color Palette

### Primary Colors
- **Background**: `#f8f6ee` - Warm cream/off-white (RGB: 248, 246, 238)
- **Foreground/Text**: `#366857` - Deep teal/forest green (RGB: 54, 104, 87)
- **Accent Border**: `#366857` - Same as foreground for consistency

### Secondary/Muted Colors
- **Accent Muted**: `#e6deca` - Warm beige for subtle accents (RGB: 230, 222, 202)

### Gradient Specifications
- **Header Vignette**: Radial gradient creating dark atmospheric border
  - Position: Top center, extending 60-70% down from top
  - Colors: `rgba(0, 0, 0, 0.8)` at edges → `rgba(0, 0, 0, 0)` at center
  - Shape: Elliptical, wider than tall (approximately 150% width, 100% height)
  - Effect: Creates subtle framing and depth at top of page

## Typography

### Font Families
- **Serif (Primary)**: EB Garamond - Used for body text, headings, main content
- **Monospace (Secondary)**: IBM Plex Mono - Used for navigation items, UI labels

### Type Scale
- **Hero Name (H1)**: 48-56px, EB Garamond Regular, centered
- **Navigation Items**: 14-16px, IBM Plex Mono Regular (400), letter-spacing: 0.05em
- **Section Headings (H2)**: 24-28px, EB Garamond Regular
- **Body Text**: 16-18px, EB Garamond Regular, line-height: 1.6-1.8

### Font Weights
- EB Garamond: 400 (Regular)
- IBM Plex Mono: 400 (Regular), 500 (Medium for emphasis)

## Spacing System

### Border Frame
- **Width**: 4px on desktop/tablet
- **Responsive**: Scale to 2px on mobile (<640px)
- **Color**: `#366857`
- **Style**: Solid, consistent on all sides
- **Inner Padding**: 24-32px from border to content

### Layout Spacing
- **Header Padding**: 32-40px vertical
- **Navigation Gap**: 24-32px horizontal between items
- **Section Margins**: 48-64px between major sections
- **Content Max-Width**: 1200px (centered)
- **Content Padding**: 40-60px horizontal inside border

### Component Spacing
- **Underline Offset**: 4px below text baseline
- **Underline Thickness**: 2px
- **Underline Width**: Full width of text

## Layout & Grid

### Container Structure
- **Outer Frame**: Fixed 4px border creating window effect
- **Inner Container**: Centered, max-width constrained
- **Header**: Fixed at top, full-width within frame
- **Content Area**: Scrollable, maintains border frame

### Responsive Breakpoints
- **Desktop**: >1024px - Full layout with 4px borders
- **Tablet**: 640px-1024px - Adjusted spacing, 3px borders
- **Mobile**: <640px - Stacked nav (if needed), 2px borders

## Visual Effects

### Animations/Transitions
- **Navigation Hover**: Underline animates in
  - Duration: 300ms
  - Easing: ease-in-out
  - Transform: scaleX from 0 to 1 (left to right)
  
- **Link Interactions**: Subtle color shift
  - Duration: 200ms
  - Easing: ease

### Shadow/Depth
- Minimal shadow usage; relies on border and gradient for depth
- **Gradient Vignette**: Primary depth mechanism

## Component Styles

### Navigation Bar
- **Layout**: Horizontal flex, centered
- **Alignment**: Name centered, nav items flanking
- **Spacing**: Even distribution, optical centering
- **Active State**: Green underline (2px, full-width)
- **Hover State**: Underline animates in

### Section Headers
- **Style**: Underline decoration
- **Underline**: Extends partial width (160px fixed or 100% of text)
- **Color**: Foreground green
- **Weight**: Regular (maintains elegance)

### Content Sections
- **Background**: Cream throughout
- **Text Color**: Forest green
- **Paragraph Spacing**: 1.5em between paragraphs
- **Reading Width**: 65-75 characters optimal

## Accessibility Considerations

### Contrast Ratios
- Background `#f8f6ee` to Text `#366857`: 5.6:1 (Passes AA)
- Ensure interactive elements have clear focus states

### Focus States
- **Outline**: 2px solid `#366857`
- **Offset**: 2px from element
- **Radius**: Match element border-radius

## Design Intention

**Core Aesthetic**: Sophisticated minimalism meeting classical typography
**Target Audience**: Professional network, potential employers, academic connections
**Mood**: Thoughtful, intellectual, refined, approachable
**Visual Hierarchy**: Name → Navigation → Content sections with clear breathing room
**Inspiration**: High-end editorial design, museum exhibitions, archival presentations
