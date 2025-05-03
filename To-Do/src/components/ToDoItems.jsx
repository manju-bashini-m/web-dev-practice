import styles from "./ToDoItems.module.css";
export default function ToDoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleDone(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const done = item.done ? styles.complete : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={done} onClick={() => handleDone(item.name)}>
          {item.name}
        </span>

        <span className={styles.Delete} onClick={() => handleDelete(item)}>
          x
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
