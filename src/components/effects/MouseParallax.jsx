import { motion, useReducedMotion } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'

function MouseParallax({ children, className = '', intensity = 8 }) {
  const reduceMotion = useReducedMotion()
  const { x, y, onMouseEnter, onMouseMove, reset } = useMousePosition(intensity)

  return (
    <motion.div
      className={className}
      style={reduceMotion ? undefined : { x, y }}
      onMouseEnter={reduceMotion ? undefined : onMouseEnter}
      onMouseMove={reduceMotion ? undefined : onMouseMove}
      onMouseLeave={reduceMotion ? undefined : reset}
    >
      {children}
    </motion.div>
  )
}

export default MouseParallax
