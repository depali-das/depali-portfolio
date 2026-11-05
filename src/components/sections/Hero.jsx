import { useRef } from 'react'
import { ArrowDown, Atom, Code2, Download, Wind } from 'lucide-react'
import Button from '../common/Button'
import BackgroundGlow from '../effects/BackgroundGlow'
import FloatingParticles from '../effects/FloatingParticles'
import MouseParallax from '../effects/MouseParallax'
import { personal } from '../../data/personal'

const role = 'Frontend Developer'

const technologyCards = [
  { name: 'HTML5', mark: '5', icon: 'shield' },
  { name: 'CSS3', mark: '3', icon: 'shield' },
  { name: 'JavaScript', mark: 'JS', icon: 'text' },
  { name: 'React.js', mark: null, icon: Atom },
  { name: 'Tailwind CSS', mark: null, icon: Wind },
]

function Hero() {
  const heroRef = useRef(null)
  const nameParts = personal.name.split(' ')

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-section"
      id="home"
      ref={heroRef}
    >
      <BackgroundGlow targetRef={heroRef} />
      <FloatingParticles />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-greeting">
            <span className="eyebrow-line" />
            Hi! Hello Everyone <span aria-hidden="true">👋</span>
          </p>
          <h1 id="hero-heading" className="hero-name">
            I&apos;m {nameParts[0]} <span>{nameParts[1]}.</span>
          </h1>
          <div className="hero-role" aria-label={`Aspiring ${role}`}>
            <span className="role-dot" />
            <span className="hero-role-prefix">Aspiring</span>
            <span aria-hidden="true">{role}</span>
          </div>
          <p className="hero-education">
            BCA Graduate <span aria-hidden="true">|</span> Brainware University{' '}
            <span aria-hidden="true">|</span> 2025
          </p>
          <p className="hero-intro">
            I enjoy creating beautiful, responsive and user-friendly websites. I
            love learning new technologies, solving problems and improving my
            development skills.
          </p>
          <p className="hero-welcome">
            Welcome to my Portfolio!
          </p>
          <div className="hero-actions">
            <Button className="button-primary" href="#projects">
              View My Projects
            </Button>
            <Button className="button-quiet" href="#contact">
              Contact Me
            </Button>
            <Button
              className="button-quiet"
              href="/Dipali-Das-CV.pdf"
              download="Dipali-Das-CV.pdf"
              icon={false}
            >
              <Download size={17} aria-hidden="true" />
              Download CV
            </Button>
            {personal.github && (
              <a
                className="hero-social"
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${personal.name} on GitHub`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.64 3.16 1.88.1-.73.39-1.23.7-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.63 5.28-5.14 5.56.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
                </svg>
              </a>
            )}
            {personal.linkedin && (
              <a
                className="hero-social"
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${personal.name} on LinkedIn`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.63H4.96V9.06h2.97v9.57ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.2 10.88h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.4V9.06h2.84v1.31h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.57 1.97 3.57 4.53v5.27Z" />
                </svg>
              </a>
            )}
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-icon"><ArrowDown size={14} /></span>
            SCROLL TO EXPLORE
          </a>
        </div>

        <div className="hero-visual">
          <div className="portrait-halo" />
          <MouseParallax className="portrait-frame" intensity={5}>
            <img
              src={personal.portrait}
              alt={`${personal.name} smiling in a white shirt`}
              width="640"
              height="877"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="portrait-caption">
              <span className="caption-mark"><Code2 size={17} /></span>
              <span>
                <strong>Thoughtful by design.</strong>
                <small>Curious by nature.</small>
              </span>
            </div>
          </MouseParallax>
          <div className="floating-note">
            <span className="note-sparkle"><Code2 size={16} /></span>
            <span>Building with<br /><strong>purpose &amp; polish</strong></span>
          </div>
          <span className="visual-index">01 — 07</span>
        </div>
      </div>
      <div className="hero-skills" aria-label="Frontend technologies">
        {technologyCards.map(({ name, mark, icon: Icon }) => (
          <div className="hero-skill-card" key={name}>
            <span
              className={`hero-skill-icon${typeof Icon === 'string' ? ` is-${Icon}` : ''}`}
            >
              {mark || <Icon size={20} strokeWidth={1.7} aria-hidden="true" />}
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className="hero-bottom-line">
        <span>{personal.location.toUpperCase()}</span>
        <span>DESIGN-MINDED · DETAIL-DRIVEN</span>
        <span>REACT · UI · WEB</span>
      </div>
    </section>
  )
}

export default Hero
