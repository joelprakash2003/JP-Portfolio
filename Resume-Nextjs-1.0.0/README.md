# Joel Prakash - Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing Joel Prakash's experience, projects, and skills.

## 🚀 Quick Start

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

## 📋 Features

- ✅ Hero section with downloadable resume
- ✅ Web-formatted resume section
- ✅ About section with personal info and hobbies
- ✅ Experience timeline (4 positions)
- ✅ Education & Certifications
- ✅ Projects showcase (3 projects)
- ✅ Contact form
- ✅ Social media links (LinkedIn, GitHub)
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Dark blue theme (#1c1339)

## 🎨 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Bricolage Grotesque

## 📁 Project Structure

```
Resume-Nextjs-1.0.0/
├── public/
│   ├── resume.pdf
│   ├── data/ (JSON files)
│   └── images/
├── src/app/
│   ├── components/home/ (sections)
│   ├── components/layout/ (header, footer)
│   └── page.tsx
```

## 🔗 Live Links

- **Email**: joelprakash90@gmail.com
- **Phone**: (469) 257-5506
- **LinkedIn**: linkedin.com/in/joelprakash-
- **GitHub**: github.com/joelprakash

## 📚 Documentation

- `SITE_SUMMARY.md` - Complete implementation details
- `DEPLOYMENT.md` - Deployment guide
- `QUICK_START.md` - Quick reference

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repository on vercel.com
3. Deploy automatically

### Netlify
1. Connect GitHub repository
2. Build: `npm run build`

## 📝 Customization

- Update contact info: `public/data/page-data.json`
- Update projects: `public/data/work-data.json`
- Replace resume: `public/resume.pdf`
- Add social preview: `public/social-preview.png` (1200x630px)

## 🔧 Troubleshooting

```bash
# Clean install
rm -rf node_modules .next
npm install

# Fresh start
npm run dev
```

---

© 2025 Joel Prakash. All rights reserved.
