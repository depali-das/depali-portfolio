import { ArrowUpRight } from 'lucide-react'
import { personal } from '../../data/personal'

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark footer-wordmark" href="#home">
        <span className="wordmark-mark">D</span>
        <span>{personal.name.toUpperCase()}<span className="wordmark-period">.</span></span>
      </a>
      <span>DESIGNED WITH CARE · BUILT FOR THE WEB</span>
      <a href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
      <span className="footer-copy">© 2026 {personal.name.toUpperCase()}</span>
    </footer>
  )
}

export default Footer
