# solid-fa + Solid Start SSR Example

This is a minimal [Solid Start](https://start.solidjs.com/) project that demonstrates `solid-fa` working in an SSR (Server-Side Rendering) environment, with all docs examples replicated.

## Purpose

This example verifies that `solid-fa` renders correctly during SSR without throwing `Error: Client-only API called on the server side`.

## Project Structure

```
examples/solid-start-ssr/
├── app.config.ts              # @solidjs/start config (vinxi) + ssr.noExternal
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── app.tsx                # Root App (Router with root + FileRoutes)
    ├── app.css                # Global styles (body / icon-row / demo-section)
    ├── entry-client.tsx       # Client hydration entry (mount to #app)
    ├── entry-server.tsx       # Server render entry (HTML document shell)
    └── routes/
        └── index.tsx          # Home route using solid-fa (all docs examples)
```

## Getting Started

### 1. Build solid-fa (from project root)

```shell
cd ../../
npm run build
cd examples/solid-start-ssr
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

## Key Configuration

### app.config.ts

```typescript
import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['solid-fa'],
    },
  },
})
```

- `ssr.noExternal: ['solid-fa']` — lets Vite process solid-fa's JSX source through the Solid SSR compiler. Solid Start's `solid()` plugin is auto-injected by the framework (no need to add `vite-plugin-solid` manually).

### src/app.tsx

The `Router` must wrap `FileRoutes` with a `root` prop (here a `Suspense` boundary) so route content renders during SSR:

```tsx
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import './app.css'

export default function App() {
  return (
    <Router root={(props) => <Suspense>{props.children}</Suspense>}>
      <FileRoutes />
    </Router>
  )
}
```

## Build for Production

```shell
npm run build
npm run start
```
