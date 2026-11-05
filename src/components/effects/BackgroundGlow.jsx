import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

function BackgroundGlow({ targetRef }) {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })
  const orbDrift = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 64])
  const reverseOrbDrift = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -36])

  return (
    <>
      <motion.div className="hero-orb hero-orb-one" style={{ y: orbDrift }} />
      <motion.div className="hero-orb hero-orb-two" style={{ y: reverseOrbDrift }} />
    </>
  )
}

export default BackgroundGlow
