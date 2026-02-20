import Card from "../components/Card";
import "./Services.css";

// Services Page - Display all security services
function Services() {
  const services = [
    {
      icon: "Scan",
      title: "Penetration Testing",
      description:
        "Comprehensive security assessments to identify vulnerabilities before attackers do. Our certified experts simulate real-world attacks to test your defenses.",
    },
    {
      icon: "Cloud",
      title: "Cloud Security",
      description:
        "Multi-cloud security solutions for AWS, Azure, and Google Cloud. Protect your data, applications, and infrastructure in the cloud environment.",
    },
    {
      icon: "Monitor",
      title: "Threat Monitoring",
      description:
        "24/7 real-time threat detection and response. Advanced analytics and AI-powered monitoring to detect threats before they become incidents.",
    },
    {
      icon: "Lock",
      title: "Data Protection",
      description:
        "End-to-end encryption, data loss prevention, and compliance solutions. Safeguard sensitive information across your organization.",
    },
    {
      icon: "Build",
      title: "Infrastructure Security",
      description:
        "Secure network design, firewall management, and endpoint protection. Build a robust security infrastructure from the ground up.",
    },
    {
      icon: "Audit",
      title: "Compliance & Audits",
      description:
        "ISO 27001, SOC 2, HIPAA, GDPR, and other compliance certifications. Ensure your organization meets all regulatory requirements.",
    },
  ];

  return (
    <main>
      {/* Services Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Security Services</h1>
          <p>Comprehensive cybersecurity solutions tailored to your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>
              From threat detection to compliance, we provide end-to-end
              security solutions
            </p>
          </div>

          <div className="grid grid-3">
            {services.map((service, index) => (
              <Card
                key={index}
                icon={<span className="service-icon">{service.icon}</span>}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Services</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">OK</div>
              <h4>Expert Team</h4>
              <p>
                Certified security professionals with years of industry
                experience
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">OK</div>
              <h4>Custom Solutions</h4>
              <p>
                Tailored security strategies for your specific business needs
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">OK</div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock monitoring and incident response team</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">OK</div>
              <h4>Latest Technology</h4>
              <p>Cutting-edge tools and techniques for maximum protection</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;


