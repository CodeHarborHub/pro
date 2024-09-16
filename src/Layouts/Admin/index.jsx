import { Link, Outlet } from "react-router-dom";
import { FaBuffer, FaUser, FaEnvelope, FaBook, FaTools } from "react-icons/fa";
import { useAuth } from "../../store/auth";
import "./Admin.css";

const Admin = () => {
  const { user } = useAuth();

  if (!user.isAdmin) {
    return (
      <div className="error-page">
        <div className="error-container">
          <h1 className="error-code">403</h1>
          <h2 className="error-message">Forbidden</h2>
          <p className="error-description">
            Sorry, you don't have access to this page
          </p>
          <Link to="/" className="btn-home">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="admin-panel">
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/admin" className="sidebar-link">
                <FaBuffer className="icon" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="sidebar-link">
                <FaUser className="icon" /> All Users
              </Link>
            </li>
            <li>
              <Link to="/admin/contacts" className="sidebar-link">
                <FaEnvelope className="icon" /> Contacts
              </Link>
            </li>
            <li>
              <Link to="/admin/courses" className="sidebar-link">
                <FaBook className="icon" /> Courses
              </Link>
            </li>
            <li>
              <Link to="/admin/services" className="sidebar-link">
                <FaTools className="icon" /> Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <header className="admin-header">
          <h1>Welcome to CodeHarborHub Admin Panel</h1>
          <div className="admin-info">
            <p>Manage users, courses, services, and more!</p>
          </div>
        </header>
        <section className="main-content">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Admin;