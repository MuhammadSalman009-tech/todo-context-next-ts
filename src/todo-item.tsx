import { useContext } from "react";
import { TodoContext } from "./context/todo-context";

export function TodoItem({ item }) {
  const { handleUpdateDone } = useContext(TodoContext);
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div>{item.title}</div>
        <div>{item.description}</div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={item.done}
            id={item.id}
            onChange={() => {
              handleUpdateDone(item.id);
            }}
            checked={item.done}
          />
          <label className="form-check-label" htmlFor={item.id}>
            Done
          </label>
        </div>
        <DeleteButton id={item.id} />
      </div>
    </div>
  );
}

function DeleteButton({ id }) {
  const { handleDeleteTodo } = useContext(TodoContext);
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        handleDeleteTodo(id);
      }}
    >
      Delete
    </button>
  );
}
