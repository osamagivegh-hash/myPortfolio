# Vercel Deployment Guide

This guide will help you deploy your portfolio project to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your project pushed to GitHub (already done ✅)

## Deployment Steps

### Option 1: Deploy Frontend Only (Recommended for now)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository: `osamagivegh-hash/myPortfolio`

2. **Configure Project Settings:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

3. **Environment Variables:**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete

### Option 2: Deploy Both Frontend and Backend

#### Deploy Backend First:

1. **Create a separate Vercel project for backend:**
   - Create new project in Vercel
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Output Directory:** Leave empty

2. **Backend Environment Variables:**
   ```
   PORT=5000
   NODE_ENV=production
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

#### Deploy Frontend:

1. **Update frontend environment:**
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
   ```

2. **Deploy frontend** (same as Option 1)

## Configuration Files Created

- `vercel.json` - Main Vercel configuration
- `env.example` - Environment variables template
- Updated `package.json` with build scripts

## Important Notes

1. **File Uploads:** The current setup stores files locally. For production, consider using:
   - AWS S3
   - Cloudinary
   - Vercel Blob Storage

2. **Database:** Currently using JSON files. For production, consider:
   - MongoDB Atlas
   - PostgreSQL
   - Supabase

3. **CORS:** Make sure to update CORS settings in your backend for production URLs

## Troubleshooting

- If build fails, check the build logs in Vercel dashboard
- Ensure all environment variables are set correctly
- Make sure your GitHub repository is public or you've given Vercel access

## Next Steps After Deployment

1. Update your backend CORS settings with the new frontend URL
2. Test all functionality on the live site
3. Set up custom domain (optional)
4. Configure automatic deployments on git push
