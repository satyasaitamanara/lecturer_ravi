# Commerce Lecturer Personal Website

A clean, professional, mobile-responsive personal website for Prof. Rajesh Kumar, a senior Commerce lecturer with 18+ years of teaching experience and 5+ years as Principal at Chaitanya Degree College, Kotananduru.

## Features

- **Mobile-First Responsive Design**: Optimized for all screen sizes (360px+, 480px+, 768px+, 1024px+)
- **Professional Color Theme**: Soft navy (#0f2a44), warm beige (#f6f2ea), accent teal (#2aa79b)
- **Smooth Animations**: Typewriter effects, scroll animations, hover effects, and animated counters
- **Accessibility-Friendly**: WCAG AA compliant with semantic HTML, ARIA labels, and keyboard navigation
- **SEO Optimized**: JSON-LD schema, meta tags, Open Graph, and Twitter Card support
- **Interactive Gallery**: Marquee photo strips with college photos (left→right) and family photos (right→left)
- **Testimonials Carousel**: Auto-playing carousel with manual controls
- **Contact Form**: Validated form with spam protection

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **CSS Animations** for smooth transitions and effects

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Customizing Content

All content is centralized in `src/data/profileData.ts`. Update this file to personalize the website:

### Basic Information

```typescript
name: "Your Full Name"
title: "Your Title"
tagline: "Your tagline"
heroStats: "Your stats"
```

### Biography

Update `bio.summary`, `bio.detailedBio`, and `bio.quickFacts` with your information.

### Education

Add or modify education entries:

```typescript
education: [
  {
    degree: "Degree Name",
    institution: "Institution Name",
    year: "Year"
  },
  // Add more entries...
]
```

### Professional Experience

Update the `experience` array with your career history. Each entry should include:

```typescript
{
  years: "2018 – Present",
  role: "Your Role",
  institution: "Institution Name",
  description: "Brief description",
  achievements: ["Achievement 1", "Achievement 2"]
}
```

### Impact Statistics

Modify the stats in `impact.stats`:

```typescript
stats: [
  { label: "Students Taught", value: 20000, suffix: "+" },
  // Modify or add more stats...
]
```

### Case Studies

Update `impact.caseStudies` with your success stories. Available icons: `GraduationCap`, `TrendingUp`, `Heart`, `Users`

### Testimonials

Modify the testimonials array with real quotes:

```typescript
testimonials: [
  {
    quote: "The testimonial text",
    name: "Person Name",
    role: "Their Role",
    image: "filename.jpg"
  }
]
```

### Gallery Photos

Replace placeholder images by updating the `gallery` section:

```typescript
collegePhotos: [
  { src: "college-1.webp", alt: "Description" },
  // Add more photos...
],
familyPhotos: [
  { src: "family-1.webp", alt: "Description" },
  // Add more photos...
]
```

Place your actual images in the `public/` folder.

### Contact Information

Update contact details:

```typescript
contact: {
  email: "your-email@example.com",
  phone: "+91 XXXXXXXXXX",
  address: "Your Address",
  mapEmbedUrl: "Your Google Maps embed URL"
}
```

To get a Google Maps embed URL:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

### Social Links

```typescript
social: {
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
  facebook: "https://facebook.com/yourprofile"
}
```

## Adding Your Photos

1. Place your portrait photo in `public/` folder
2. Update the image src in `src/components/Hero.tsx` (line with img src)
3. For gallery photos:
   - Add college photos as `public/college-1.webp`, `college-2.webp`, etc.
   - Add family photos as `public/family-1.webp`, `family-2.webp`, etc.
   - Update the image sources in `src/components/Gallery.tsx`

**Recommended image formats**: WebP for web, JPEG as fallback
**Recommended sizes**:
- Portrait: 400x400px (square)
- Gallery photos: 600x400px (landscape)

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Deployment Options

### Netlify

1. Push your code to GitHub/GitLab
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub/GitLab
2. Import project to Vercel
3. Build command: `npm run build`
4. Output directory: `dist`

### Traditional Hosting

1. Run `npm run build`
2. Upload the contents of `dist/` folder to your web server
3. Configure your web server to serve the `index.html` for all routes

## Accessibility Features

This website follows WCAG AA standards:

- ✅ Semantic HTML5 elements
- ✅ Proper heading hierarchy
- ✅ Alt text for all images
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible styles
- ✅ Color contrast ratios meet AA standards
- ✅ Touch targets >= 44px
- ✅ Respects `prefers-reduced-motion` preference

## Animation Behavior

### Normal Motion Preference

- Typewriter effect on hero subtitle
- Smooth scroll animations on section reveals
- Card hover animations
- Animated counters
- Auto-scrolling marquee galleries

### Reduced Motion Preference

When users have `prefers-reduced-motion: reduce` enabled:
- Animations are disabled or significantly reduced
- Typewriter effect shows immediately
- Marquee galleries become user-controlled scrollable areas
- All transitions are instant

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimization

- Lazy loading for images
- Responsive images with srcset
- Minimal JavaScript
- CSS animations (GPU-accelerated)
- Preconnect to external domains

## Customizing Colors

Colors are defined throughout the components. Main colors:

- **Primary (Navy)**: `#0f2a44`
- **Background (Beige)**: `#f6f2ea`
- **Accent (Teal)**: `#2aa79b`

To change colors, search and replace throughout the components or extend Tailwind config.

## Marquee Gallery Implementation

The gallery features two marquee strips:

1. **College Photos**: Move left → right continuously
2. **Family Photos**: Move right → left continuously

Features:
- Pause on hover/focus
- Touch-scrollable on mobile
- Respects reduced-motion preference
- Seamless infinite loop using duplicated images

CSS implementation in `src/index.css` (lines 60-159).

## License

This project is provided as-is for personal use.

## Support

For issues or questions about customization, refer to:
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev

---

**Built with care for excellence in education**
