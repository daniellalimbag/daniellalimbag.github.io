# Portfolio

This is my personal portfolio website built to showcase my projects and skills.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool and development server for modern web projects.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS recommended).
2. From the project root:

```bash
npm install
npm run dev
```

3. Open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

* `npm run build` — production build into `dist/`
* `npm run preview` — serve the production build locally
* `npm run lint` — run ESLint

## Deploy to GitHub Pages

This repo uses the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package. One command builds and publishes `dist/` to the `gh-pages` branch:

```bash
npm run deploy
```

That runs `npm run build` first (`predeploy`), then pushes `dist/` to GitHub. After the workflow finishes (usually under a minute), the site is live at:

**https://daniellalimbag.github.io**

### First-time / GitHub settings

1. In the repo on GitHub: **Settings → Pages**.
2. **Source**: Deploy from a branch.
3. **Branch**: `gh-pages` / `/ (root)`.
4. Save.

You need permission to push to this repo. If deploy fails on auth, use SSH or a personal access token for Git.

### Manual deploy

```bash
npm run build
npx gh-pages -d dist
```

## Editing content

* **Education / Experience** — `src/components/Education.jsx` (`educations` and `experiences` arrays; toggle is built into that section).
* **Resume PDF** — replace `public/Daniella_Limbag_Resume.pdf`.

The live version: [https://daniellalimbag.github.io](https://daniellalimbag.github.io).
