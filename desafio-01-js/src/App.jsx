import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from './App.module.css';

import './global.css';

const tasks = [
  {
    id: uuidv4(),
    title: "Trabalhar",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Estudar",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Arrumar quarto",
    isCompleted: true,
  }
]

export function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addNewTodo(event) {
    event.preventDefault();
    setTasks([...tasks, {
      id: uuidv4(),
      title: newTask,
      isCompleted: false
    }])
    setNewTask('')

    console.log(tasks, newTask)

  }

  return (
    <div className="App">
      <Header />
      <div className={styles.todoForm}>
        <form onSubmit={addNewTodo}>
          <input type="text" />
          <button>Criar</button>
        </form>
      </div>
      <div className={styles.todoWrapper}>
        <div className={styles.todoTexts}>
          <div className="todoCreated">aaaaa</div>
          <div className="todoDone">bbbbbb</div>
        </div>
        <hr />

        { tasks.map(task => {
          return(
            <Task key={task.id} id={task.id} title={task.title} isCompleted={task.isCompleted} />
          )
        } )}
      
      </div>
    </div>
  )
}