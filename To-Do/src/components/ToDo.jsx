import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Footer from "./footer";
export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const completedCount = todos.filter((todo) => todo.done === true).length;
  const totalTodos = todos.length;
  console.log(totalTodos);
  return (
    <div>
      <ToDoForm todos={todos} setTodos={setTodos}></ToDoForm>
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
      <Footer completedCount={completedCount} totalTodos={totalTodos}></Footer>
    </div>
  );
}
