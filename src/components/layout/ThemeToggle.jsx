import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ onToggle }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      onClick={onToggle}
    >
      <Sun className="theme-toggle-light-icon" size={16} aria-hidden="true" />
      <Moon className="theme-toggle-dark-icon" size={16} aria-hidden="true" />
      <span className="theme-toggle-light-label">Light mode</span>
      <span className="theme-toggle-dark-label">Dark mode</span>
    </button>
  )
}

export default ThemeToggle
