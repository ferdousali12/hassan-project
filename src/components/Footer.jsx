import "./Footer.css";

// Footer Component - Reusable footer for entire site
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company info section */}
          <div className="footer-section">
            <h4>APTURA TECH</h4>
            <p>Advanced cybersecurity solutions for modern enterprises.</p>
          </div>

          {/* Quick links section */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services section */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Penetration Testing</a>
              </li>
              <li>
                <a href="#services">Cloud Security</a>
              </li>
              <li>
                <a href="#services">Threat Monitoring</a>
              </li>
            </ul>
          </div>

          {/* Contact info section */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@aptura-tech.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Street, Silicon Valley, CA</p>
          </div>
        </div>

        {/* Copyright section */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} APTURA TECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
