import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-100 p-4 relative">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-500">{user.number}</p>
      {user.hasSubscribe ? (
        <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
          Premium User
        </span>
      ) : (
        <span className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
          Free User
        </span>
      )}
    </div>
  );
};

export default UserCard;
