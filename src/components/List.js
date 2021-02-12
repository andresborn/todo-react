import React from "react";
import Task from "./Task";

const List = ({ taskList, deleteTask, toggleImportant, onHover }) => {
  return (
    <div>
      { taskList.map((task, i) => <Task key={i} task={task} deleteTask={deleteTask} toggleImportant={toggleImportant} onHover={onHover} />) }
    </div>
  );
};

export default List;
