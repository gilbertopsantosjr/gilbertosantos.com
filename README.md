# Gilberto Santos - Software Engineer Consultant Landing Page

A premium, conversion-focused landing page built with Next.js 15, showcasing Gilberto Santos as a Principal Software Engineer specializing in Micro-SaaS development.

## Features

- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Premium Design**: Sophisticated fintech-inspired aesthetic with custom design system
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **Font Awesome Icons**: Professional iconography throughout
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Focused**: Optimized for Core Web Vitals

## Design System

The landing page follows a comprehensive design system defined in `design.json` with:

- **Color Palette**: Royal purple primary (#4C40F7) with warm accent colors
- **Typography**: Crimson Pro for display headings, DM Sans for body text
- **Spacing**: Generous whitespace with consistent rhythm
- **Components**: Reusable cards, buttons, and UI elements
- **Animations**: Subtle fade-in and hover effects

## Sections

1. **Hero Section**: Compelling headline with value propositions and CTAs
2. **Why Work With Me**: Positioning as a product architect, not just a developer
3. **What You Get**: Services and capabilities overview
4. **How It Works**: 4-step process from idea to launch
5. **Why Different**: Unique value proposition and expertise
6. **Proof & Credibility**: Testimonials and stats
7. **Portfolio Showcase**: 5 project examples with technologies used
8. **Who This Is For**: Target audience qualification
9. **Why Not Cheap**: Value proposition and pricing justification
10. **Pricing**: Three clear tiers (Blueprint, MVP Launch, Scale & Grow)
11. **Final CTA**: Contact section with clear call-to-action
12. **Footer**: Complete footer with links and social media

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
gilberto-santos-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page with all sections
│   └── globals.css         # Global styles and Tailwind utilities
├── public/
│   └── images/             # Portfolio project images (SVG)
├── tailwind.config.ts      # Tailwind configuration with design system
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Updating Content

Edit the content directly in `app/page.tsx`. Each section is clearly marked with comments.

### Changing Colors

Update the color palette in `tailwind.config.ts` under `theme.extend.colors`.

### Modifying Typography

Fonts are configured in `app/layout.tsx`. Current fonts:
- **Display**: Crimson Pro (headings)
- **Body**: DM Sans (text)

### Adding New Sections

Follow the existing pattern in `app/page.tsx`:

```typescript
function NewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section">
      {/* Section content */}
    </section>
  )
}
```

## Performance Optimization

- **Image Optimization**: SVG images for crisp graphics at any size
- **Font Loading**: Google Fonts with display swap for fast text rendering
- **Code Splitting**: Next.js automatic code splitting
- **Lazy Loading**: Framer Motion animations trigger on viewport entry

## SEO Features

- Comprehensive meta tags in `app/layout.tsx`
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Structured data ready
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Font Awesome**: Icon library

## Contact

For questions or support:

- **Email**: chat@gilbertosantos.com
- **LinkedIn**: [@gilbertopsantosjr](https://linkedin.com/in/gilbertopsantosjr)

## License

© 2026 Gilberto Santos. All rights reserved.
