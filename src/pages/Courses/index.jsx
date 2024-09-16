import React from "react";
import "./courses.css";

const courses = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    description:
      "Learn the basics of JavaScript with this beginner-friendly course.",
    image: "https://via.placeholder.com/300x200",
    level: "Beginner",
    duration: "6 weeks",
    link: "https://codeharborhub.github.io/docs/category/introduction-to-javascript-1",
  },
  {
    id: 2,
    title: "React.js Masterclass",
    description:
      "Dive deep into React.js and learn how to build dynamic web apps.",
    image: "https://via.placeholder.com/300x200",
    level: "Intermediate",
    duration: "8 weeks",
    link: "https://codeharborhub.github.io/courses/category/reactjs/",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    description:
      "Become a full-stack developer by mastering both frontend and backend technologies.",
    image: "https://via.placeholder.com/300x200",
    level: "Advanced",
    duration: "12 weeks",
    link: "#",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    description:
      "Master responsive design techniques to create websites that work on any device.",
    image: "https://via.placeholder.com/300x200",
    level: "Intermediate",
    duration: "4 weeks",
    link: "#",
  },
];

const CoursesPage = () => {
  return (
    <main>
      <div className="courses-page">
        <div className="courses-header">
          <h1>Explore Our Courses</h1>
          <p>
            Choose from a wide range of courses to level up your skills in web
            development.
          </p>
        </div>
        <div className="courses-container">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <div className="course-details">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <div className="course-info">
                  <span>Level: {course.level}</span>
                  <span>Duration: {course.duration}</span>
                </div>
                <button
                  className="enroll-btn"
                  onClick={() => window.open(course.link, "_blank")}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
