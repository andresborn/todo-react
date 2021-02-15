import React from "react";
import Task from "./Task";

const List = ({ taskList, deleteTask, toggleImportant, onHoverEnter, onHoverLeave }) => {
  return (
    <div>
      { taskList.map((task, i) => <Task key={i} task={task} deleteTask={deleteTask} toggleImportant={toggleImportant} onHoverEnter={onHoverEnter} onHoverLeave={onHoverLeave} />) }
    </div>
  );
};

export default List;
