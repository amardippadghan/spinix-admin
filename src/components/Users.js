import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./smallcomponents/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://sphinix-backend.onrender.com/api/auth/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.delete(
          `https://sphinix-backend.onrender.com/api/auth/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        alert("User deleted successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting user:", error);
        // Handle error if needed
      }
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-3 gap-4 flex-1 p-10">
        {users.map((user) => (
          <UserCard key={user._id} user={user} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Users;
