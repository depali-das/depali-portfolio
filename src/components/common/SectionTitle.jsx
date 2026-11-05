function SectionTitle({ kicker, children, note, className = '' }) {
  return (
    <div className={`section-heading${note ? ' section-heading-row' : ''} ${className}`.trim()}>
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2>{children}</h2>
      </div>
      {note && <p className="heading-note">{note}</p>}
    </div>
  )
}

export default SectionTitle
