import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { personal } from '../../data/personal'
import MobileMenu from './MobileMenu'

function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const closeMenu = () => {
    setMenuOpen(false)
    menuToggleRef.current?.focus()
  }

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 760px)')
    const closeOnDesktop = (event) => {
      if (!event.matches) setMenuOpen(false)
    }

    mobileQuery.addEventListener('change', closeOnDesktop)
    return () => mobileQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${personal.name}, home`}>
        <span className="wordmark-mark">D</span>
        <span>{personal.name.toUpperCase()}<span className="wordmark-period">.</span></span>
      </a>

      <button
        ref={menuToggleRef}
        className="menu-toggle"
        type="button"
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <MobileMenu
        navigation={navigation}
        isOpen={menuOpen}
        onNavigate={closeMenu}
        theme={theme}
        onThemeToggle={onThemeToggle}
      />
    </header>
  )
}

export default Navbar
