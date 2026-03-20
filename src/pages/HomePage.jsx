import { Heart, Microscope, Users } from 'lucide-react'
import heroImg from '../assets/hero-lake.jpg'
import { Container, Card, SectionTitle } from '../components/Layout'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-card">
            <div className="hero-media">
              <img src={heroImg} alt="Woman sitting on a dock facing a mountain lake" className="contain" />
            </div>

            <div className="hero-content">
              <div className="eyebrow">Liuli Society</div>
              <h1 className="hero-title">Cultivating wellness, education, and community understanding</h1>
              <p className="hero-text">
                Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing wellness
                education, research-informed innovation, and community-centered support.
                This recreated version follows the classic nonprofit style of your reference
                while restoring complete page content.
              </p>
              <div className="hero-actions">
                <a href="#/about" className="button button-deep">Learn More</a>
                <a href="#/support" className="button button-bronze">Get Involved</a>
              </div>

              <div className="info-row">
                <div className="info-box">
                  <Heart size={22} />
                  <strong>Holistic Education</strong>
                  <span>Clear and thoughtful wellness learning for everyday life.</span>
                </div>
                <div className="info-box">
                  <Microscope size={22} />
                  <strong>Innovative Research</strong>
                  <span>Research-informed exploration shaped by nonprofit values.</span>
                </div>
                <div className="info-box">
                  <Users size={22} />
                  <strong>Community Engagement</strong>
                  <span>Programs and partnerships grounded in trust and care.</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Mission"
            title="A standard institutional presentation for a nonprofit wellness platform"
            text="The website is built to communicate trust, clarity, and mission alignment to community audiences, universities, and future partners."
          />
          <div className="grid-3">
            <Card>
              <div className="tagline">Mission</div>
              <h3>Education first</h3>
              <p>We help make wellness ideas more understandable through accessible language, thoughtful structure, and nonprofit-safe communication.</p>
            </Card>
            <Card>
              <div className="tagline">Research</div>
              <h3>Responsible exploration</h3>
              <p>We present innovation as an educational and research-informed process, rather than as direct product marketing or clinical claims.</p>
            </Card>
            <Card>
              <div className="tagline">Community</div>
              <h3>Supportive engagement</h3>
              <p>We aim to create a more humane model for learning, conversation, and mission-aligned collaboration.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
