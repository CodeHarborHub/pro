import React, { useState } from "react";
import { useAuth } from "../../store/auth";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { user, API } = useAuth();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(true);

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
    setLoading(true);
    setFormError(false);
    try {
      const response = await fetch(API+"/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ username: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <h2
        style={{
          textAlign: "center",
          color: "var(--ifm-text-color)",
          marginBottom: "2rem",
        }}
      >
        Contact Us
      </h2>
      <p
        style={{
          textAlign: "center",
        }}
      >
        We’d love to hear from you! Please fill out the form below, and we will
        get back to you as soon as possible.
      </p>

      <div className="contact-container">
        <div className="contact-form">
          {formSubmitted ? (
            <div className="form-success">
              <h3
                style={{
                  textAlign: "center",
                }}
              >
                Thank you for reaching out! We'll get back to you soon.
              </h3>
            </div>
          ) : formError ? (
            <div className="form-error">
              <h3
                style={{
                  textAlign: "center",
                }}
              >
                Oops! Something went wrong. Please try again later.
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
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

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
