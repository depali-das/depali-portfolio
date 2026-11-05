import { useEffect, useRef, useState } from 'react'

function useScrollAnimation(delay = 0) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => (
    typeof window === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  ))

  useEffect(() => {
    const element = ref.current
    if (!element || isVisible) return undefined

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
  }, [isVisible])

  return { ref, isVisible, delay }
}

export default useScrollAnimation
