import ScrollReveal from '../common/ScrollReveal'
import { achievements } from '../../data/achievements'

function Achievements() {
  const achievement = achievements[0]

  return (
    <section className="content-section achievements-section" id="achievements">
      <ScrollReveal className="achievement-panel">
        <div>
          <p className="section-kicker">06 / PROGRESS WORTH CELEBRATING</p>
          <h2>A strong foundation.<br /><span>A curious mindset.</span></h2>
        </div>
        <div className="achievement-score">
          <span>{achievement.label.toUpperCase()}</span>
          <strong>{achievement.value}</strong>
          <span className="score-footer"><span /> {achievement.detail.toUpperCase()}</span>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Achievements
