import { ChangeEvent, FormEvent, HTMLInputTypeAttribute, useState } from "react";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from './App.module.css';

import { v4 as uuidv4 } from 'uuid';

import './global.css';

const initialTasks = [
  {
    id: uuidv4(),
    title: 'Estudar',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Trabalhar',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Limpar o quarto',
    isCompleted: false
  }
]

export function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
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

  function onDeleteTask(id: string) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function onToggleTask(id: string) {
    const tasksChanged = tasks.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted
    } : task)
    setTasks(tasksChanged)
    console.log(tasksChanged)
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.todoForm}>
        <form onSubmit={handleCreateNewTask}>
          <input type="text" onChange={handleNewTaskChange} value={newTask} />
          <button>Criar</button>
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