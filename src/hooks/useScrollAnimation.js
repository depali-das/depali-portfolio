import { useReducedMotion } from 'framer-motion'

function useScrollAnimation(delay = 0) {
  const reduceMotion = useReducedMotion()

  return {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

export default useScrollAnimation
