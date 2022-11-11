import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
}

export function Task({id, title, isCompleted, onDeleteTask, onToggleTask}: TaskProps) {

  function handleToggleTask(id: string) {
    onToggleTask(id)
  }

  function handleRemoveTask(id: string) {
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