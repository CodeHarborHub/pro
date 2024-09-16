import React, { useState, useEffect } from "react";
import { useAuth } from "../../../store/auth"; // Assuming this is your custom hook
import { toast } from "react-toastify";
import "./AdminContact.css";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const { authorizationToken, API } = useAuth();

  const getAllContacts = async () => {
    try {
      const response = await fetch(`${API}/admin/contacts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }

      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch contacts!");
    }
  };

  // Function to delete a contact
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${API}/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken, // Ensure token is correctly formatted
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      toast.success("Contact deleted successfully!");
      getAllContacts();
    } catch (error) {
      console.error(error);
      toast.error("Error deleting contact!");
    }
  };

  // Fetch contacts on component mount
  useEffect(() => {
    getAllContacts();
  }, []);

  // Filter contacts based on the search input
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.username.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-contacts">
      <h1>Contact Messages</h1>

      {/* Search bar for filtering contacts */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Contact table */}
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.username}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => deleteContact(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No contacts found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContact;