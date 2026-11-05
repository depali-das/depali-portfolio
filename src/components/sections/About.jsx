import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import SectionTitle from '../common/SectionTitle'
import { education } from '../../data/education'
import { personal } from '../../data/personal'

function About() {
  return (
    <section className="content-section about-section" id="about">
      <ScrollReveal>
        <SectionTitle
          kicker="01 / A LITTLE ABOUT ME"
          note="A frontend developer in the making, grounded in curiosity and a thoughtful approach to the web."
        >
          Making the web feel<br /><span>a little more human.</span>
        </SectionTitle>
      </ScrollReveal>

      <div className="about-layout">
        <ScrollReveal className="about-profile" delay={0.08}>
          <div className="about-photo-frame">
            <img
              src={personal.portrait}
              alt={`${personal.name}, frontend developer`}
              width="640"
              height="877"
              loading="lazy"
              decoding="async"
            />
            <span className="about-photo-glow" aria-hidden="true" />
          </div>
          <div className="about-profile-caption">
            <div>
              <strong>{personal.name}</strong>
              <span>{personal.role}</span>
            </div>
            <span className="about-location">
              <MapPin size={14} aria-hidden="true" />
              {personal.location.replace('Based in ', '')}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="about-copy" delay={0.14}>
          <p className="lead-copy">
            Hello, I&apos;m {personal.name} — a BCA graduate passionate about creating
            useful, welcoming experiences for the web.
          </p>
          <p>
            I&apos;m especially interested in frontend development: bringing
            thoughtful design and clean code together to make websites that
            feel clear, responsive and easy to use. I enjoy learning by
            building and refining the details that make an interface feel
            considered.
          </p>
          <div className="about-education" aria-label="Education highlights">
            <div className="about-education-heading">
              <GraduationCap size={18} aria-hidden="true" />
              <span>EDUCATION</span>
            </div>
            <strong>{education.degree}</strong>
            <span>{education.institution}</span>
            <div className="education-facts">
              <span>Graduated <strong>{education.year}</strong></span>
              <span>CGPA <strong>{education.cgpa}</strong></span>
            </div>
          </div>
          <div className="about-goal">
            <span className="about-goal-icon"><Sparkles size={16} aria-hidden="true" /></span>
            <p>
              <strong>What I&apos;m working toward</strong>
              <span>
                Growing my frontend skills through hands-on projects and
                continued learning, with the goal of contributing to a team
                building thoughtful, accessible web experiences.
              </span>
            </p>
          </div>
          <a className="text-link" href="#contact">
            Let&apos;s connect <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
