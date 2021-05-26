export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_DONE = "UPDATE_DONE";
import { Todo, TodosState} from "./todo-context";


export enum ActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  UPDATE_DONE = "UPDATE_DONE",
}
export type Action =
  | {
      type: ActionType.ADD_TODO;
      payload: Todo;
    }
  | {
      type: ActionType.DELETE_TODO;
      payload: number;
    }
  | {
      type: ActionType.UPDATE_DONE;
      payload: number;
    };
export const reducer = (state:TodosState, action:Action):TodosState => {
  if (action.type === ActionType.ADD_TODO) {
    const newTodo = action.payload;
    return {
      todos: [...state.todos, newTodo],
    };
  }

  if (action.type === ActionType.DELETE_TODO) {
    const id = action.payload;
    return {
      todos: state.todos.filter((todo) => todo.id !== id),
    };
  }

  if (action.type === ActionType.UPDATE_DONE) {
    const id = action.payload;

    return {
      todos: state.todos.map((currentTodo) => {
        if (currentTodo.id === id) {
          return { ...currentTodo, done: !currentTodo.done };
        }
        return currentTodo;
      }),
    };
  }
  return state;
};
