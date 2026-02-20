import "./About.css";

// About Page - Company information, mission, vision, and team
function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      specialty: "Strategic Security Leadership",
    },
    {
      name: "Sarah Chen",
      role: "Chief Security Officer",
      specialty: "Threat Intelligence & Analysis",
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Operations",
      specialty: "Incident Response & Forensics",
    },
    {
      name: "Elena Petrova",
      role: "Lead Security Architect",
      specialty: "Infrastructure & Cloud Security",
    },
  ];

  return (
    <main>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About APTURA TECH</h1>
          <p>Protecting enterprises from cyber threats for over 15 years</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="overview">
        <div className="container">
          <div className="section-title">
            <h2>Who We Are</h2>
          </div>

          <div className="overview-grid">
            <div className="overview-card">
              <h3>Our Story</h3>
              <p>
                Founded in 2009, APTURA TECH has grown from a small cyber
                defense team to a leading provider of enterprise cybersecurity
                solutions. We've worked with Fortune 500 companies, government
                agencies, and critical infrastructure providers worldwide.
              </p>
            </div>

            <div className="overview-card">
              <h3>Our Commitment</h3>
              <p>
                We believe that cybersecurity is not just about technology - it's
                about partnership. We work closely with our clients to
                understand their unique challenges and deliver tailored
                solutions that fit their specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            {/* Mission */}
            <div className="mv-card">
              <div className="mv-icon">M</div>
              <h3>Our Mission</h3>
              <p>
                To empower organizations with advanced cybersecurity solutions
                that protect their digital assets, enable secure business
                operations, and foster trust in the digital ecosystem.
              </p>
            </div>

            {/* Vision */}
            <div className="mv-card">
              <div className="mv-icon">V</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted cybersecurity partner globally,
                recognized for our innovation, expertise, and commitment to
                delivering exceptional outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership Team</h2>
            <p>
              Industry veterans with decades of combined cybersecurity
              experience
            </p>
          </div>

          <div className="grid grid-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.name[0]}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-specialty">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Protected</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Threat Detection Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitoring & Support</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;


