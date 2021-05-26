import { TodoProvider } from "../src/context/todo-context";
import App from "../src/App";

export default function Home() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}
