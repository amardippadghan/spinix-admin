import React, { useState } from "react";
import axios from "axios";

const UserCard = ({ user, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleSaveEdit = async () => {
    setIsEditing(false);
    // Call a function to handle saving the edited user data
    if (window.confirm("Are you sure you want to edit this user?")) {
      try {
        const res = await axios.patch(
          `http://localhost:3000/api/auth/user/${user._id}`,
          editedUser
        );
        console.log(res);
        alert("User updated successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Error updating user");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="bg-gray-100 p-4 relative">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            className="w-full mb-2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            className="w-full mb-2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="number"
            value={editedUser.number}
            onChange={handleInputChange}
            className="w-full mb-2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.number}</p>
          {user.hasSubscribe ? (
            <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              Premium User
            </span>
          ) : (
            <div>
              <span className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                Free User
              </span>
              <button className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                Subscribe
              </button>
            </div>
          )}
          <div className="mt-2">
            <button
              onClick={handleEditClick}
              className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
