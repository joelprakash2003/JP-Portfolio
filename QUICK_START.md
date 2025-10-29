# Joel Prakash Portfolio - Quick Start Guide

## 🚀 Getting Started

### 1. Development
```bash
cd Resume-Nextjs-1.0.0
npm run dev
```
Visit: http://localhost:3000

### 2. Build for Production
```bash
npm run build
```

## 📁 Project Structure

### Key Files Modified
- ✅ `/src/app/page.tsx` - Main page with all sections
- ✅ `/src/app/layout.tsx` - Metadata and SEO
- ✅ `/src/app/globals.css` - Dark blue theme (#1c1339)
- ✅ `/public/data/page-data.json` - Joel's contact info and education
- ✅ `/public/data/work-data.json` - Joel's projects
- ✅ `/public/resume.pdf` - Joel's resume PDF

### New Component Created
- ✅ `/src/app/components/home/resume-section/index.tsx` - Web-formatted resume

## 🎨 Current Features

- ✨ Hero section with gradient background
- 📄 Web-formatted resume section
- 👤 About section with personal info
- 💼 Experience timeline (4 positions)
- 🎓 Education & Certifications
- 🚀 Projects showcase
- 📧 Contact form (joelprakash90@gmail.com)
- 🔗 Social media links (LinkedIn, GitHub)
- 📱 Fully responsive design
- 🌙 Dark blue theme (#1c1339)

## 🚢 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repository
4. Deploy automatically

### Option 2: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Option 3: GitHub Pages
See `DEPLOYMENT.md` for detailed instructions

## 📝 Customization

### Update Resume PDF
Replace: `/public/resume.pdf`

### Update Contact Info
Edit: `/public/data/page-data.json`

### Update Projects
Edit: `/public/data/work-data.json`

### Add Social Preview Image
Add: `/public/social-preview.png` (1200x630px)

## ✨ Section Navigation

- `#resume-web` - Resume section
- `#about` - About me
- `#experience` - Work experience
- `#education` - Education & skills
- `#projects` - Projects
- `#contact` - Contact form

## 📧 Contact Form

Configured to send to: `joelprakash90@gmail.com`

Update in: `/src/app/components/home/contact/index.tsx`

## 🎯 SEO Tags

- Title: "Joel Prakash — Portfolio"
- Description: Optimized for search engines
- OG Image: `/social-preview.png`
- Theme Color: #1c1339

## ✅ Checklist

- [x] Resume PDF added
- [x] All sections updated with Joel's info
- [x] Contact information correct
- [x] Social media links functional
- [x] SEO metadata configured
- [x] Responsive design tested
- [x] Build successful
- [x] No linter errors

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf .next
npm install
npm run build
```

### Run Dev Server
```bash
npm run dev
```

### Check Logs
All files are in: `/Resume-Nextjs-1.0.0/src/app/`

---

**Status**: ✅ Ready to deploy
**Last Updated**: January 2025
**Author**: Joel Prakash

