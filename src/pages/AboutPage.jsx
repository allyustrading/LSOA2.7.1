import aboutImg from '../assets/about-meeting.jpg'
import { PageHero, Container, Card } from '../components/Layout'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Liuli Society"
        text="Liuli Society exists to promote wellness education, research-informed exploration, and community-centered initiatives that support healthier, more grounded daily living."
        image={aboutImg}
        alt="People meeting indoors on a sofa"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Who we are</h3>
              <p>We are a mission-driven nonprofit platform committed to a calmer and more credible model of natural wellness education and supportive community work.</p>
            </Card>
            <Card>
              <h3>Why this matters</h3>
              <p>Our goal is to build trust with community audiences, universities, grant partners, and mission-aligned supporters through a clear nonprofit identity.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
