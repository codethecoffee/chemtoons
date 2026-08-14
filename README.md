# Chemtoons

Chemtoons makes chemistry approachable through element-inspired cartoon characters, a physical card game, and classroom worksheets.

This repository contains the public website for [chemtoons.com](https://chemtoons.com). The first release is a responsive, one-page React site that will be hosted with GitHub Pages.

## Technology

- React
- TypeScript
- Vite
- CSS
- GitHub Pages and GitHub Actions

## Run the site locally

You need the current Node.js LTS release and Git installed.

1. Clone the repository.
2. Open the repository folder in Visual Studio Code.
3. Open **Terminal → New Terminal**.
4. Install the project dependencies:

   ```powershell
   npm install
   ```

5. Start the local development server:

   ```powershell
   npm run dev
   ```

6. Open the local address printed in the terminal. Vite normally uses `http://localhost:5173/`.
7. Press `Ctrl+C` in the terminal when you want to stop the server.

## Quality checks

Before committing a change, run:

```powershell
npm run lint
npm run build
```

`npm run lint` checks for common code problems. `npm run build` checks TypeScript and creates the optimized static website in `dist/`.

## Publish with GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.
After these changes are merged into `main`:

1. Open the repository on GitHub and choose **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push a change to `main` (or run the workflow manually from the **Actions** tab).
4. GitHub will build the site and publish the generated `dist/` folder.

When `chemtoons.com` is ready, we can connect it from the same Pages settings without changing the site code.

## Project plan

The staged release plan and key product decisions are documented in [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md).

## Copyright and permissions

This is a public repository, but it is **not an open-source project**. No open-source license is granted.

- Chemtoons character artwork is © Suzy Lee. All rights reserved.
- The Chemtoons game, website, branding, and written content are © Suzy Lee and Barry McNamara. All rights reserved.

See [COPYRIGHT.md](COPYRIGHT.md) for details. Please contact the copyright owners and receive written permission before copying, distributing, selling, modifying, or creating derivative works from this repository or its contents.
