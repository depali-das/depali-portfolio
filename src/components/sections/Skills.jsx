import {
  Braces,
  Code2,
  GitBranch,
  PanelsTopLeft,
  Palette,
  Wind,
} from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import SectionTitle from '../common/SectionTitle'
import SkillCard from '../common/SkillCard'
import { skills } from '../../data/skills'

const skillIcons = {
  html: Code2,
  css: Palette,
  javascript: Braces,
  react: PanelsTopLeft,
  tailwind: Wind,
  git: GitBranch,
  github: Code2,
  responsive: PanelsTopLeft,
}

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <ScrollReveal>
        <SectionTitle
          kicker="02 / MY TOOLKIT"
          note="A growing toolkit, grounded in the fundamentals and focused on building for the web."
        >
          Tools I use to<br /><span>bring ideas to life.</span>
        </SectionTitle>
      </ScrollReveal>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            Icon={skillIcons[skill.icon]}
          />
        ))}
      </div>
      <p className="stack-note">
        <span aria-hidden="true" />
        Built with curiosity, care, and a love for learning.
      </p>
    </section>
  )
}

export default Skills
