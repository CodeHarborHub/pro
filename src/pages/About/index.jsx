import React from "react";
import "./about.css";

const About = () => {

  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="container">
          <h1 className="about-title">About CodeHarborHub Pro</h1>
          <p className="about-subtitle">
            Your ultimate platform for web development and tech learning. We
            empower learners, developers, and tech enthusiasts to grow their
            skills, build projects, and achieve their goals.
          </p>
          <a href="#our-mission" className="scroll-down">
            Learn More
          </a>
        </div>
      </div>

      <div className="about-content container">
        <div className="about-mission" id="our-mission">
          <div className="mission-image">
            <img src="https://via.placeholder.com/500" alt="Our Mission" />
          </div>
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At CodeHarborHub, our mission is to provide high-quality tech
              education and resources for all levels of learners. From beginners
              taking their first steps into web development, to experienced
              developers looking to expand their knowledge in new technologies,
              we offer a range of courses, tutorials, and projects that help
              everyone achieve their goals.
            </p>
            <p>
              We believe in learning by doing, and that's why we focus on
              project-based learning and real-world applications. Our platform
              encourages collaboration and innovation, bringing together a
              community of tech enthusiasts from around the world.
            </p>
          </div>
        </div>

        <div className="about-vision">
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>
              We aim to be the leading platform for tech education, where
              learners can not only build their skills but also showcase their
              work to the world. Our vision is to create a space where people
              can access the best resources, connect with like-minded
              individuals, and grow their professional careers.
            </p>
          </div>
          <div className="vision-image">
            <img src="https://via.placeholder.com/500" alt="Our Vision" />
          </div>
        </div>

        <div className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://via.placeholder.com/300" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/300" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/300" alt="Team Member 3" />
              <h3>Alex Johnson</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/300" alt="Team Member 4" />
              <h3>Emily Davis</h3>
              <p>Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <div className="container">
          <p>
            Join CodeHarborHub Pro and be part of a growing community of
            learners and developers. Our mission is to provide you with the best
            educational experience and guide you towards success in the tech
            industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
