# PhysioInMotion - Vercel Deployment Guide

## Project Structure

This is a full-stack application with:

- **Frontend**: React + Vite (client/)
- **Backend**: Express.js API (server/)
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Deployment**: Vercel (static frontend + serverless API)

## Fixed Deployment Issues

### Problem

The original deployment was showing raw server configuration code instead of the built website because:

1. Incorrect `vercel.json` routing configuration
2. Mixed static/serverless deployment setup
3. Server code being exposed instead of built client assets

### Solution

1. **Updated `vercel.json`**: Proper routing for static assets and API endpoints
2. **Fixed API handler**: Created proper serverless function in `api/index.ts`
3. **Separated builds**: Client build for static assets, separate API handling
4. **Updated `.vercelignore`**: Exclude development files from deployment

## Deployment Configuration

### vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    },
    {
      "src": "api/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/index.ts"
    },
    {
      "src": "/(.*\\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|map))",
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "functions": {
    "api/index.ts": {
      "maxDuration": 30
    }
  }
}
```

### Build Process

1. **Client Build**: `vite build` creates static assets in `dist/public/`
2. **API Build**: Serverless function in `api/index.ts` handles backend routes
3. **Static Serving**: All frontend routes serve `index.html` for SPA routing

## Environment Variables

Set these in Vercel dashboard:

- `DATABASE_URL`: Your Neon PostgreSQL connection string
- `NODE_ENV`: `production`
- Any other environment variables your app needs

## Deployment Steps

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link to your Vercel account and project
```

### Option 2: GitHub Integration

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel will automatically deploy on push

## Project Structure After Fix

```
PhysioInMotion/
├── client/                 # React frontend
│   ├── src/
│   └── index.html
├── server/                 # Express server (for local dev)
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── api/                    # Vercel serverless functions
│   └── index.ts           # Main API handler
├── dist/
│   └── public/            # Built static assets
├── shared/                # Shared utilities
├── vercel.json           # Vercel configuration
├── .vercelignore         # Files to exclude from deployment
└── package.json          # Dependencies and scripts
```

## API Routes

All API routes are handled by `api/index.ts` and should be prefixed with `/api/`:

- `GET /api/health` - Health check endpoint
- Add your custom API routes in `api/index.ts`

## Static Assets

- All static assets are served from `dist/public/`
- SPA routing handled by serving `index.html` for all non-API routes
- Assets are cached with proper headers for performance

## Troubleshooting

1. **Build fails**: Check that all dependencies are in `package.json`
2. **API not working**: Verify environment variables are set in Vercel
3. **Routes not working**: Check `vercel.json` routing configuration
4. **Database issues**: Ensure `DATABASE_URL` is correctly set

## Local Development

```bash
npm run dev    # Start development server with hot reload
npm run build  # Build for production
npm start      # Start production server locally
```
