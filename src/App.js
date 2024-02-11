import React from "react";
import AdminDashboard from "./components/AdminDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";
import Users from "./components/Users";
import ManageSubs from "./components/ManageSubs";

function App() {
  return (
    <div className="flex h-screen">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/manage-subscription" element={<ManageSubs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
