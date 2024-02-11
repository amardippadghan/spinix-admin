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
   const handleDelete = async (userId) => {
     if (window.confirm("Are you sure you want to delete this user?")) {
       try {
         const res = await axios.delete(
           `http://localhost:3000/api/auth/user/${userId}`
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
    <div className="grid grid-cols-3 gap-4 flex-1 p-10">
      {users.map((user) => (
        <UserCard key={user._id} user={user} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Users;
