import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task({ id, title, isCompleted, onDeleteTask }) {
  console.log(id)

  function handleToggleTask(id) {
    // setStatus(!isCompleted)
    // console.log(!status)
  }

  function handleRemoveTask(id) {
    onDeleteTask(id)
  }
  
  return (
    <div key={id} className={styles.todoList}>
      <span className="todoCheck">
        <input type="checkbox" onClick={() => handleToggleTask(id)} />
      </span>
      <p>{title}</p>
      <button title="Deletar todo" onClick={() => handleRemoveTask(id)}>
        <Trash weight="fill" />
      </button>
    </div>
  )
}