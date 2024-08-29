import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewTask() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `https://sphinix-backend.onrender.com/api/task/getTask`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response.data);
        setTasks(response.data.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className={`shadow-md rounded-lg p-4 ${
              task.status === "Complete" ? "bg-green-200" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {task.title}
            </h2>
            <p className="text-gray-600 text-sm">{task.description}</p>
            <p className="text-gray-500 text-xs">
              Due Date: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <p className="text-gray-500 text-xs">Priority: {task.priority}</p>
            <p className="text-gray-500 text-xs">Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewTask;
