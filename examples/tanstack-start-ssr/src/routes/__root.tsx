import {
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/solid-router'
import { HydrationScript } from 'solid-js/web'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: import('solid-js').JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
        <style>{`
          body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 720px;
            margin: 2rem auto;
            padding: 0 1rem;
            color: #1a1a1a;
          }
          h1 { color: #2c4f7d; }
          .icon-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0;
            font-size: 1.25rem;
          }
          .demo-section {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
          }
        `}</style>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
