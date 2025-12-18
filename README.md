# ScanBuddy Pro

ScanBuddy Pro is an end-to-end knowledge hub for our low-cost 3D laser scanner initiative. The site packages mechanical documentation, calibration flows, advanced software modules, and professional guidance so builders can move from prototype to production-ready workflows.

## Contents

- Marketing-ready landing page
- Hardware assembly and BOM documentation
- Scan automation, AI post-processing, and dashboard walkthroughs
- Professional appendices covering system requirements, diagnostics, data governance, interoperability, security, plugins, validation, roadmap, licensing, and glossary references

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

```bash
git clone https://github.com/balkrishan99/scanbuddy-pro.git
cd scanbuddy-pro
npm install
npm run dev
```

The development server boots at http://localhost:8080. Use Ctrl+C to stop it.

### Available Scripts

- `npm run dev` – hot-reload development server
- `npm run build` – production bundle
- `npm run preview` – preview the production build locally
- `npm run lint` – TypeScript + ESLint checks (resolves before committing)

## Project Structure

```
src/
	components/      // UI modules and documentation sections
	pages/           // Top-level route composition
	lib/             // Shared utilities
public/            // Static assets (favicon, robots.txt)
```

## Tech Stack

- Vite + TypeScript + React 18
- Tailwind CSS with shadcn-ui components
- Lucide icons and custom design tokens

## Deployment

Any static hosting platform that understands the Vite output works:

1. Run `npm run build`.
2. Deploy the `dist/` folder to your preferred provider (Vercel, Netlify, GitHub Pages, etc.).

## Contributing

1. Fork and clone the repository.
2. Create a feature branch: `git checkout -b feature/<name>`.
3. Make your changes and run `npm run lint`.
4. Commit using conventional messages.
5. Open a pull request with screenshots or notes describing the update.

## License

See `LICENSE` for details. If you need OEM or enterprise distribution terms, reach out via the contact channels listed on the website footer.
