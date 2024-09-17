import React from "react";
import "./dashboard.css";
import { useAuth } from "../../store/auth";
import {
  FaOutdent,
  FaBook,
  FaUserGraduate,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    toast.error("You must be logged in to access the dashboard.");
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="#">
                <FaOutdent /> <span className="nav-text">Overview</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaBook /> <span className="nav-text">Courses</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaUserGraduate /> <span className="nav-text">Achievements</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaEnvelope /> <span className="nav-text">Messages</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaCog /> <span className="nav-text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>
            Welcome Back,{" "}
            <span className="username">{user ? user.username : "User"}</span>!{" "}
          </h1>
          <p>Track your progress and continue your learning journey.</p>
        </header>

        {/* Stats Cards */}
        <section className="dashboard-cards">
          <div className="card">
            <h3>Completed Courses</h3>
            <p>4 / 10</p>
          </div>
          <div className="card">
            <h3>Upcoming Lessons</h3>
            <p>Next: JavaScript Basics</p>
          </div>
          <div className="card">
            <h3>Achievements</h3>
            <p>3 Badges Earned</p>
          </div>
          <div className="card">
            <h3>Messages</h3>
            <p>2 New</p>
          </div>
        </section>

        {/* Course Progress */}
        <section className="dashboard-courses">
          <h2>Your Course Progress</h2>
          <div className="course-list">
            <div className="course-item">
              <h3>HTML & CSS for Beginners</h3>
              <p>Progress: 70%</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="course-item">
              <h3>JavaScript Fundamentals</h3>
              <p>Progress: 50%</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="course-item">
              <h3>React.js Basics</h3>
              <p>Progress: 30%</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="dashboard-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>
              You completed the lesson <b>HTML Forms</b>.
            </li>
            <li>
              Started the course <b>JavaScript Fundamentals</b>.
            </li>
            <li>
              You earned the badge <b>Beginner HTML/CSS</b>.
            </li>
            <li>
              You received <b>2</b> new messages from your instructor.
            </li>
          </ul>
        </section>

        {/* User Information */}
        <section className="dashboard-info">
          <h2>Your Information</h2>
          <ul className="info-list">
            <li>
              <b>Username:</b> {user ? user.username : "N/A"}
            </li>
            <li>
              <b>Email:</b> {user ? user.email : "N/A"}
            </li>
            <li>
              <b>Phone:</b> {user ? user.phone : "N/A"}
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
