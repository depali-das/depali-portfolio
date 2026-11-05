import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Hero from './components/sections/Hero'
import Journey from './components/sections/Journey'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import ScrollToTop from './components/common/ScrollToTop'
import NotFound from './components/common/NotFound'
import './App.css'

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('dipali-portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch (error) {
    console.warn('Unable to read the saved theme preference.', error)
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#09080d' : '#f7f5fa',
    )

    try {
      window.localStorage.setItem('dipali-portfolio-theme', theme)
    } catch (error) {
      console.warn('Unable to save the theme preference.', error)
    }
  }, [theme])

  if (!isHomePage) return <NotFound />

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar
        theme={theme}
        onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
