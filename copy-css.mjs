import { cpSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const srcDir = resolve(__dirname, 'src')
const distDir = resolve(__dirname, 'dist')

function copyCssFiles(src, dest) {
  const entries = readdirSync(src)
  for (const entry of entries) {
    const srcPath = join(src, entry)
    const destPath = join(dest, entry)
    const stat = statSync(srcPath)
    if (stat.isDirectory()) {
      mkdirSync(destPath, { recursive: true })
      copyCssFiles(srcPath, destPath)
    } else if (entry.endsWith('.css')) {
      mkdirSync(dirname(destPath), { recursive: true })
      cpSync(srcPath, destPath)
      console.log(`copied: ${srcPath} -> ${destPath}`)
    }
  }
}

copyCssFiles(srcDir, distDir)
console.log('CSS files copied to dist/')
