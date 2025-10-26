# Quick Start Guide

Get your personal website up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 3. Customize Your Content

Open `src/data/profileData.ts` and update:

### Basic Info
```typescript
name: "Your Full Name"
title: "Your Job Title"
tagline: "Your tagline"
```

### Contact Info
```typescript
contact: {
  email: "your-email@example.com",
  phone: "+91 XXXXXXXXXX",
  address: "Your Address"
}
```

### Social Links
```typescript
social: {
  linkedin: "your-linkedin-url",
  twitter: "your-twitter-url",
  facebook: "your-facebook-url"
}
```

## 4. Add Your Photos

### Portrait Photo
1. Add your photo to `public/` (e.g., `public/my-photo.jpg`)
2. Open `src/components/Hero.tsx`
3. Find the `<img src=` line (around line 59)
4. Replace the URL with `/my-photo.jpg`

### Gallery Photos
1. Add college photos: `public/college-1.webp`, `college-2.webp`, etc.
2. Add family photos: `public/family-1.webp`, `family-2.webp`, etc.
3. Open `src/components/Gallery.tsx`
4. Update the image sources in the map functions

### CV File
Replace `public/assets/cv-prof-rajesh-kumar.pdf` with your actual CV PDF.

## 5. Test Your Changes

The dev server hot-reloads automatically. Check:
- ✅ All sections display correctly
- ✅ Images load properly
- ✅ Navigation works
- ✅ Mobile view looks good (resize browser)

## 6. Build for Production

```bash
npm run build
```

This creates a `dist/` folder with your production-ready website.

## 7. Deploy

Choose one:

### Option A: Netlify (Easiest)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect GitHub repo
4. Click Deploy
5. Done! Get your URL

### Option B: Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub repo
4. Click Deploy
5. Done! Get your URL

### Option C: Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` contents to your web server
3. Done!

See `DEPLOYMENT.md` for detailed instructions.

## Common Questions

### How do I change colors?
Search and replace these hex codes in component files:
- Navy: `#0f2a44`
- Beige: `#f6f2ea`
- Teal: `#2aa79b`

### How do I add more experience entries?
Edit the `experience` array in `src/data/profileData.ts`. Copy an existing entry and modify it.

### How do I update my Google Maps location?
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click Share → Embed a map
4. Copy the iframe src URL
5. Paste it in `profileData.ts` under `contact.mapEmbedUrl`

### How do I test on mobile?
1. Start dev server: `npm run dev`
2. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On mobile, visit `http://YOUR-IP:5173`
4. Or use Chrome DevTools (F12) → Toggle device toolbar

### The contact form doesn't send emails
The form is client-side only. To make it send emails:
1. Use [Formspree](https://formspree.io) (easiest)
2. Or use Netlify Forms
3. Or connect to your own backend

See `DEPLOYMENT.md` for setup instructions.

## Need More Help?

- **Full Documentation**: See `README.md`
- **Accessibility**: See `ACCESSIBILITY.md`
- **Deployment Details**: See `DEPLOYMENT.md`
- **Project Structure**: See `PROJECT_STRUCTURE.md`

## Pro Tips

1. **Test Regularly**: Check your site after each major change
2. **Use Git**: Commit your changes frequently
3. **Backup**: Keep backups of your customizations
4. **Mobile First**: Always test mobile view
5. **Accessibility**: Test with keyboard navigation (Tab key)
6. **Performance**: Keep images optimized (use WebP format)
7. **SEO**: Update meta tags in `index.html` after deployment

## Checklist Before Launch

- [ ] Updated all content in profileData.ts
- [ ] Replaced portrait photo
- [ ] Added gallery photos
- [ ] Uploaded CV PDF
- [ ] Updated contact information
- [ ] Updated social media links
- [ ] Tested on mobile
- [ ] Tested all navigation links
- [ ] Verified form validation
- [ ] Built successfully (`npm run build`)
- [ ] Updated meta tags in index.html
- [ ] Chosen deployment platform
- [ ] Deployed and tested live site

---

Congratulations! Your professional website is ready to showcase your career and connect with students and colleagues worldwide.
