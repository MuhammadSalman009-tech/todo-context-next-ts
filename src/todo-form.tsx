import { FormEvent, useContext, useState } from "react";
import { Todo, TodoContext } from "./context/todo-context";

export function TodoForm() {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    done:false
  });

  const [checked, setChecked] = useState(false);
  const { handleAddTodo } = useContext(TodoContext);

  function handleTodoChange(e:FormEvent<HTMLInputElement>|FormEvent<HTMLTextAreaElement>) {
    setTodoData({ ...todoData, [e.currentTarget.name]: e.currentTarget.value });
  }

  function handleTodoDone(e:FormEvent<HTMLInputElement>) {
    setChecked(!checked);
  }

  function handleFormSubmit(e:FormEvent) {
    e.preventDefault();
    const newTodo = {
      ...todoData,
      done: checked,
    };
    handleAddTodo(newTodo);
    setTodoData({ title: "", description: "", done: false });
  }

  return (
    <div className="card mb-3">
      <form className="card-body" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={handleTodoChange}
            type="text"
            className="form-control"
            id="title"
            placeholder="Write your todo"
            name="title"
            value={todoData.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            onChange={handleTodoChange}
            value={todoData.description}
            className="form-control"
            id="description"
            name="description"
            rows={3}
          ></textarea>
        </div>
        <div className="form-check">
          <input
            onChange={handleTodoDone}
            className="form-check-input"
            type="checkbox"
            value={`${checked}`}
            id="todo-done"
            name="done"
            checked={checked}
          />
          <label className="form-check-label" htmlFor="todo-done">
            Done
          </label>
        </div>
        <button className="btn btn-primary mt-2">Add Todo</button>
      </form>
    </div>
  );
}
