# Project Structure

This document provides an overview of the project structure and the purpose of each file and directory.

## Directory Structure

```
project/
├── public/                          # Static assets served directly
│   └── assets/
│       └── cv-prof-rajesh-kumar.pdf # CV download file (replace with actual PDF)
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Header.tsx              # Sticky navigation with hamburger menu
│   │   ├── Hero.tsx                # Hero section with typewriter effect
│   │   ├── About.tsx               # About/Bio section with scroll animations
│   │   ├── Experience.tsx          # Timeline of professional experience
│   │   ├── Impact.tsx              # Stats counters and success stories
│   │   ├── Testimonials.tsx        # Carousel of testimonials
│   │   ├── Gallery.tsx             # Marquee photo strips
│   │   ├── Contact.tsx             # Contact form with validation
│   │   └── Footer.tsx              # Footer with links and social media
│   ├── data/
│   │   └── profileData.ts          # Central data configuration file
│   ├── App.tsx                      # Main app component with JSON-LD schema
│   ├── main.tsx                     # Application entry point
│   ├── index.css                    # Global styles and animations
│   └── vite-env.d.ts               # Vite type definitions
├── dist/                            # Production build output (generated)
├── node_modules/                    # Dependencies (generated)
├── index.html                       # HTML entry point with SEO meta tags
├── package.json                     # Project dependencies and scripts
├── package-lock.json               # Locked dependency versions
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # App-specific TypeScript config
├── tsconfig.node.json              # Node-specific TypeScript config
├── vite.config.ts                  # Vite build configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── eslint.config.js                # ESLint configuration
├── .gitignore                      # Git ignore rules
├── .env                            # Environment variables
├── README.md                       # Main documentation
├── ACCESSIBILITY.md                # Accessibility features and testing
├── DEPLOYMENT.md                   # Deployment instructions
└── PROJECT_STRUCTURE.md            # This file
```

## Key Files Explained

### Configuration Files

#### `package.json`
Defines project metadata, dependencies, and scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

#### `vite.config.ts`
Vite build tool configuration. Includes React plugin.

#### `tailwind.config.js`
Tailwind CSS configuration. Can be extended for custom colors, fonts, etc.

#### `tsconfig.json`
TypeScript compiler settings for strict type checking and modern JavaScript features.

### Source Files

#### `src/main.tsx`
Application entry point. Renders the React app into the DOM.

#### `src/App.tsx`
Main application component that:
- Assembles all page sections
- Injects JSON-LD structured data for SEO
- Provides overall page structure

#### `src/index.css`
Global styles including:
- Tailwind CSS imports
- Custom animations (fade-in, portrait animation)
- Marquee gallery animations
- Reduced motion media queries
- Focus styles
- Responsive utilities

#### `src/data/profileData.ts`
**Most important file for customization!**

Contains all website content:
- Personal information (name, title, tagline)
- Biography and quick facts
- Education history
- Professional experience
- Impact statistics and success stories
- Testimonials
- Gallery photo references
- Contact information
- Social media links
- CV download link

**To customize the website, edit this file first!**

### Components

Each component is self-contained and follows React best practices:

#### `Header.tsx`
- Sticky navigation bar
- Active section highlighting
- Hamburger menu for mobile
- Smooth scroll to sections

Key features:
- Tracks scroll position
- Highlights current section in view
- Mobile-responsive with hamburger menu
- ARIA labels for accessibility

#### `Hero.tsx`
- Large hero section
- Typewriter effect for tagline
- Animated portrait image
- CTA buttons (Get in Touch, Download CV)

Key features:
- Respects reduced motion preference
- Word-by-word typewriter animation
- Portrait scale animation
- Responsive layout (stacks on mobile)

#### `About.tsx`
- Two-column layout (bio + quick facts)
- Education timeline
- Scroll-triggered animations

Key features:
- IntersectionObserver for scroll animations
- Staggered animation delays
- Quick facts with icons
- Responsive grid layout

#### `Experience.tsx`
- Professional timeline
- Alternating left/right layout on desktop
- Slide-in animations

Key features:
- Timeline visualization with center line
- Achievement bullet points
- Scroll-triggered animations
- Mobile-friendly stacked layout

#### `Impact.tsx`
- Animated counters for statistics
- Success story cards
- Hover effects

Key features:
- Counters animate when scrolled into view
- Once-only animation (doesn't repeat)
- Card hover lift effect
- Icon integration

#### `Testimonials.tsx`
- Carousel with auto-play
- Manual navigation controls
- Pause on interaction

Key features:
- Auto-advances every 5 seconds
- Previous/Next buttons
- Dot indicators
- Accessible carousel controls
- Pauses on manual interaction

#### `Gallery.tsx`
- Two marquee strips
- College photos (left → right)
- Family photos (right → left)

Key features:
- Continuous infinite scroll
- Pause on hover
- Touch-scrollable on mobile
- Respects reduced motion
- Duplicated images for seamless loop

#### `Contact.tsx`
- Contact information display
- Form with validation
- Google Maps embed
- Honeypot spam protection

Key features:
- Real-time validation
- Clear error messages
- Required field indicators
- Success feedback
- Accessible form labels
- Touch-friendly on mobile

#### `Footer.tsx`
- Quick navigation links
- Social media icons
- Contact info
- Copyright notice

Key features:
- Smooth scroll navigation
- External links open in new tab
- CV download link
- Consistent styling

## Data Flow

1. **profileData.ts** → Contains all content
2. **Components** → Import and display data from profileData
3. **App.tsx** → Assembles components and adds SEO schema
4. **main.tsx** → Renders App to DOM

## Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Responsive design with breakpoints
- Used inline in components

### Custom CSS
- Global styles in `index.css`
- Animations and keyframes
- Marquee implementation
- Reduced motion support

## Animations

### Implemented Animations

1. **Typewriter Effect** (Hero)
   - Word-by-word reveal
   - 150ms per word
   - Respects reduced motion

2. **Portrait Animation** (Hero)
   - Fade in + scale
   - 1s duration
   - Starts at scale(0.95)

3. **Scroll Animations** (About, Experience, Impact)
   - IntersectionObserver triggers
   - Opacity + translateY
   - Staggered delays

4. **Counters** (Impact)
   - Animate numbers from 0 to target
   - 2s duration, 60 steps
   - Easing effect

5. **Marquee** (Gallery)
   - CSS transform animations
   - 25s loop duration
   - Pause on hover

6. **Card Hovers** (Impact cards)
   - translateY(-6px)
   - Shadow increase
   - 200ms transition

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce`:
- Instant transitions (0.01ms)
- No auto-scrolling marquees
- Immediate state changes
- Hover effects preserved (user-initiated)

## Responsive Breakpoints

- **360px+**: Small phones (portrait)
- **480px+**: Larger phones (portrait)
- **768px+**: Tablets (portrait)
- **1024px+**: Tablets (landscape) and desktop

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Screen reader friendly
- Color contrast compliant (WCAG AA)
- Touch targets >= 44px
- Reduced motion support

See `ACCESSIBILITY.md` for complete details.

## SEO Features

### Meta Tags (index.html)
- Title tag
- Description
- Keywords
- Author
- Canonical URL
- Open Graph tags (Facebook)
- Twitter Card tags
- Theme color

### JSON-LD Schema (App.tsx)
- Person schema
- Organization references
- Social media profiles
- Contact information

### Performance
- Lazy loading images
- Preconnect to external domains
- Optimized build output
- Minimal JavaScript

## Build Process

1. **Development**: `npm run dev`
   - Hot module replacement
   - Fast refresh
   - Source maps

2. **Production**: `npm run build`
   - TypeScript compilation
   - Tree shaking
   - Minification
   - CSS optimization
   - Asset hashing

3. **Output**: `dist/` folder
   - index.html
   - assets/ (CSS, JS, images)
   - Ready to deploy

## Customization Guide

### Quick Changes (No Code)

Edit `src/data/profileData.ts` to change:
- Name, title, tagline
- Biography
- Education
- Experience entries
- Statistics
- Testimonials
- Contact info
- Social links

### Visual Changes (Some Code)

1. **Colors**: Search and replace hex codes in components
   - Navy: `#0f2a44`
   - Beige: `#f6f2ea`
   - Teal: `#2aa79b`

2. **Fonts**: Update Tailwind config or add Google Fonts in index.html

3. **Layout**: Modify component JSX structure

### Advanced Changes

1. **Add Sections**: Create new component and import in App.tsx
2. **Change Animations**: Modify CSS in index.css
3. **Add Features**: Extend components with new functionality

## Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM rendering
- `typescript` - Type safety

### Dev Tools
- `vite` - Build tool
- `@vitejs/plugin-react` - React support for Vite
- `tailwindcss` - Utility CSS framework
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes
- `eslint` - Code linting
- `typescript-eslint` - TypeScript linting

### UI
- `lucide-react` - Icon library

All dependencies are modern, actively maintained, and production-ready.

## Future Enhancements

Possible additions:

1. **Blog Section**: Add a blog with MDX or markdown
2. **Backend Integration**: Connect contact form to email service
3. **CMS**: Add headless CMS (Sanity, Contentful, Strapi)
4. **Analytics**: Integrate Google Analytics or Plausible
5. **Internationalization**: Add multi-language support
6. **Dark Mode**: Implement theme toggle
7. **Search**: Add site-wide search
8. **Comments**: Add comment system to testimonials

## Support Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org
- Lucide Icons: https://lucide.dev

---

This project is designed to be easily customizable while maintaining professional quality, accessibility, and performance standards.
