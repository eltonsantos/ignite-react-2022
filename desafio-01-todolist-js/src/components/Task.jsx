import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task({ id, title, isCompleted, onDeleteTask, onToggleTask }) {

  function handleToggleTask(id) {
    onToggleTask(id)
  }

  function handleRemoveTask(id) {
    onDeleteTask(id)
  }
  
  return (
    <div key={id} className={styles.todoList}>
      <span className="todoCheck">
        <input type="checkbox" onClick={() => handleToggleTask(id)} defaultChecked={isCompleted} />
      </span>
      <p>{title}</p>
      <button title="Deletar todo" onClick={() => handleRemoveTask(id)}>
        <Trash weight="fill" />
      </button>
    </div>
  )
}