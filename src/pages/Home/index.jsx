import React from "react";
import About from "../../components/About";
import "./style.css";
import Courses from "../../components/Courses";
import Services from "../../components/Services";
import ContactUs from "../../components/ContactUs";

const Home = () => {
  return (
    <>
      <header className="hero-section">
        <div className="hero-content">
          <h2>Master Web Development with CodeHarborHub</h2>
          <p>
            Empowering learners to excel in tech. Join us and explore a wide
            range of coding tutorials, web development projects, and
            professional courses designed for all skill levels.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </header>

      <About />
      <Courses />
      <Services />
      <ContactUs />
      <div className="map-container" style={{ width: "100%", height: "450px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136827.18823342543!2d75.06577394680478!3d24.07537520171467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1725641044705!5m2!1sen!2sin"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Embed"
        />
      </div>
    </>
  );
};

export default Home;
