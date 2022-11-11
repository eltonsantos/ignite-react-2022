import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from './App.module.css';

import './global.css';

const initialTasks = [
  {
    id: uuidv4(),
    title: "Trabalhar",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Estudar",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Arrumar quarto",
    isCompleted: true,
  }
]

export function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event) {
    event.preventDefault();

    if(!newTask) return;
    
    const taskNew = {
      id: uuidv4(),
      title: newTask,
      isCompleted: false
    }

    setTasks([...tasks, taskNew]);

    setNewTask('');
  }

  function onDeleteTask(id) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function onToggleTask(id) {
    const tasksChanged = tasks.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted
    } : task)
    setTasks(tasksChanged)
    console.log(tasksChanged)
  }

  function quantityDoneTasks() {
    tasks.filter(task => task.isCompleted).length
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.todoForm}>
        <form onSubmit={handleCreateNewTask}>
          <input type="text" onChange={handleNewTaskChange} value={newTask} />
          <button>Create</button>
        </form>
      </div>
      <div className={styles.todoWrapper}>
        <div className={styles.todoTexts}>
          <div className="todoCreated">Created: {tasks.length}</div>
          <div className="todoDone">Done: {tasks.filter(task => task.isCompleted).length}</div>
        </div>
        <hr />

        { tasks.length > 0 ? (
          tasks.map(task => {
            return(
              <Task key={task.id} id={task.id} title={task.title} isCompleted={task.isCompleted} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
            )
          } )
        ) : (
          <div>No one task created</div>
        )}
      
      </div>
    </div>
  )
}