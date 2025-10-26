# Deployment Guide

This guide provides step-by-step instructions for deploying your personal website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [x] Updated all content in `src/data/profileData.ts`
- [x] Replaced placeholder images with your actual photos
- [x] Updated the portrait image in `src/components/Hero.tsx`
- [x] Added your CV PDF to `public/assets/`
- [x] Updated canonical URL in `index.html`
- [x] Updated Open Graph and Twitter Card URLs/images in `index.html`
- [x] Tested the website locally with `npm run dev`
- [x] Built the project successfully with `npm run build`
- [x] Verified all links work correctly

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

Netlify offers free hosting with automatic deployments from Git.

#### Steps:

1. **Push your code to GitHub/GitLab/Bitbucket**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Deploy to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider
   - Select your repository

3. **Configure Build Settings**

   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Custom Domain (Optional)**

   - Go to Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration instructions

#### Continuous Deployment:

Every time you push to your main branch, Netlify will automatically rebuild and deploy your site.

### Option 2: Vercel

Vercel offers excellent performance and automatic deployments.

#### Steps:

1. **Push your code to GitHub/GitLab/Bitbucket** (same as above)

2. **Deploy to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "Add New" → "Project"
   - Import your Git repository

3. **Configure Project**

   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

4. **Custom Domain (Optional)**

   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages package**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**

   Add these scripts:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

   Add homepage field (replace with your GitHub username and repo name):

   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

3. **Update vite.config.ts**

   Add base path:

   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**

   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)
   - Save

Your site will be available at `https://yourusername.github.io/your-repo-name`

### Option 4: Traditional Web Hosting (cPanel/FTP)

For shared hosting services.

#### Steps:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload files**

   - Connect to your hosting via FTP/SFTP or cPanel File Manager
   - Navigate to your public_html or www directory
   - Upload all contents from the `dist/` folder
   - Ensure `index.html` is in the root

3. **Configure .htaccess (Apache servers)**

   Create a `.htaccess` file in the root with:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   This ensures all routes work correctly with client-side routing.

### Option 5: Railway

Railway offers modern deployment with automatic HTTPS.

#### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy to Railway**

   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Configure**

   Railway usually auto-detects Vite projects. If not:
   - Build Command: `npm run build`
   - Start Command: Leave empty (static site)

4. **Generate Domain**

   - Click on your deployment
   - Settings → Generate Domain
   - Your site will be available at the generated URL

## Post-Deployment

### Update URLs

After deployment, update these URLs in your code:

1. **index.html** - Update canonical URL and Open Graph URLs
2. **robots.txt** (if created) - Update Sitemap URL

### Verify Deployment

Check these items on your live site:

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works smoothly
- [ ] Contact form validation works
- [ ] Testimonial carousel functions
- [ ] Gallery marquees animate correctly
- [ ] CV downloads successfully
- [ ] Social links open correctly
- [ ] Mobile responsive design works
- [ ] Test on multiple browsers
- [ ] Verify SEO meta tags with [Open Graph Debugger](https://www.opengraph.xyz/)

### Performance Optimization

After deployment, test your site's performance:

1. **Google PageSpeed Insights**
   - Visit [pagespeed.web.dev](https://pagespeed.web.dev)
   - Test your URL
   - Aim for 90+ scores

2. **Lighthouse Audit** (Chrome DevTools)
   - Open DevTools → Lighthouse
   - Run audit for Performance, Accessibility, Best Practices, SEO

### SEO Setup

1. **Submit to Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property
   - Verify ownership
   - Submit sitemap (if created)

2. **Create robots.txt** (Optional)

   Add to `public/robots.txt`:

   ```
   User-agent: *
   Allow: /

   Sitemap: https://yourdomain.com/sitemap.xml
   ```

3. **Test Structured Data**
   - Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
   - Verify JSON-LD schema is detected

## Updating Your Site

### For Git-based deployments (Netlify/Vercel/Railway):

```bash
# Make your changes
git add .
git commit -m "Update content"
git push
```

The site will automatically rebuild and deploy.

### For traditional hosting:

```bash
# Build locally
npm run build

# Upload the updated dist/ folder contents via FTP
```

## Troubleshooting

### Issue: Page shows 404 on refresh

**Solution**: Configure your server to route all requests to `index.html`

- **Netlify**: Create `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

- **Vercel**: Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

### Issue: Images not loading

**Solution**: Verify image paths and ensure images are in `public/` folder

### Issue: CSS not applying

**Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Form submission not working

**Note**: The contact form is currently client-side only. To make it functional:

1. Use a service like [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/)
2. Or implement a backend API with your preferred service

## Security Considerations

- [ ] Don't commit sensitive information to Git
- [ ] Use environment variables for API keys (if needed)
- [ ] Enable HTTPS (most platforms do this automatically)
- [ ] Set up security headers (CSP, X-Frame-Options, etc.)
- [ ] Regular dependency updates: `npm outdated` and `npm update`

## Domain Configuration

If you purchased a custom domain:

1. **Update DNS Records** with your hosting provider
   - Usually requires adding A records or CNAME
   - Follow your hosting platform's specific instructions

2. **Update URLs** in your code
   - index.html meta tags
   - robots.txt
   - JSON-LD schema

3. **Wait for DNS propagation** (can take 24-48 hours)

## Monitoring

Consider setting up:

- **Google Analytics** for traffic insights (privacy-conscious alternative: Plausible)
- **Uptime monitoring** (UptimeRobot, Pingdom)
- **Error tracking** (Sentry) if you add dynamic features

---

Good luck with your deployment! Your professional website is ready to showcase your experience and connect with students and colleagues.
