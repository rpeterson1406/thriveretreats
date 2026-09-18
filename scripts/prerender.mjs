import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const templatePath = path.join(distDir, 'index.html')
const serverEntryPath = path.join(distDir, 'server', 'entry-server.js')

if (!fs.existsSync(templatePath)) {
  throw new Error(`Missing client build at ${templatePath}`)
}
if (!fs.existsSync(serverEntryPath)) {
  throw new Error(`Missing SSR build at ${serverEntryPath}`)
}

const template = fs.readFileSync(templatePath, 'utf-8')
const { render } = await import(pathToFileURL(serverEntryPath).href)
const appHtml = render()

if (!appHtml || !appHtml.includes('Tucson')) {
  throw new Error('Prerender produced HTML without expected retreat content')
}

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
)

if (html === template) {
  throw new Error('Failed to inject prerendered markup into #root')
}

fs.writeFileSync(templatePath, html)
console.log('Prerendered dist/index.html with static retreat content')
