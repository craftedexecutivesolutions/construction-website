# Design Guidelines for Pacific Stone Builders Website

## Design Approach
**System-Based Approach**: Professional construction industry website requiring trustworthy, accessible design patterns. Using a hybrid approach drawing from established corporate website patterns with custom branded touches for the CNMI market.

## Brand Foundation

**Color Palette** (User-Specified):
- Primary: Deep Ocean Blue (#1B4965) - headers, navigation, trust elements
- Secondary: Warm Coral (#FF6B4A) - CTAs, interactive elements, highlights
- Accent: Sandy Beige (#E8DCC4) - backgrounds, subtle sections
- Neutrals: Charcoal (#2D3436) for footer/text, White (#FFFFFF)

**Typography** (User-Specified):
- Headers: Montserrat Bold - use for all headings (H1-H6)
- Body: Open Sans Regular - all paragraph text, lists, navigation
- Hierarchy: H1 (48px-56px), H2 (36px-42px), H3 (28px-32px), Body (16px-18px)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, and 32 for consistent vertical/horizontal rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-8 for grids, space-y-6 for vertical stacks
- Container max-widths: max-w-7xl for full sections, max-w-4xl for text content

**Grid Patterns**:
- Service Cards: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Featured Projects: 2-column grid (grid-cols-1 lg:grid-cols-2)
- Team Members: 3-column grid
- Statistics: 4-column grid (grid-cols-2 lg:grid-cols-4)
- All grids stack to single column on mobile

## Core Components

**Navigation Header**:
- Fixed/sticky top navigation with logo left, menu items right
- Mobile: Hamburger menu with full-screen overlay
- Logo includes stylized palm tree + building icon
- Navigation links with subtle hover underline effect

**Hero Sections**:
- Full-width hero images with text overlay (left-aligned)
- Height: min-h-[600px] on desktop, min-h-[500px] on mobile
- Overlay: Semi-transparent gradient (ocean blue to transparent) for text readability
- Buttons on images: Apply backdrop-blur-md with semi-transparent background

**Button System**:
- Primary CTA: Coral background, white text, rounded-lg, px-8 py-3
- Secondary: Outlined coral border, coral text
- Neutral: White with subtle border for image overlays
- All buttons: Implement hover scale and shadow transitions

**Card Components**:
- Service/Project cards: Rounded corners (rounded-xl), shadow-md on hover
- Card structure: Image top, content padding p-6, subtle border
- Hover effect: Gentle lift (transform translate-y-1) with shadow increase

**Trust Indicators**:
- Icon-based badges in horizontal row
- Checkmark icons with short text
- Light beige background bar spanning full width

**Section Backgrounds**:
- Alternate between White, Light Beige (#E8DCC4 at 30% opacity), and subtle gray
- Deep Ocean Blue sections use white text with semi-transparent image overlays
- Coral sections for strong CTAs

## Images Specification

**Large Hero Images** (Required on every page):
- Homepage Hero: Construction workers in tropical setting, diverse team, safety gear, palm trees, golden hour lighting
- About Hero: Team photo with ocean visible, smiling crew
- Services Hero: Wide construction site shot, multiple activities
- Projects Hero: Completed building showcase
- Certifications Hero: Professional certification documentation or building exterior
- Contact Hero: Office building or team in office setting

**Section Images**:
- Commercial Construction: Modern hotel/resort with tropical landscaping
- Residential: Island home with ocean view, modern tropical architecture
- Government Projects: School or public facility with American flag
- Team Members: Professional headshots with island/office backgrounds
- Community Involvement: Team volunteering at beach cleanup or community event

**Image Treatment**:
- All images: High quality, professional photography aesthetic
- Hero overlays: Gradient from ocean blue (60% opacity) to transparent
- Card images: Subtle zoom on hover
- Featured projects: Corner overlay with project details

## Typography Hierarchy

**Headers**:
- H1: Montserrat Bold, 48px lg:56px, leading-tight, tracking-tight
- H2: Montserrat Bold, 36px lg:42px, leading-tight
- H3: Montserrat Bold, 24px lg:28px
- Section titles: H2 with bottom border accent in coral

**Body Text**:
- Paragraph: Open Sans Regular, 16px lg:18px, leading-relaxed
- Lists: Open Sans with checkmark icons (✓) in coral
- Stats/Numbers: Montserrat Bold for large numbers, Open Sans for labels

## Footer Design

**Layout**: 4-column grid (stacks to 1 column mobile)
- Charcoal background, white text
- Column 1: Logo and license info
- Column 2: Quick links
- Column 3: Services list
- Column 4: Contact details with icons
- Bottom bar: Copyright, legal links, equal opportunity statement
- Social icons: Facebook, Instagram, LinkedIn in white

## Responsive Behavior

**Breakpoints**:
- Mobile: Base (< 768px) - single column, stacked elements
- Tablet: md (768px+) - 2-column grids, larger text
- Desktop: lg (1024px+) - full multi-column layouts
- Large: xl (1280px+) - maximum container width, optimized spacing

**Mobile Optimizations**:
- Hero text: Reduce font sizes by 30-40%
- Navigation: Full-screen hamburger menu
- Grids: All stack to single column
- Stats: 2x2 grid instead of 4 across
- Footer: Single column with clear section breaks

## Animation Guidelines

**Minimal, Purposeful Animations**:
- Page load: Subtle fade-in for hero content only
- Scroll: Intersection observer for section fade-ins (optional, very subtle)
- Hover: Gentle card lift, button scale (1.02), image zoom (1.05)
- Navigation: Smooth dropdown/mobile menu slide
- No parallax effects, no complex scroll animations

## Accessibility Requirements

- Maintain WCAG AA contrast ratios (ocean blue on white, white on ocean blue)
- All interactive elements: Visible focus states with coral outline
- Form inputs: Clear labels, error states in red with descriptive text
- Skip navigation link for keyboard users
- Alt text for all images describing construction context
- Semantic HTML structure throughout