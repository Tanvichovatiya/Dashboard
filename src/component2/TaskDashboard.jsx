import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { setFilter } from "../feature/tasksSlice";
const TaskDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Task Management Dashboard</h2>
      <div className="flex gap-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Task"}
        </button>
        <button onClick={() => handleFilterChange("ALL")}>All Tasks</button>
        <button onClick={() => handleFilterChange("COMPLETED")}>Completed</button>
        <button onClick={() => handleFilterChange("PENDING")}>Pending</button>
        <button onClick={() => handleFilterChange("OVERDUE")}>Overdue</button>
      </div>
      {showForm && <TaskForm />}
      <TaskList />
    </div>
  );
};

export default TaskDashboard;
