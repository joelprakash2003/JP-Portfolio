# Joel Prakash Portfolio - Deployment Guide

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm run start
```

## 📦 Deployment Options

### Option 1: GitHub Pages
1. Ensure `next.config.ts` has `output: "export"` and the correct `basePath` (already configured).
2. Run `npm run build` locally. This consumes the values in `.env.local` and writes static files to `out/`.
3. Deploy `out/` to GitHub Pages (e.g., with `gh-pages -d out` or by pushing to a `gh-pages` branch).
4. If you prefer GitHub Actions to build for you, add the environment variables below as **Repository secrets** and reference them in the workflow so the static export has your contact info.

### Option 2: Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Option 3: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Set the environment variables listed below in the Netlify dashboard.

## 🔐 Environment Variables

Define these locally in `.env.local` (ignored by git) and in any hosting provider you use:

```
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CONTACT_PHONE_DISPLAY=
NEXT_PUBLIC_CONTACT_PHONE_DIAL=
NEXT_PUBLIC_CONTACT_LOCATION=
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_GITHUB_URL=
```

GitHub Pages tip: go to **Settings → Secrets and variables → Actions → New repository variable** and add each `NEXT_PUBLIC_*` value. Reference them in your GitHub Actions workflow with `env: { NEXT_PUBLIC_CONTACT_EMAIL: ${{ vars.NEXT_PUBLIC_CONTACT_EMAIL }}, ... }`.

## 🎨 Customization

### Update Contact Information
Adjust the environment variables above (no code changes required).

### Update Resume PDF
Replace `public/resume.pdf` with your PDF

### Update Metadata
Edit `src/app/layout.tsx` metadata section

## 🔧 Features

- ✅ Responsive design
- ✅ Downloadable PDF resume
- ✅ Web-formatted resume section
- ✅ Contact form integration
- ✅ SEO optimized
- ✅ Social media links
- ✅ Modern dark blue theme

## 📝 License

© 2025 Joel Prakash. All rights reserved.

