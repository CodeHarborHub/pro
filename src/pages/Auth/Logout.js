import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Logout = () => {
  const navigate = useNavigate();
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [navigate]);

  return (
    <div className="logout-page">
      <div className="logout-container">
        <h1>Logging you out...</h1>
        <p>Please wait while we securely log you out from the system.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Logout;
