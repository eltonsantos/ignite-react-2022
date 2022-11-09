import { FormEvent, useState } from "react";
import { Trash } from "phosphor-react";

import { Header } from "./components/Header";

import styles from './App.module.css';

import { v4 as uuidv4 } from 'uuid';

import './global.css';

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const initialTodos = [
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

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  function addNewTodo(event: FormEvent) {
    event.preventDefault();
    setTodos([...todos, {
        id: uuidv4(),
        title: newTodo,
        isCompleted: false
    }]);
    setNewTodo('');
  }

  function toggleTodo() {}

  function removeTodo() {}

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

        { todos.map(todo => {
          return(
            <div key={todo.id} className={styles.todoList}>
              <span className="todoCheck">
                <input type="checkbox" onClick={toggleTodo} />
              </span>
              <p>{todo.title}</p>
              <button title="Deletar todo" onClick={removeTodo}>
                <Trash weight="fill" />
              </button>
            </div>
          )
        } )}
        

      </div>
    </div>
  )
}