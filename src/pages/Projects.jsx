import { useState } from "react";
import Button from "../components/Button";
import "./Projects.css";

// Projects Page - Display completed security projects
function Projects() {
  // State for modal
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Enterprise Banking Security",
      description:
        "Implemented multi-layered security architecture for leading financial institution",
      category: "Finance",
      details:
        "Designed and implemented a comprehensive security infrastructure that reduced vulnerabilities by 94% and improved incident response time from hours to minutes. Included penetration testing, network segmentation, and advanced threat detection systems.",
    },
    {
      id: 2,
      title: "Healthcare Data Protection",
      description:
        "Secured patient data and achieved HIPAA compliance for healthcare provider",
      category: "Healthcare",
      details:
        "Deployed end-to-end encryption, access controls, and audit logging systems. Ensured 99.9% uptime and passed rigorous HIPAA compliance audits. Implemented secure data sharing protocols for inter-hospital communications.",
    },
    {
      id: 3,
      title: "Cloud Migration Security",
      description:
        "Secured multi-cloud infrastructure migration for Fortune 500 company",
      category: "Cloud",
      details:
        "Managed security throughout migration to AWS, Azure, and Google Cloud. Implemented zero-trust architecture, containerization security, and continuous monitoring. Achieved 100% encryption of data at rest and in transit.",
    },
    {
      id: 4,
      title: "Government Network Hardening",
      description:
        "Enhanced national defense systems with advanced cyber capabilities",
      category: "Government",
      details:
        "Deployed advanced intrusion detection systems, security operations centers, and intelligence fusion platforms. Provided training to 500+ cybersecurity personnel and established threat intelligence sharing protocols.",
    },
    {
      id: 5,
      title: "E-commerce Security Platform",
      description:
        "Prevented $50M+ in potential financial fraud for online retailer",
      category: "Retail",
      details:
        "Implemented AI-powered fraud detection, payment security, and customer data protection. Reduced fraudulent transactions by 99.7% while maintaining seamless customer experience. Achieved PCI-DSS Level 1 compliance.",
    },
    {
      id: 6,
      title: "Critical Infrastructure Protection",
      description: "Defended power grid against evolving cyber threats",
      category: "Infrastructure",
      details:
        "Implemented SCADA security, ICS monitoring, and incident response protocols. Developed resilience against supply chain attacks. Established 24/7 monitoring with integration of IoT sensors across infrastructure.",
    },
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main>
      {/* Projects Hero */}
      <section className="projects-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Real-world security solutions that made a difference</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="section-title">
            <h2>Completed Security Engagements</h2>
            <p>
              Proven success across diverse industries and challenging security
              environments
            </p>
          </div>

          <div className="rps-grid">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="rps-card" key={idx}>
                <h2 className="rps-title">Rock Paper Scissors</h2>
                <div className="rps-underline" aria-hidden="true"></div>
                <p className="rps-text">
                  Rock Paper Scissors is a lightweight, interactive game built
                  with HTML, CSS, and JavaScript. It features a clean,
                  responsive UI where players challenge a computer that makes
                  real-time random choices. The game includes instant result
                  displays, automatic score tracking, and is designed to
                  showcase fundamental JavaScript logic.
                </p>
                <a
                  className="rps-link"
                  href="https://frabjous-crumble-9885cb.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play the live game here
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <div className="modal-category">{selectedProject.category}</div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <hr className="modal-divider" />
            <h4>Project Details</h4>
            <p>{selectedProject.details}</p>
            <div className="modal-footer">
              <Button variant="primary" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;

