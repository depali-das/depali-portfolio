import { readFile, writeFile } from 'node:fs/promises'
import { createElement, StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const markup = renderToString(
    createElement(StrictMode, null, createElement(App)),
  )
  const outputPath = new URL('../dist/index.html', import.meta.url)
  const html = await readFile(outputPath, 'utf8')
  const prerenderedHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`,
  )

  if (prerenderedHtml === html) {
    throw new Error('Could not find the app root in dist/index.html.')
  }

  await writeFile(outputPath, prerenderedHtml)
} finally {
  await server.close()
}
