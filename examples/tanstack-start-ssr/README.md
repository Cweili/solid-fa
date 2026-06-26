# solid-fa + TanStack Start SSR Example

This is a minimal TanStack Start project that demonstrates `solid-fa` working in an SSR (Server-Side Rendering) environment, with all docs examples replicated.

## Purpose

This example verifies that `solid-fa` renders correctly during SSR without throwing `Error: Client-only API called on the server side`.

## Project Structure

```
examples/tanstack-start-ssr/
├── vite.config.ts             # Vite + TanStack Start + vite-plugin-solid config
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── entry-client.tsx       # Client hydration entry
    ├── entry-server.tsx       # Server render entry
    ├── router.tsx             # Router definition (exports getRouter)
    └── routes/
        ├── __root.tsx         # Root document shell (HTML, styles)
        └── index.tsx          # Home route replicating all solid-fa docs
```

## Getting Started

### 1. Build solid-fa (from project root)

```shell
cd ../../
npm run build
cd examples/tanstack-start-ssr
```

### 2. Install dependencies

```shell
npm install
```

### 3. Run the dev server

```shell
npm run dev
```

Open http://localhost:3000 in your browser.

### 4. Verify SSR

1. **View page source** — right-click the page and select "View page source". The SVG icons should be present in the server-rendered HTML.
2. **Disable JavaScript** — icons should still be visible from the SSR output.
3. **Check the "Rendered on" label** — it shows `SSR` on first paint, then switches to `Client` after hydration.

## What's Demonstrated

All solid-fa docs examples are replicated on the home route:

| Feature             | Code                                              |
|---------------------|---------------------------------------------------|
| Basic icons         | `<Fa icon={faFlag} />`                            |
| Sizing              | `<Fa icon={faFlag} size="2x" />`                  |
| Fixed width         | `<Fa icon={faHome} fw />`                         |
| Pulled icons        | `<Fa icon={faQuoteLeft} pull="left" />`           |
| Spin animation      | `<Fa icon={faSpinner} spin />`                    |
| Pulse animation     | `<Fa icon={faSpinner} pulse />`                   |
| Scaling             | `<Fa icon={faSeedling} scale={0.5} />`            |
| Positioning         | `<Fa icon={faSeedling} translateX={0.2} />`       |
| Rotating & flipping | `<Fa icon={faSeedling} rotate={90} />`            |
| Layering            | `<FaLayers>` + `<FaLayersText>`                   |

## Key Configuration

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/solid-start/plugin/vite'
import viteSolid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [tanstackStart(), viteSolid({ ssr: true })],
  ssr: {
    noExternal: ['solid-fa'],
  },
})
```

- `viteSolid({ ssr: true })` — enables SSR compilation mode for JSX
- `ssr.noExternal: ['solid-fa']` — lets Vite process solid-fa's JSX source through the Solid SSR compiler

### solid-fa package.json exports

solid-fa provides a `solid` conditional export pointing to uncompiled JSX source:

```json
"exports": {
  ".": {
    "solid": "./dist/index.js",
    "import": "./dist/solid-fa.esm.js",
    ...
  }
}
```

This allows SSR frameworks to recompile the components with `generate: 'ssr'`.

## Build for Production

```shell
npm run build
npm run start
```
