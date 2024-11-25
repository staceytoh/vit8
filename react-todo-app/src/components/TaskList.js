import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Access tasks from store
  const dispatch = useDispatch();

  const deleteTask = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index }); // Dispatch delete action
  };

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          {task}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
