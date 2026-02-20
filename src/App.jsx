import { useState } from "react";
import "./App.css";

function Navbar({ currentView, setCurrentView }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">APTURA TECH</div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <button
              className={`nav-link ${currentView === "home" ? "active" : ""}`}
              onClick={() => {
                setCurrentView("home");
                setMenuOpen(false);
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === "services" ? "active" : ""}`}
              onClick={() => {
                setCurrentView("services");
                setMenuOpen(false);
              }}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === "projects" ? "active" : ""}`}
              onClick={() => {
                setCurrentView("projects");
                setMenuOpen(false);
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === "about" ? "active" : ""}`}
              onClick={() => {
                setCurrentView("about");
                setMenuOpen(false);
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === "contact" ? "active" : ""}`}
              onClick={() => {
                setCurrentView("contact");
                setMenuOpen(false);
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">AI Product Studio</div>
        <h1 className="hero-title">Convert AI Ideas Into Real Applications</h1>
        <p className="hero-subtitle">
          We transform your AI concepts into practical web apps, mobile apps, automations, dashboards, and business tools built for real users.
        </p>

        <div className="hero-buttons">
          <button className="cta-button">Start Your Project</button>
          <button className="cta-button cta-button-secondary">View Work</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">120+</div>
            <div className="stat-text">AI Solutions Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">40+</div>
            <div className="stat-text">Industries Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-text">Build and Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectCards = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Rock Paper Scissors ${index + 1}`,
    description:
      "Rock Paper Scissors is a lightweight, interactive game built with HTML, CSS, and JavaScript. It features a clean, responsive UI where players challenge a computer that makes real-time random choices. The game includes instant result displays, automatic score tracking, and is designed to showcase fundamental JavaScript logic.",
    url: "https://frabjous-crumble-9885cb.netlify.app/",
  }));

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectCards.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                className="project-button"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play live game
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      id: 1,
      title: "Threat Detection",
      icon: "Target",
      description:
        "Advanced AI-powered threat detection with machine learning algorithms",
    },
    {
      id: 2,
      title: "Vulnerability Management",
      icon: "Scan",
      description:
        "Comprehensive scanning and automated patching for vulnerabilities",
    },
    {
      id: 3,
      title: "Cloud Security",
      icon: "Cloud",
      description: "Multi-cloud security monitoring and compliance management",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">About Aptura Tech</h2>
        <p className="about-text">
          Aptura Tech is a leading cybersecurity innovator dedicated to
          protecting organizations from evolving digital threats. With over a
          decade of experience, we deliver cutting-edge security solutions that
          empower businesses to operate securely in the digital landscape.
        </p>
        <p className="about-text">
          Our mission is simple yet powerful: to make enterprise-grade
          cybersecurity accessible and affordable for businesses of all sizes.
          We combine artificial intelligence, human expertise, and advanced
          analytics to create a comprehensive security ecosystem.
        </p>
        <p className="about-text">
          Our team consists of 50+ security experts with decades of combined
          experience in identifying and neutralizing threats. We're committed to
          innovation, reliability, and customer success.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us about your security needs..."
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Aptura Tech</h3>
            <p className="footer-description">
              Enterprise-grade cybersecurity solutions protecting organizations
              worldwide.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                X
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                GH
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Threat Detection</a>
              </li>
              <li>
                <a href="#">Vulnerability Scanner</a>
              </li>
              <li>
                <a href="#">Cloud Security</a>
              </li>
              <li>
                <a href="#">Incident Response</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright {currentYear} Aptura Tech. All rights reserved.
          </p>
          <p className="footer-tagline">
            Protecting Digital Assets | Building Trust | Ensuring Security
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="app">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="main-content">
        {currentView === "home" && <Hero />}
        {currentView === "services" && <Services />}
        {currentView === "projects" && <Projects />}
        {currentView === "about" && <About />}
        {currentView === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

