import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import ManageSubs from "./components/ManageSubs";
import NotFound from "./components/NotFound";

const MainRoutes = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/manage-subscription" element={<ManageSubs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
