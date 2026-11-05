import { ArrowUpRight, Code2 } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import SectionTitle from '../common/SectionTitle'
import { projects } from '../../data/projects'

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <ScrollReveal>
        <SectionTitle
          kicker="03 / A FEW THINGS I'VE MADE"
          note="A couple of ideas brought to life through clean interfaces and practical frontend work."
        >
          Selected <span>projects.</span>
        </SectionTitle>
      </ScrollReveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ScrollReveal className="project-card" delay={index * 0.12} key={project.name}>
            <div className="project-topline">
              <span>{project.type}</span>
              <span>/{project.number}</span>
            </div>
            <a
              className={`project-preview project-preview-${index + 1}`}
              href={project.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} website`}
            >
              <span className="preview-glow" />
              <span className="preview-mark">{project.mark}</span>
              <span className="preview-label">{project.name}</span>
              <span className="preview-arrow"><ArrowUpRight size={18} /></span>
              <span className="preview-lines"><i /><i /><i /></span>
            </a>
            <div className="project-info">
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <a href={project.website} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live website`}>
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="source-link" href={project.source} target="_blank" rel="noreferrer">
                <Code2 size={15} /> View source <ArrowUpRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
