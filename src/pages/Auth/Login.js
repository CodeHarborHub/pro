import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { API } = useAuth();

  const navigate = useNavigate();
  const storTokenInLocalStorage = useAuth().storTokenInLocalStorage;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = user;
    if (!email || !password) {
      return "Both fields are required!";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Invalid email format!";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      toast.error(errorMsg); // Show error toast
    } else {
      // Prepare request options for the fetch call
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      try {
        const response = await fetch(API + "/auth/login", requestOptions);
        const data = await response.json();

        if (response.ok) {
          toast.success("Login successful!"); // Show success toast

          storTokenInLocalStorage(data.token);
          setUser({ email: "", password: "" });
          navigate("/pro/dashboard"); // Redirect to the dashboard page
        } else {
          toast.error(
            data.message || "Login failed. Please check your credentials."
          );
        }
      } catch (err) {
        console.error("Error:", err);
        toast.error("Something went wrong. Please check the server.");
      }
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="login-grid">
          <div className="login-image">
            <img src="/pro/img/login.png" alt="nurse with a cute look" />
          </div>
          <div className="login-form">
            <h1 className="heading">Login Form</h1>
            <form onSubmit={handleSubmit} noValidate>
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

              <button type="submit" className="btn btn-primary">
                Login Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
