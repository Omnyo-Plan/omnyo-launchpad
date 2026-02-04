# Omnyo Marketing Site

Static marketing website for Omnyo, built with React, Vite, TypeScript, and Tailwind CSS.

## Requirements
- Node.js 20+
- npm 9+

## Local Development
```sh
npm ci
npm run dev
```

## Build
```sh
npm run build
```

The build step prerenders public routes and generates `sitemap.xml` and `robots.txt` into `dist/`.

## Environment Variables
Required:
- `VITE_WEB3FORMS_ACCESS_KEY`
- `VITE_SITE_URL` (production canonical origin, e.g. `https://myomnio.com`)

Optional:
- `VITE_BASE_PATH` (GitHub Pages repo subpath, e.g. `/your-repo/`)
- `VITE_GOOGLE_SITE_VERIFICATION`
- `VITE_BING_SITE_VERIFICATION`
- `VITE_GA4_ID`
- `VITE_PRERENDER` (set to `false` to skip prerender during build)

## Deployment
Deploy `dist/` to static hosting (GitHub Pages). Ensure the build environment sets `VITE_SITE_URL` and any verification or analytics variables used in production.
