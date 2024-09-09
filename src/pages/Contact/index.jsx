import React, { useState } from "react";
import "./contact.css";
import { useAuth } from "../../store/auth";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const {user, API} = useAuth();
  const [userData, setUserData] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (user && userData) {
    setFormData({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    // Basic validation
    if (!formData.username || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(API+"/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const result = await response.json();
        setError(result.message || "Failed to send the message.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! Please fill out the form below, and we
            will get back to you as soon as possible.
          </p>

          {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
          {success && <p className="success-msg" style={{ color: "#48df84" }}>{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Your Name</label>
              <input
                type="text"
                id="name"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-map">
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136827.18823342543!2d75.06577394680478!3d24.07537520171467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1725641044705!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;