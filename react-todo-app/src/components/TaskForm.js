import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const [task, setTask] = useState(""); // State for task input
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch({ type: "ADD_TASK", payload: task }); 
      setTask(""); // Clear input field
    }
  };

  return (
    <form onSubmit={addTask} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
