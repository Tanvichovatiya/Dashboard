import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deleteTask, toggleTaskCompleted } from "../features/tasks/tasksSlice";
import { deleteTask,toggleTaskCompleted } from "../feature/tasksSlice";
const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    if (filter === "COMPLETED") return task.completed;
    if (filter === "PENDING") return !task.completed;
    if (filter === "OVERDUE") return new Date(task.dueDate) < new Date();
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="p-4 mb-2 border rounded flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(toggleTaskCompleted(task.id))}
              className={`px-4 py-2 rounded ${
                task.completed ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              {task.completed ? "Unmark" : "Complete"}
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
