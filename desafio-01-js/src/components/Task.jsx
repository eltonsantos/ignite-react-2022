import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task({ id, title, isCompleted }) {

  console.log(id);

  function toggleTodo() {}

  function removeTodo() {}
  
  return (
    <div key={id} className={styles.todoList}>
      <span className="todoCheck">
        <input type="checkbox" onClick={toggleTodo} />
      </span>
      <p>{title}</p>
      <button title="Deletar todo" onClick={removeTodo}>
        <Trash weight="fill" />
      </button>
    </div>
  )
}