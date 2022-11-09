import styles from './Header.module.css';

export function Input() {
  return (
    <div className={styles.todoInput}>
      <input type="text" />
      <button>Criar</button>
    </div>
  )
}