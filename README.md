# Pradeep Ramola - Professional Portfolio Website

A modern, premium-quality personal portfolio website showcasing a Full Stack & AI/ML engineer's experience, projects, skills, and accomplishments.

![Next.js](https://img.shields.io/badge/Next.js-16+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12+-black?style=flat-square&logo=framer)

## 🚀 Features

### Core Sections
- **Hero Section** - Eye-catching introduction with CTA buttons and social links
- **About** - Professional bio highlighting experience and focus areas
- **Skills** - Organized skill categories (Languages, Frontend, Backend, AI/ML, Databases, DevOps, etc.)
- **Experience** - Timeline of professional work with detailed achievements
- **Education** - Academic background with GPA and relevant courses
- **Projects** - Filterable project showcase with technologies and links
- **Publications** - Research and published work
- **Hackathons** - Hackathon projects and achievements
- **Blog** - Ready for MDX blog content
- **Contact** - Contact form and social integration

### Technical Features
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive mobile design
- 🌙 Dark mode (beautiful minimal dark theme)
- ♿ Accessibility optimized
- 🔍 SEO optimized with meta tags and sitemap
- ⚡ Fast loading and optimized performance
- 🎨 Clean, modern, premium design
- 🔗 Social media integration
- 📄 Resume download integration

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0+
- **Animations**: Framer Motion 12+
- **Fonts**: Google Fonts (Inter)
- **Development**: Node.js 18+

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm 9+
- Git

### Setup

```bash
# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site!

## 🚀 Quick Start

### 1. Update Personal Information

**data/social.ts** - Your contact info:
```typescript
export const email = 'your@email.com';
export const linkedIn = 'https://linkedin.com/in/yourprofile';
export const github = 'https://github.com/yourprofile';
```

**data/experience.ts** - Add your work:
```typescript
{
  company: 'Your Company',
  position: 'Your Position',
  description: ['Achievement 1', 'Achievement 2'],
}
```

**data/projects.ts** - Showcase your work:
```typescript
{
  title: 'Project Name',
  description: 'What it does',
  technologies: ['Tech1', 'Tech2'],
  category: 'ai-ml',
}
```

### 2. Add Your Resume
1. Save your resume as `resume.pdf`
2. Place in `public/` folder
3. Done! Download button works automatically

### 3. Customize Colors
Edit `tailwind.config.js` to match your brand

## 🎨 Design

- **Beautiful dark theme** optimized for readability
- **Smooth animations** using Framer Motion
- **Glass-morphism cards** with subtle gradients
- **Responsive design** looks great on all devices
- **Premium typography** with proper hierarchy

## 📱 Sections Included

✅ Hero Section  
✅ About Me  
✅ Skills (organized by category)  
✅ Experience Timeline  
✅ Education  
✅ Projects with Filters  
✅ Publications  
✅ Hackathons  
✅ Blog (ready for content)  
✅ Contact Form  
✅ 404 Page  

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

### GitHub Pages
Update `next.config.js` and push to GitHub

## 📊 Performance

- ⚡ Fast Core Web Vitals
- 🖼️ Optimized images
- 📦 Code splitting
- 🎯 Lazy loading
- 📝 Semantic HTML

## 🔍 SEO Ready

- ✅ Meta tags
- ✅ Open Graph
- ✅ Sitemap
- ✅ Robots.txt
- ✅ Structured data

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📂 Structure

```
portfolio/
├── app/                  # Next.js app
│   ├── page.tsx         # Home
│   ├── layout.tsx       # Root layout
│   ├── globals.css      # Styles
│   └── blog/page.tsx    # Blog page
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/        # Page sections
├── data/                # Content
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── ...
├── public/              # Static files
│   ├── resume.pdf
│   └── robots.txt
└── lib/                 # Utilities
```

## 📝 Content Files

All content is in the `data/` folder:
- `skills.ts` - Your technical skills
- `experience.ts` - Work history
- `education.ts` - Education background
- `projects.ts` - Your projects
- `publications.ts` - Articles/research
- `hackathons.ts` - Hackathon wins
- `social.ts` - Contact links

## 🎯 Customization

Everything is designed to be easy to customize:

1. **Colors** → `tailwind.config.js`
2. **Content** → `data/` folder
3. **Layout** → Component files
4. **Domain** → Vercel/Netlify settings

## 🐛 Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies issue?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Contact

- **Email**: pramola@buffalo.edu
- **LinkedIn**: linkedin.com/in/pradeep-singh-ramola
- **GitHub**: github.com/pradeep-ramola

## 📄 License

© 2024 Pradeep Ramola. All rights reserved.

---

**Ready to deploy? Visit [Vercel](https://vercel.com), [Netlify](https://netlify.com), or your hosting of choice!**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
