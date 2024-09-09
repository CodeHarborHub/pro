import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../store/auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isLoggedIn } = useAuth();

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when an item is clicked (on mobile)
  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  // Check if the screen is mobile-sized and adjust the state accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(false); // Close the menu if resizing back to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on first render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/pro" className="navbar-link navbar-brand">
          <img
            src="https://codeharborhub.github.io/img/nav-logo.jpg"
            alt="logo"
          />
          <span className="brand-name">CodeHarborHub</span>
        </Link>
      </div>

      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/pro" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pro/about" className="navbar-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pro/contact" className="navbar-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pro/courses" className="navbar-link" onClick={closeMenu}>
              Courses
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pro/services" className="navbar-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="navbar-item">
                <Link
                  to="/dashboard"
                  className="navbar-link"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/logout" className="navbar-link" onClick={closeMenu}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link
                  to="/register"
                  className="navbar-link"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link" onClick={closeMenu}>
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
