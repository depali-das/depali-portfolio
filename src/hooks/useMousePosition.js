import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

function useMousePosition(intensity = 1) {
  const boundsRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, { stiffness: 90, damping: 20 })
  const y = useSpring(mouseY, { stiffness: 90, damping: 20 })

  useEffect(() => {
    const invalidateBounds = () => {
      boundsRef.current = null
    }

    window.addEventListener('resize', invalidateBounds)
    window.addEventListener('scroll', invalidateBounds, true)
    return () => {
      window.removeEventListener('resize', invalidateBounds)
      window.removeEventListener('scroll', invalidateBounds, true)
    }
  }, [])

  const measureBounds = (element) => {
    const { left, top, width, height } = element.getBoundingClientRect()
    boundsRef.current = { left, top, width, height }
  }

  const onMouseEnter = (event) => {
    measureBounds(event.currentTarget)
  }

  const onMouseMove = (event) => {
    if (!boundsRef.current) measureBounds(event.currentTarget)
    const bounds = boundsRef.current
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * intensity)
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * intensity)
  }

  const reset = () => {
    boundsRef.current = null
    x.set(0)
    y.set(0)
  }

  return { x, y, onMouseEnter, onMouseMove, reset }
}

export default useMousePosition
