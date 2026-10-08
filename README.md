# Indian Startup Stories

> **Real Founders. Real Journeys. Real Stories.**

An editorial business publication and case study archive documenting the companies, founders, business models, and market forces shaping India's startup ecosystem.

---

## 🚀 How to Deploy on Vercel via GitHub

This project is pre-configured for instant zero-configuration deployment on **Vercel**.

### Step 1: Push to GitHub

In your project root terminal, run:

```bash
git init
git add .
git commit -m "Initial commit: Indian Startup Stories"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

### Step 2: Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and click **Import** next to your repository.
3. In the project settings on Vercel:
   - **Framework Preset**: `Vite` (automatically detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (or leave default)
   - **Output Directory**: `dist` (automatically detected)
   - **Install Command**: `npm install` (automatically detected)
4. Click **Deploy**.

---

## 🛠️ Vercel Compatibility Features Included

- **`vercel.json`**: Configured with SPA rewrite rules (`/(.*)` -> `/index.html`) to prevent 404 errors on page refresh.
- **`package-lock.json`**: Generated with validated dependency trees.
- **`.npmrc`**: Configured with `legacy-peer-deps=true` to prevent NPM peer dependency resolution conflicts during cloud builds.
- **Vite 8 + Tailwind CSS 4**: Optimized production bundle under 1s build time.
