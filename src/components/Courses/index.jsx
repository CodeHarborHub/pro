import React from "react";
import "./courses.css";

const coursesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, and Node.js in this comprehensive course.",
    image: "https://via.placeholder.com/300x200",
    category: "Web Development",
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    description:
      "Become an expert in JavaScript with advanced techniques and projects.",
    image: "https://via.placeholder.com/300x200",
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description:
      "Master both front-end and back-end development with the MERN stack.",
    image: "https://via.placeholder.com/300x200",
    category: "Full Stack",
  },
  // Add more course data here...
];

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="section-description">
          Explore a wide range of courses designed to help you become a
          professional in tech and web development.
        </p>
        <div className="courses-grid">
          {coursesData.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <button className="course-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;