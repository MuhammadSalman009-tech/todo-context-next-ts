import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";
import { useContext } from "react";
import { TodoContext } from "./context/todo-context";

function App() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="container">
      <TodoForm />

      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}

export default App;
