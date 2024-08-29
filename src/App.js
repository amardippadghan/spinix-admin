import React from "react";
import AdminDashboard from "./components/AdminDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";
import Users from "./components/Users";
import ManageSubs from "./components/ManageSubs";
import Login from "./components/Login";
import CreateTask from "./components/CreateTask";
import HomePage from "./components/ViewTask";

function App() {
  return (
    <div className="flex h-screen">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/manage-subscription" element={<ManageSubs />} />
          <Route path="/create-task" element={<CreateTask/>}/>
          <Route path="/view-task" element={<HomePage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
