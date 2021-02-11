import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [hovered, setHovered] = useState(false);

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

  const toggleHover = () => setHovered(!hovered);

  const del = (e) => {
    console.log(e.target.id);
  };

  const RenderList = () => {
    return taskList.map((task, i) => {
      return (
        <div
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          key={i}
          data-attribute={i}
          className="breadcrumb shadow-sm justify-content-between  tarea"
        >
          <div className="col-10">
            <p>{task.value}</p>
          </div>

          <button
            type="button"
            className={`close col-2 ${hovered ? "d-flex" : "hidden"}`}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    });
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
          <form onSubmit={onSubmit} className="form-group">
            <input
              onChange={onChange}
              type="text"
              className="col-12 form-control eczar"
              placeholder="¿Qué hay para hoy?"
              value={task.value}
              required
            />
          </form>
        </div>
      </div>
      <div className="row eczar">
        <div className="col">
          <RenderList />
        </div>
      </div>
    </div>
  );
};

export default App;
