import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const onChange = (e) => {
    const id = nanoid();
    setTask({
      value: e.target.value,
      id: id,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    console.log(task);
    setTask({ value: "" });
  };

  const deleteTask = (id) => {
    const test = taskList.filter((task) => !(task.id === id));
    setTaskList(test);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="ewert">Tareas Vaqueras</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={onSubmit} onChange={onChange} task={task} />
        </div>
      </div>
      <div className="row eczar">
        <div className="col">
          <List taskList={taskList} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
