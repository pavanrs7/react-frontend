import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(
          "Thank you for your message! We will get back to you soon.",
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage(
          "Sorry, there was an error sending your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-main">
      {/* Page Title */}
      <div className="page-title">
        <h2>Contact</h2>
      </div>

      {/* Contact Information Section - footer-style icons, no grey box */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="info-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>mrudangamvatsa@gmail.com</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mrudangamvatsa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Send Email
            </a>
          </div>

          <div className="contact-info-card">
            <div className="info-icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <h3>Instagram</h3>
            <p>@sri_mrid_2004</p>
            <a
              href="https://www.instagram.com/sri_mrid_2004"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Follow Me
            </a>
          </div>

          <div className="contact-info-card">
            <div className="info-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <h3>Facebook</h3>
            <p>Connect on Facebook</p>
            <a
              href="https://www.facebook.com/srivatsa.s.923/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Visit Page
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-header">
          <h2>Send a Message</h2>
          <p>
            Have questions about learning Mridanga? Want to book a performance?
            Let's talk!
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell me about your interest in Mridanga..."
              rows="6"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {submitMessage && (
          <div
            className={`submit-message ${submitMessage.includes("Thank you") ? "success" : "error"}`}
          >
            {submitMessage}
          </div>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2>Ready to Start Learning?</h2>
          <p>
            Join me in exploring the beautiful world of Mridanga and Indian
            classical music.
          </p>
          <div className="cta-buttons">
            <a href="/learn" className="cta-btn primary">
              Start Learning
            </a>
            <a
              href="https://www.youtube.com/@srimrid2004"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn secondary"
            >
              Watch Videos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
