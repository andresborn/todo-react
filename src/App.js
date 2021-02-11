import React, { useState } from 'react';
import "./App.css";

const App = () => {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="ewert">Tareas de vaquero</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form className="form-group">
            <input type="text" className="col-12 form-control eczar" placeholder="¿Qué hay para hoy?"/>
          </form>
        </div>
      </div>
      <div className="row eczar">
        <div className="col">
          <p className="breadcrumb shadow-sm tarea ">Tarea 1</p>
          <p className="breadcrumb shadow-sm tarea ">Tarea 2</p>
        </div>
      </div>
    </div>
  );
};

export default App;
