import { GraduationCap } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import SectionTitle from '../common/SectionTitle'
import { education } from '../../data/education'

function Education() {
  return (
    <section className="journey-section" id="education">
      <div className="content-section journey-inner education-inner">
        <ScrollReveal>
          <SectionTitle kicker="04 / EDUCATION">
            A strong foundation<br /><span>for what comes next.</span>
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal className="journey-card">
          <div className="journey-icon"><GraduationCap size={23} /></div>
          <div className="journey-main">
            <span className="journey-label">EDUCATION</span>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
          </div>
          <div className="journey-meta">
            <span>{education.year}</span>
            <strong>{education.cgpa} <small>CGPA</small></strong>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Education
