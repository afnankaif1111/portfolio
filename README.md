# Afnan Kaif Portfolio

Engineering portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Check

```bash
npm run build
```

The app uses `next/font/google` for the original Inter and Inter Tight typography.

## Deploy On Vercel

1. Push this project to a GitHub repository.
2. Open [Vercel](https://vercel.com/new) and import the repository.
3. Use these settings:
   - Framework Preset: `Next.js`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave empty
   - Node.js Version: `20.x` or newer
4. Click `Deploy`.

Vercel will redeploy automatically whenever you push changes to the connected branch.

## Deploy From Terminal

```bash
npm install
npm run build
npm i -g vercel
vercel
vercel --prod
```
# prt
