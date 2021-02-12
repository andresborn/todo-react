import React from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="breadcrumb shadow-sm justify-content-between  tarea">
      <div className="col-11">
        <p>{task.value}</p>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        type="button"
        className="close col-1"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Task;
