import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="p-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="flex flex-col mt-5">
        <SidebarLink to="/users" text="Users" />
        <SidebarLink to="/manage-subscription" text="Manage Subscription" />
      </nav>
    </div>
  );
};

const SidebarLink = ({ to, text }) => {
  return (
    <Link to={to} className="px-4 py-2 text-gray-300 hover:bg-gray-700">
      {text}
    </Link>
  );
};

export default Sidebar;
