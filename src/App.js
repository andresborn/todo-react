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
      important: false,
      hover: false
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    console.log(task);
    setTask({ value: "" });
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => !(task.id === id)))
  }

  const toggleImportant = (id) => {
    setTaskList(taskList.map(task => {
      if (task.id === id) {
        task.important = !task.important
        return task
      } else {
        return task
      }
    }))
    console.log(taskList)
  }
  const onHover = (id) => {
    setTaskList(taskList.map(task => {
      if (task.id === id) {
        task.hover = !task.hover
        return task
      } else {
        return task
      }
    }))
  }
  

  return (
    <div className="container">
      <div className="row my-2">
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
        
        { taskList.length > 0 ? <List 
          taskList={taskList} 
          deleteTask={deleteTask} 
          toggleImportant={toggleImportant}
          onHover={onHover} /> : "No hay tareas en la lista"}

        </div>
      </div>
    </div>
  );
};

export default App;
