<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Pradeep Singh Ramola's Portfolio Website

This is a modern, professional personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

A full-stack portfolio showcasing professional experience, projects, skills, education, publications, and blog posts. The site features smooth animations with Framer Motion, responsive design, and SEO optimization.

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion
- **Fonts**: Next.js Google Fonts
- **Deployment**: Vercel, Netlify, or GitHub Pages

## Key Features

- Hero section with CTA buttons and social links
- About section highlighting experience and focus areas
- Skills section organized by category
- Experience timeline with project details
- Education section with GPA and courses
- Projects section with filtering by category
- Publications and Hackathons sections
- Blog system with categories (ready for MDX)
- Contact form and social integration
- Fully responsive mobile design
- Dark mode (default) with smooth transitions
- SEO optimized with meta tags and sitemap
- 404 page for error handling

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── not-found.tsx        # 404 page
│   └── blog/
│       └── page.tsx         # Blog listing page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Skills.tsx       # Skills section
│       ├── Experience.tsx   # Experience timeline
│       ├── Education.tsx    # Education section
│       ├── Projects.tsx     # Projects grid with filters
│       ├── Publications.tsx # Publications list
│       ├── Hackathons.tsx   # Hackathons section
│       ├── Blog.tsx         # Blog preview section
│       └── Contact.tsx      # Contact form
├── data/
│   ├── skills.ts           # Skills data
│   ├── experience.ts       # Experience data
│   ├── education.ts        # Education data
│   ├── projects.ts         # Projects data
│   ├── publications.ts     # Publications data
│   ├── hackathons.ts       # Hackathons data
│   └── social.ts           # Social links
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── resume.pdf          # Resume file (placeholder)
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **data/social.ts** - Add your email, LinkedIn, GitHub, LeetCode links
2. **data/experience.ts** - Update your work experience
3. **data/education.ts** - Update your education details
4. **data/projects.ts** - Add your projects
5. **data/skills.ts** - Customize your skills
6. **components/sections/About.tsx** - Update your bio

### Add Your Resume

1. Replace `public/resume.txt` with your actual `resume.pdf`
2. Ensure the file is named `resume.pdf`
3. The download button will automatically work

### Add Blog Posts

Create MDX files in `content/blog/` (when using MDX support):

```
content/blog/
├── building-tinygpt.mdx
├── bert-fine-tuning.mdx
└── vision-transformers.mdx
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#3b82f6',      // Blue
  secondary: '#8b5cf6',    // Purple
  accent: '#ec4899',       // Pink
}
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'out' folder to Netlify
```

### GitHub Pages

1. Update `next.config.js` with `output: 'export'`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

## Environment Variables

Create `.env.local` if needed for form submissions or analytics:

```bash
NEXT_PUBLIC_FORM_EMAIL=your-email@example.com
```

## SEO Optimization

- Meta tags in layout.tsx
- Open Graph tags for social sharing
- Sitemap and robots.txt
- Semantic HTML structure
- Fast loading times
- Mobile responsive design

## Performance Optimization

- Image optimization with Next.js
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- CSS optimization with Tailwind
- Minified production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Pradeep Singh Ramola. All rights reserved.

## Support

For questions or issues, reach out via:
- Email: pramola@buffalo.edu
- LinkedIn: https://linkedin.com/in/pradeep-singh-ramola
- GitHub: https://github.com/pradeep-ramola

---

Built with ❤️ using Next.js and Tailwind CSS
