import { motion, useReducedMotion } from 'framer-motion'

function AnimatedText({ children, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.h1
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.h1>
  )
}

export default AnimatedText
