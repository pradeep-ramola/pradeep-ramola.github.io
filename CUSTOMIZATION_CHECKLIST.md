# Content Customization Checklist

Use this checklist to customize your portfolio with your information.

## 📋 Quick Setup

### [ ] 1. Personal Information

**File: `data/social.ts`**
- [ ] Update email address
- [ ] Update LinkedIn profile URL
- [ ] Update GitHub profile URL
- [ ] Update LeetCode profile URL

```typescript
export const email = 'your@email.com';
export const linkedIn = 'https://linkedin.com/in/your-profile';
export const github = 'https://github.com/your-username';
export const leetCode = 'https://leetcode.com/your-username';
```

### [ ] 2. Work Experience

**File: `data/experience.ts`**
- [ ] Update company name
- [ ] Update position/title
- [ ] Update employment dates
- [ ] Update job description/achievements
- [ ] Update technologies used

Example entry:
```typescript
{
  company: 'Your Company Name',
  position: 'Your Position',
  startDate: 'Month Year',
  endDate: 'Month Year',
  description: ['Achievement 1', 'Achievement 2'],
  technologies: ['Tech1', 'Tech2'],
}
```

### [ ] 3. Education

**File: `data/education.ts`**
- [ ] Update school name
- [ ] Update degree type
- [ ] Update field of study
- [ ] Update graduation date
- [ ] Update GPA (optional)
- [ ] Update relevant courses (optional)

### [ ] 4. Skills

**File: `data/skills.ts`**
- [ ] Review skill categories
- [ ] Add/remove skills in each category
- [ ] Update programming languages
- [ ] Update frameworks and tools
- [ ] Add AI/ML specific skills

### [ ] 5. Projects

**File: `data/projects.ts`**
- [ ] Add your 3-6 best projects
- [ ] Include project title
- [ ] Write project description (2-3 sentences)
- [ ] List technologies used
- [ ] Add category (fullstack, ai-ml, nlp, cv, llm)
- [ ] Add GitHub link (optional)
- [ ] Add live demo link (optional)

Example:
```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  description: 'Brief description',
  longDescription: 'Detailed description',
  technologies: ['Tech1', 'Tech2'],
  category: 'ai-ml',
  github: 'https://github.com/...',
  demo: 'https://demo-site.com',
  featured: true,
}
```

### [ ] 6. Publications

**File: `data/publications.ts`**
- [ ] Add publication title
- [ ] Add venue (journal/conference)
- [ ] Add publication date
- [ ] Add summary/description
- [ ] Add publication link (optional)

### [ ] 7. Hackathons

**File: `data/hackathons.ts`**
- [ ] Add hackathon name
- [ ] Add hackathon date
- [ ] Add project name
- [ ] Add project description
- [ ] Add technologies used

### [ ] 8. About Section

**File: `components/sections/About.tsx`**
- [ ] Update your professional bio
- [ ] Update background information
- [ ] Update current focus/interests
- [ ] Update career goals/openness

### [ ] 9. Resume

**File: `public/resume.pdf`**
- [ ] Create/update your resume
- [ ] Save as PDF
- [ ] Place in `public/` folder
- [ ] Name it `resume.pdf`

### [ ] 10. Hero Section

**File: `components/sections/Hero.tsx`**
- [ ] Verify headline is correct
- [ ] Verify subheading matches your role
- [ ] Check social links are correct
- [ ] Verify CTA buttons point to right sections

### [ ] 11. Branding

**File: `tailwind.config.js`**
- [ ] Update primary color (if desired)
- [ ] Update secondary color (if desired)
- [ ] Update accent color (if desired)

## 📱 Content Guidelines

### Project Descriptions
- Keep descriptions concise (2-3 sentences max)
- Focus on impact and achievements
- Highlight unique technologies
- Link to GitHub and live demos

### Experience Descriptions
- Use action verbs (Built, Developed, Led, Optimized)
- Include metrics when possible (reduced by 20%, served 1000+ users)
- Highlight business impact
- Keep bullet points to 2-3 lines each

### Skills
- Organize by category (not alphabetical)
- Include 15-20 total skills
- Focus on relevant skills for your target roles
- Include both front-end and back-end skills

### Blog Posts
- Add in `components/sections/Blog.tsx`
- Include title, category, date, reading time, summary
- Link to actual blog content (when available)

## 🎨 Visual Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#3b82f6',      // Blue
  secondary: '#8b5cf6',    // Purple
  accent: '#ec4899',       // Pink
}
```

### Typography
- Headlines: Bold sans-serif (Inter)
- Body text: Regular sans-serif
- Code: Monospace font

### Icons
- Update social icons in `components/Footer.tsx`
- Customize emoji in section headings

## 🚀 Before Launch

- [ ] All personal information updated
- [ ] Resume uploaded and link works
- [ ] All projects have descriptions
- [ ] Technologies are accurately listed
- [ ] Links work correctly
- [ ] No placeholder text remaining
- [ ] Images are optimized
- [ ] Site is mobile responsive
- [ ] All pages load without errors
- [ ] SEO meta tags are updated

## 📝 Optional Customizations

- [ ] Add profile picture
- [ ] Add project screenshots
- [ ] Add blog content
- [ ] Add testimonials section
- [ ] Add CTA email subscription
- [ ] Integrate analytics (Google Analytics)
- [ ] Add newsletter signup
- [ ] Add speaking engagements

## 🌐 Post-Launch

- [ ] Set up custom domain
- [ ] Configure analytics
- [ ] Set up email forwarding
- [ ] Verify SEO tags
- [ ] Check Lighthouse scores
- [ ] Monitor performance
- [ ] Enable contact form backend
- [ ] Set up automatic deployments

## 📊 Analytics to Track

- Page views
- User engagement
- Click-through rates
- Contact form submissions
- Resume downloads
- Project page visits

## 🔍 SEO Checklist

- [ ] Meta description written
- [ ] Keywords included
- [ ] Sitemap.xml created
- [ ] robots.txt configured
- [ ] Open Graph tags set
- [ ] Mobile responsive
- [ ] Page speed optimized
- [ ] Structured data added

---

**Total Customization Time: 1-2 hours**

Start with the numbered items above for a complete portfolio!
