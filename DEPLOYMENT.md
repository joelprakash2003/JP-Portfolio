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
1. Install gh-pages package: `npm install --save-dev gh-pages`
2. Update `package.json` scripts:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```
3. Update `next.config.ts` for static export:
   ```typescript
   export default {
     output: 'export',
     images: { unoptimized: true }
   }
   ```
4. Build and deploy: `npm run build && npm run deploy`

### Option 2: Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Option 3: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## 🎨 Customization

### Update Contact Information
Edit `public/data/page-data.json`

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

