import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const getTaskListFromServer = async () => {
      const serverTaskList = await getData()
      setTaskList(serverTaskList)
    }
    getTaskListFromServer()
  }, [])

  // Fetch Task List
  const getData = async () => {
    const res = await fetch("https://assets.breatheco.de/apis/fake/todos/user/andresborn")
    const data = await res.json()
    return data
  }

  // Set Task List on Server
  const setTaskOnServer = async (taskList) => {
    await fetch("https://assets.breatheco.de/apis/fake/todos/user/andresborn",
    {
      method:'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(taskList)
    })
  }

  // Controlled form
  const onChange = (e) => {
    const id = nanoid();
    setTask({
      value: e.target.value,
      id: id,
      important: false,
      hover: false,
      label: e.target.value,
      done: false
    });
  };

  // Add Task to Task List
  const onSubmit = (e) => {
    e.preventDefault();
    taskList.push(task)
    setTaskOnServer(taskList)
    setTaskList([...taskList])

    // Note:
    // Initially we were trying to do:
    // setTaskList([...taskList, task]) and then
    // setTaskOnServer(taskList)
    // but, setTaskList is async, so our updated taskList isn't ready to be sent.

    // How we've fixed this is:
    // taskList.push(task) inmediately updates our taskList, then
    // setTaskOnServer(taskList) updates our server, and finally
    // setTaskList([...taskList]) updates our UI
    
    setTask({ value: "" }); // Reset task form
  };

  // Delete Task
  const deleteTask = (id) => {
    const filteredList = taskList.filter((task) => !(task.id === id))
    setTaskOnServer(filteredList)
    setTaskList(filteredList)

  }

  // DoubleClick to toggle important task
  const toggleImportant = (id) => {
    const importantList = taskList.map(task => {
      if (task.id === id) {
        task.important = !task.important
        return task
      } else {
        return task
      }
    })
    setTaskOnServer(importantList)
    setTaskList(importantList)
  }
  // Activate hover to conditionally display delete button
  const onHoverEnter = (id) => {
    setTaskList(taskList.map(task => {
      if (task.id === id) {
        task.hover = true
        return task
      } else {
        return task
      }
    }))
  }

  const onHoverLeave = (id) => {
    setTaskList(taskList.map(task => {
      if (task.id === id) {
        task.hover = false
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
          onHoverEnter={onHoverEnter}
          onHoverLeave={onHoverLeave}
           /> : "No hay tareas en la lista"}

        </div>
      </div>
    </div>
  );
};

export default App;
