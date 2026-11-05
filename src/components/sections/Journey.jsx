import { Sparkles } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import SectionTitle from '../common/SectionTitle'
import { journey } from '../../data/journey'

function Journey() {
  return (
    <section className="content-section journey-inner journey-story" id="journey">
      <ScrollReveal>
        <SectionTitle kicker="05 / THE JOURNEY CONTINUES">
          Learning, building,<br /><span>and moving forward.</span>
        </SectionTitle>
      </ScrollReveal>
      <ScrollReveal className="journey-footnote">
        <Sparkles size={16} />
        <span>{journey.note}</span>
      </ScrollReveal>
    </section>
  )
}

export default Journey
