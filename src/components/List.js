import React from "react";
import Task from "./Task";

const List = ({ taskList, deleteTask }) => {
  return (
    <div>
      { taskList.map((task, i) => <Task key={i} task={task} deleteTask={deleteTask} />) }
    </div>
  );
};

export default List;
