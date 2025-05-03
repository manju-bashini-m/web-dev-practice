import styles from "./footer.module.css";
import ToDo from "./ToDo";
export default function Footer({ completedCount, totalTodos }) {
  return (
    <div className={styles.footer}>
      <p>Completed Todos: {completedCount}</p>
      <p>Total Todos : {totalTodos}</p>
    </div>
  );
}
