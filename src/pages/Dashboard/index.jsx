import React from 'react';
import './dashboard.css';
import { useAuth } from "../../store/auth";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="/">Overview</a></li>
            <li><a href="/">Analytics</a></li>
            <li><a href="/">Messages</a></li>
            <li><a href="/">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome Back, {user ? ` ${user.username}` : `User`}!</h1>
          <p>Here's a quick overview of your latest activities.</p>
        </header>

        {/* Stats Cards */}
        <section className="dashboard-cards">
          <div className="card">
            <h3>Total Sales</h3>
            <p>$24,000</p>
          </div>
          <div className="card">
            <h3>New Users</h3>
            <p>1,200</p>
          </div>
          <div className="card">
            <h3>Active Projects</h3>
            <p>14</p>
          </div>
          <div className="card">
            <h3>Messages</h3>
            <p>8 New</p>
          </div>
        </section>

        {/* Analytics Chart Placeholder */}
        <section className="dashboard-charts">
          <div className="chart">
            <h2>Sales Analytics</h2>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
          <div className="chart">
            <h2>User Growth</h2>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="dashboard-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>User <b>John Doe</b> registered.</li>
            <li>Project <b>Website Redesign</b> was updated.</li>
            <li><b>24</b> new sales made in the last hour.</li>
            <li>You received <b>3</b> new messages.</li>
          </ul>
        </section>
        {/* Your info */}
        <section className="dashboard-info">
          <h2>Your Information</h2>
          <ul className="info-list">
            <li><b>Username:</b> {user ? user.username : "N/A"}</li>
            <li><b>Email:</b> {user ? user.email : "N/A"}</li>
            <li><b>Phone:</b> {user ? user.phone : "N/A"}</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;