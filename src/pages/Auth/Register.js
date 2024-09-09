import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Register = () => {
  const { API, storTokenInLocalStorage, isLoggedIn } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { username, email, phone, password } = user;
    if (!username || !email || !phone || !password) {
      return "All fields are required!";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Invalid email format!";
    }
    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must be 10 digits!";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setError(errorMsg);
      setSuccessMessage("");
    } else {
      setError("");
      setSuccessMessage("");

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      try {
        const response = await fetch(API + "/auth/register", requestOptions);
        const data = await response.json();

        if (response.ok) {
          setSuccessMessage("Registration successful! You can now log in.");
          storTokenInLocalStorage(data.token);
          setShowPopup(true);
          setUser({
            username: "",
            email: "",
            phone: "",
            password: "",
          });
        } else {
          setError(data.msg || "Failed to register. Please try again.");
        }
      } catch (err) {
        console.error("Error:", err);
        setError("Something went wrong. Please check the server.");
      }
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/login");
  };

  return (
    <section className="register-section">
      {isLoggedIn ? (
        <div className="popup-card">
          <div className="popup-content">
            <h2>You are already logged in!</h2>
            <p>Please log out to register a new account.</p>
            <button onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="register-grid">
            <div className="register-image">
              <img src="/pro/img/register.png" alt="a nurse with a cute look" />
            </div>
            <div className="register-form">
              <h1 className="heading">Registration Form</h1>
              <form onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {error && <p className="error-msg">{error}</p>}
                {successMessage && (
                  <p className="success-msg">{successMessage}</p>
                )}

                <button type="submit" className="btn btn-primary">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Popup for registration success */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Registration Successful!</h2>
            <p>Your account has been created. You can now log in.</p>
            <button onClick={handlePopupClose}>Go to Login</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;
