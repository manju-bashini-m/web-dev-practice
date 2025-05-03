import ToDoItems from "./ToDoItems";
import styles from "./ToDoList.module.css";
export default function ToDoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.List}>
      {sortedTodos.map((item, index) => (
        <ToDoItems
          key={index}
          item={item}
          todos={todos}
          setTodos={setTodos}
        ></ToDoItems>
      ))}
    </div>
  );
}
