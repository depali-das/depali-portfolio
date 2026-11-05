import { ArrowUpRight, Download } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

function MobileMenu({ navigation, isOpen, onNavigate, theme, onThemeToggle }) {
  return (
    <nav
      id="primary-navigation"
      className={`main-nav${isOpen ? ' is-open' : ''}`}
      aria-label="Main navigation"
    >
      {navigation.map(({ label, href }) => (
        <a key={href} href={href} onClick={onNavigate}>
          {label}
        </a>
      ))}
      <a className="nav-cta" href="#contact" onClick={onNavigate}>
        Let&apos;s talk <ArrowUpRight size={15} />
      </a>
      <a
        className="nav-cta nav-download"
        href="/Dipali-Das-CV.pdf"
        download="Dipali-Das-CV.pdf"
        onClick={onNavigate}
      >
        Download CV <Download size={15} aria-hidden="true" />
      </a>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
    </nav>
  )
}

export default MobileMenu
