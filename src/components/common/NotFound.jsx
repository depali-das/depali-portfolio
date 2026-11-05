import { useEffect } from 'react'
import { personal } from '../../data/personal'

function NotFound() {
  useEffect(() => {
    document.title = `Page Not Found — ${personal.name}`
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, follow')
  }, [])

  return (
    <main className="not-found-page">
      <a className="skip-link" href="#not-found-heading">Skip to error message</a>
      <section className="not-found-content" aria-labelledby="not-found-heading">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-heading">This page wandered off.</h1>
        <p>The address may be outdated, or the page may have moved.</p>
        <a className="button button-primary" href="/">
          Return to portfolio
        </a>
      </section>
    </main>
  )
}

export default NotFound
