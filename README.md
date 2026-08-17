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

Primary website address:

`https://zalankocsis2027.com/`

## Recruiting résumés

The public résumé at `public/Zalan-Kocsis-Recruiting-Resume.pdf` is generated in a separate private repository ([zalankocsis25-code/zalan2027-resume](https://github.com/zalankocsis25-code/zalan2027-resume), kept as a sibling folder) together with the private résumé. Rebuild and copy it here with `python build_resume.py --publish` in that repo, then commit the updated PDF. Do not edit the PDF by hand; keep `src/data/profile.ts` and that repo's `resume_content.py` in sync.

## Privacy

Only the public recruiting résumé is stored in this repository. Private contact details and the private recruiting résumé live in the separate private repository and are additionally excluded here through `.gitignore`.
