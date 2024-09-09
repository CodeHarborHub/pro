import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/pro" className="btn-home">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;