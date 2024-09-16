import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/auth";
import { toast } from "react-toastify";
import "./AdminUpdate.css";

const AdminUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken, API } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${API}/admin/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUser({
        username: data.username,
        email: data.email,
        phone: data.phone,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch user data!");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/admin/users/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("User updated successfully!");
        navigate("/admin/users");
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating user!");
    }
  };

  return (
    <div className="admin-update">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
        </div>
        <button type="submit" className="btn-update">
          Update User
        </button>
      </form>
    </div>
  );
};

export default AdminUpdate;