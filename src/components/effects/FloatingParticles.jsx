function FloatingParticles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 14 }, (_, index) => (
        <span className={`particle particle-${index + 1}`} key={index} />
      ))}
    </div>
  )
}

export default FloatingParticles
