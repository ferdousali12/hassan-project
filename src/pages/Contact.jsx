import { useState } from "react";
import Button from "../components/Button";
import "./Contact.css";

// Contact Page - Contact form with validation
function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validation errors state
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus(null);
    } else {
      // Form is valid - show success message
      setSubmitStatus("success");
      setErrors({});

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      // Log form data (in real app, send to server)
      console.log("Form submitted:", formData);
    }
  };

  return (
    <main>
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Let's discuss how we can secure your business</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                Have questions? We're here to help. Reach out to our team today.
              </p>

              <div className="info-item">
                <h4>Address</h4>
                <p>
                  123 Tech Street
                  <br />
                  Silicon Valley, CA 94025
                  <br />
                  United States
                </p>
              </div>

              <div className="info-item">
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@aptura-tech.com">info@aptura-tech.com</a>
                  <br />
                </p>
              </div>

              <div className="info-item">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </p>
              </div>

              <div className="info-item">
                <h4>Business Hours</h4>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>

              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your security needs..."
                    rows="6"
                    className={errors.message ? "input-error" : ""}
                  ></textarea>
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" size="large">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

