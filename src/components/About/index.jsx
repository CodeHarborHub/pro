import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-us-section">
        <h2>About Us</h2>
      <div className="about-us-container">        
        <div className="about-us-image">
          <img
            src="https://codeharborhub.github.io/img/hero-img.png"
            alt="CodeHarborHub"
            className="profile-image"
          />
        </div>
        <div className="about-us-content">
          <p>
            Welcome to CodeHarborHub, your gateway to world-class web
            development education. We are passionate about delivering
            high-quality courses, tutorials, and hands-on projects to help you
            become a better developer. At CodeHarborHub, we focus on
            cutting-edge technologies and methodologies that empower you to turn
            your ideas into reality.
          </p>
          <p>
            Whether you're a beginner learning HTML or an advanced developer
            mastering the MERN stack, we are here to support your learning
            journey. Join us and become part of a vibrant community of tech
            enthusiasts!
          </p>
          <a href="/courses" className="btn-primary">
            Explore Our Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
