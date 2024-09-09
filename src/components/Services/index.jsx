import React from "react";
import "./services.css";

const servicesData = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "We provide custom web solutions using modern technologies like React, Node.js, and more.",
    icon: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    title: "Tech Courses & Tutorials",
    description: "Our platform offers high-quality tech courses for beginners, intermediates, and advanced learners.",
    icon: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Get user-centered, attractive designs that enhance user experience and engagement.",
    icon: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    title: "SEO & Digital Marketing",
    description: "We help improve your site's visibility and ranking using modern SEO techniques and strategies.",
    icon: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    title: "Custom Web Development",
    description: "We provide custom web solutions using modern technologies like React, Node.js, and more.",
    icon: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    title: "Tech Courses & Tutorials",
    description: "Our platform offers high-quality tech courses for beginners, intermediates, and advanced learners.",
    icon: "https://via.placeholder.com/50",
  },
  // Add more services here...
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          Explore the wide range of services we offer, designed to help you grow your tech skills and business.
        </p>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
