import useScrollAnimation from '../../hooks/useScrollAnimation'

function SkillCard({ skill, index, Icon }) {
  const { ref, isVisible, delay } = useScrollAnimation((index % 4) * 0.07)

  return (
    <article
      ref={ref}
      className="skill-cell scroll-reveal"
      data-revealed={isVisible}
      style={{ '--reveal-delay': `${delay}s` }}
    >
      <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
      <span className={`skill-icon skill-icon-${skill.icon}`} aria-hidden="true">
        <Icon size={22} strokeWidth={1.7} />
      </span>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-category">{skill.category}</span>
      <span className="skill-accent" aria-hidden="true" />
    </article>
  )
}

export default SkillCard
