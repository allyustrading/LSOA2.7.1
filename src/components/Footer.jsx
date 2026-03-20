export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Liuli Society</div>
          <p>
            Liuli Society is a registered 501(c)(3) nonprofit organization in the
            United States focused on wellness education, research-informed innovation,
            and community-centered support.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#/home">Home</a>
          <a href="#/about">About Us</a>
          <a href="#/pathways">Pathways</a>
          <a href="#/research">Research</a>
          <a href="#/community">Community</a>
          <a href="#/support">Support Us</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#/about">Mission</a>
          <a href="#/research">Research</a>
          <a href="#/contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>General inquiries for education, research, and community partnership.</p>
          <a href="#/contact">Open contact page</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Liuli Society</span>
        <span>All rights reserved</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  )
}
