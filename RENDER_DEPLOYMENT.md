# Render Backend Deployment Guide

This guide will help you deploy your portfolio backend to Render.

## Prerequisites

1. A Render account (sign up at [render.com](https://render.com))
2. Your project pushed to GitHub (already done ✅)

## Deployment Steps

### Option 1: Deploy using render.yaml (Recommended)

1. **Connect to Render:**
   - Go to [render.com](https://render.com) and sign in
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository: `osamagivegh-hash/myPortfolio`

2. **Render will automatically detect the render.yaml file and configure:**
   - Service name: `portfolio-backend`
   - Environment: Node.js
   - Build command: `cd backend && npm install`
   - Start command: `cd backend && npm start`
   - Port: 10000

3. **Environment Variables:**
   Render will set these automatically from render.yaml:
   ```
   NODE_ENV=production
   PORT=10000
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

4. **Deploy:**
   - Click "Apply" to deploy
   - Wait for deployment to complete

### Option 2: Manual Deployment

1. **Create Web Service:**
   - Go to [render.com](https://render.com) and sign in
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service:**
   - **Name:** `portfolio-backend`
   - **Environment:** `Node`
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Plan:** Free

3. **Environment Variables:**
   Add these in the Environment tab:
   ```
   NODE_ENV=production
   PORT=10000
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

4. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment to complete

## Configuration Files Created

- `render.yaml` - Render Blueprint configuration
- `backend/env.example` - Backend environment variables template
- Backend `package.json` already has correct start script

## Important Notes

1. **File Storage:** Render's free tier has ephemeral file storage. Files will be lost on restart. For production, consider:
   - AWS S3
   - Cloudinary
   - Render Disk (paid feature)

2. **Database:** Currently using JSON files. For production, consider:
   - PostgreSQL (Render offers managed PostgreSQL)
   - MongoDB Atlas
   - Supabase

3. **CORS:** Update `CORS_ORIGIN` with your actual frontend URL after deployment

4. **Health Check:** The service includes a health check at `/api/projects`

## After Deployment

1. **Get your backend URL:**
   - Your backend will be available at: `https://portfolio-backend.onrender.com`
   - Note this URL for frontend configuration

2. **Update Frontend:**
   - Update your Vercel environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://portfolio-backend.onrender.com
   ```

3. **Update Backend CORS:**
   - In Render dashboard, update the `CORS_ORIGIN` environment variable with your Vercel frontend URL

4. **Test the API:**
   - Visit `https://portfolio-backend.onrender.com/api/projects` to test

## Troubleshooting

- **Build fails:** Check build logs in Render dashboard
- **Service won't start:** Check start command and environment variables
- **CORS errors:** Ensure CORS_ORIGIN is set correctly
- **File upload issues:** Remember that files are ephemeral on free tier

## Next Steps

1. Deploy backend to Render
2. Update frontend environment variables
3. Test full-stack functionality
4. Consider upgrading to paid plan for persistent storage
5. Set up database for production use
