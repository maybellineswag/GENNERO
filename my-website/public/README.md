# Public Assets Directory

This directory contains static assets that are served directly by Next.js.

## Hero Image

**Upload your hero image here with the name: `hero-image.jpg`**

The hero image should be:
- High quality (recommended: 1920x1080px or larger)
- Optimized for web (compressed but maintaining quality)
- Format: JPG, PNG, or WebP
- Shows the team of medical professionals or represents the clinic

### Supported Formats:
- `.jpg` / `.jpeg`
- `.png`
- `.webp` (recommended for best performance)

### Current Image Path:
The Hero component is currently looking for: `/hero-image.jpg`

If you upload a file with a different name or format, update the `src` prop in `sections/Hero.tsx`:
```tsx
<Image
  src="/your-image-name.jpg"  // Update this path
  alt="Tým lékařek GENNERO kliniky"
  ...
/>
```

## Other Static Assets

You can also place other static assets here:
- Favicon
- Logo images
- Icons
- Other images needed for the site

All files in this directory are accessible via the root URL path (e.g., `/hero-image.jpg`).

