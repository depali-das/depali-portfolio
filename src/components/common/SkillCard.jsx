import { motion, useReducedMotion } from 'framer-motion'

function SkillCard({ skill, index, Icon }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="skill-cell"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : (index % 4) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
    >
      <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
      <span className={`skill-icon skill-icon-${skill.icon}`} aria-hidden="true">
        <Icon size={22} strokeWidth={1.7} />
      </span>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-category">{skill.category}</span>
      <span className="skill-accent" aria-hidden="true" />
    </motion.article>
  )
}

export default SkillCard
