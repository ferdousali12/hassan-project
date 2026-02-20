import Button from "../components/Button";
import Card from "../components/Card";
import "./Home.css";

// Home Page - Landing page with hero section and features
function Home() {
  const features = [
    {
      icon: "Shield",
      title: "Advanced Protection",
      description:
        "Multi-layered security infrastructure to protect your digital assets from modern threats.",
    },
    {
      icon: "Detect",
      title: "Threat Detection",
      description:
        "Real-time monitoring and detection of security threats using AI-powered analytics.",
    },
    {
      icon: "Fast",
      title: "Rapid Response",
      description:
        "24/7 incident response team ready to address any security emergencies.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Secure Your Digital Future</h1>
            <p className="hero-subtitle">
              Enterprise-grade cybersecurity solutions designed to protect your
              business from evolving threats
            </p>
            <Button variant="primary" size="large">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose APTURA TECH</h2>
            <p>
              Industry-leading cybersecurity with proven expertise across
              Fortune 500 companies
            </p>
          </div>

          <div className="grid grid-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={<span className="feature-icon">{feature.icon}</span>}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Strengthen Your Security Posture?</h2>
            <p>
              Let our experts conduct a comprehensive security assessment of
              your infrastructure
            </p>
            <Button variant="primary" size="large">
              Schedule Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;


