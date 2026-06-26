import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['solid-fa'],
    },
  },
})
