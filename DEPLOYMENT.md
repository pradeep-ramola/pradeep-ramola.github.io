# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. **Connect to Vercel**
- Visit https://vercel.com/new
- Select your repository
- Click "Deploy"

3. **Configure Custom Domain** (Optional)
- Go to Vercel Dashboard → Settings → Domains
- Add your domain
- Update DNS records as instructed

## Deploy to Netlify

### Steps

1. **Build Locally**
```bash
npm run build
```

2. **Deploy**
- Drag `.next` folder to Netlify
- Or connect GitHub for auto-deployments

3. **Configure Custom Domain**
- Settings → Domain Management
- Add your domain

## Deploy to GitHub Pages

### Steps

1. **Update Configuration**
Edit `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  // ... other config
};
```

2. **Build**
```bash
npm run build
```

3. **Deploy**
- Push `out` folder to gh-pages branch
- Enable GitHub Pages in settings

## Environment Variables

Create `.env.local`:
```bash
# Optional analytics
NEXT_PUBLIC_GA_ID=your_analytics_id

# Optional contact form
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

## Performance Tips

- Optimize images using Next.js Image component
- Use Code Splitting with dynamic imports
- Monitor Core Web Vitals
- Enable caching on Vercel

## Custom Domain Setup

### DNS Records

For your domain registrar:

```
A Record:     76.76.19.165 (Vercel IP)
CNAME Record: alias.vercel.sh
```

### SSL Certificate

- Automatic with Vercel/Netlify
- Let's Encrypt for custom domains

## Monitoring

- **Vercel Analytics**: Dashboard → Analytics
- **Web Vitals**: Automatic in Vercel
- **Error Tracking**: Sentry integration available

## Troubleshooting

### Domain not working?
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check SSL certificate status

### Build fails?
- Check for TypeScript errors: `npm run lint`
- Verify all imports are correct
- Check `.env` variables

### Site loads slow?
- Use Lighthouse to identify issues
- Optimize images
- Check bundle size with `npm build`

## Maintenance

### Regular Updates
```bash
npm update
npm audit fix
```

### Content Updates
- Update data files in `data/` folder
- Commit and push to trigger redeploy

### Monitoring Errors
- Check Vercel/Netlify logs
- Monitor Core Web Vitals
- Set up error tracking (Sentry)

## Cost

- **Vercel Free**: Unlimited deployments, 100GB bandwidth/month
- **Netlify Free**: Unlimited deployments, 100GB bandwidth/month
- **GitHub Pages**: Free with custom domain

## Next Steps

1. Deploy to Vercel/Netlify
2. Configure custom domain
3. Set up email forwarding
4. Enable analytics
5. Monitor performance

---

**Your portfolio is ready to deploy! 🚀**
