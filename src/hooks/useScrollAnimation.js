import { useEffect, useRef, useState } from 'react'

function useScrollAnimation(delay = 0) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      const timeoutId = window.setTimeout(() => setIsVisible(true), 0)
      return () => window.clearTimeout(timeoutId)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible, delay }
}

export default useScrollAnimation
