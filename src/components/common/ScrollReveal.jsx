import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ScrollReveal({ children, className = '', delay = 0 }) {
  const animation = useScrollAnimation(delay)

  return (
    <motion.div
      className={className}
      {...animation}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
