import { useEffect, useState } from "react";
import { useAuth } from "../../../store/auth";
import { Link } from "react-router-dom";
import "./AdminUsers.css";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();

      if (response.ok) {
        getAllUsersData();
        toast.success(data.msg);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <section className="admin-users-section">
      <div className="container">
        {/* <h2
          style={{
            textAlign: "center",
            color: "#333",
            fontSize: "2rem",
          }}
        >
          Users Data
        </h2> */}
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => (
              <tr key={index}>
                <td>{curUser.username}</td>
                <td>{curUser.email}</td>
                <td>{curUser.phone}</td>
                <td>
                  <Link
                    to={`/admin/users/${curUser._id}/edit`}
                    className="edit-link"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(curUser._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminUsers;
