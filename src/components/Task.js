import React from "react";

const Task = ({ task, deleteTask, toggleImportant, onHover }) => {
  return (
    <div 
    onMouseEnter={() => onHover(task.id)}
    onMouseLeave={() => onHover(task.id)}
    onDoubleClick={() => toggleImportant(task.id)}
    className={`breadcrumb justify-content-between tarea ${task.important ? "important" : "" }`}>
      <div className="col-11">
        <p>{task.value}</p>
      </div>
      <button
        className={`close col-1 ${task.hover ? "" : "hidden"}`}
        onClick={() => deleteTask(task.id)}
        type="button"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Task;
