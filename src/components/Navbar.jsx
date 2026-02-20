import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Navbar Component - Navigation menu for entire site
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo - Links to home */}
          <Link to="/" className="navbar-logo">
            APTURA TECH
          </Link>

          {/* Hamburger menu button for mobile */}
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation menu */}
          <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
