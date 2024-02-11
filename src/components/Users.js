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
      const response = await axios.get("http://localhost:3000/api/auth/users");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 flex-1 p-10">
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Users;
