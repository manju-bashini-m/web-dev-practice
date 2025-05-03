import { useState } from "react";
import styles from "./todoform.module.css";
export default function ToDoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <div className={styles.Inputs}>
          <input
            className={styles.todoInput}
            type="text"
            onChange={(e) => setTodo({ name: e.target.value })}
            value={todo.name}
          />
          <button className={styles.todoButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
