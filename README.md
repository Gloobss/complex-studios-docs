# Complex Studios — Documentation

Public docs site for the Complex Studios FiveM scripts (CPX Laptop, CPX
Restaurants, CPX Racing Hub, CPX Frames, CPX PauseMenu, CPX Album, CPX
Clothing Designer). Built with **Vite + React 19 + Tailwind 4** and
deployed on **Vercel**.

## Local dev

```bash
pnpm install
pnpm dev          # http://localhost:3001
pnpm build        # production build
pnpm preview      # serve dist/ locally
```

Languages: EN / ES (toggle in the top-right corner, persisted in
localStorage).

## What's inside

- **Home** (`src/components/Home.tsx`) — entry, links to Tebex, Discord, the
  main marketing site, and to each product's docs.
- **Sidebar** + **RightSidebar** (`src/components/layout/`) — left nav (per
  product, expandable) and right table-of-contents.
- **Docs pages** (`src/components/docs/`) — one per product. Same shape:
  `hero → introduction → features → installation → configuration → troubleshooting`.
- **`<ConfigGenerator />`** (`src/components/ui/ConfigGenerator.tsx`) — a
  declarative, schema-driven Lua config builder. Toggles, sliders, color
  pickers, selects, multi-selects, array-of-strings, and collapsible groups.
  Output is _guaranteed_ valid Lua via the helpers in `src/lib/lua.ts`.
- **Schemas** (`src/lib/configs/`) — one per script. Mirror the real
  `config.lua` shipped with each resource.
- **`<YouTubeHero />`** — thumbnail + click-to-open modal player using
  `youtube-nocookie.com`.
- **`<HeroBackground />`** — global background. Infinite scrolling grid +
  cursor-tracking radial reveal + ambient color blobs. Touch and reduced-motion
  safe.

## Adding a new script

1. Create the schema at `src/lib/configs/<name>-config.ts`. Follow the shape
   of the existing ones — the `toLua()` function must always return valid Lua.
2. Add the doc page at `src/components/docs/<Name>Docs.tsx`. Re-use the
   layout pattern from `LaptopDocs.tsx`.
3. Wire the new doc into `App.tsx`, `Home.tsx` and `Sidebar.tsx`.

## Deploy to Vercel

Auto-deployed on push to `main` once the GitHub repo is connected to Vercel.
Framework preset: **Vite** (auto-detected). Output directory: `dist`.

## License

© Complex Studios. All scripts and brand assets in this repo are proprietary.
