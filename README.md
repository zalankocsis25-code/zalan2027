# Zalan Kocsis Baseball Recruiting

A responsive baseball recruiting website for Zalan Kocsis, built with Next.js, React, TypeScript, Tailwind CSS, Lucide React, and Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Most profile content is stored in `src/data/profile.ts`. Images and videos are in `public/`.

## GitHub Pages

The project exports a fully static website and includes an automatic GitHub Pages deployment workflow.

1. Push the repository to GitHub using the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the website after every push to `main`.

The published address will be:

`https://YOUR-GITHUB-USERNAME.github.io/zalan-baseball-recruiting/`

## Privacy

Only the public recruiting résumé is stored in this repository. Private contact details and the private recruiting résumé are intentionally excluded through `.gitignore`.
