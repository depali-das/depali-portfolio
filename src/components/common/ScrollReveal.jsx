import useScrollAnimation from '../../hooks/useScrollAnimation'

function ScrollReveal({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation(delay)

  return (
    <div
      ref={ref}
      className={`scroll-reveal${className ? ` ${className}` : ''}`}
      data-revealed={isVisible}
      style={{ '--reveal-delay': `${delay}s` }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
