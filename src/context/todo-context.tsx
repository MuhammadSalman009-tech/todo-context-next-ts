import React, { ReactElement, useReducer } from "react";
import { ActionType, ADD_TODO, DELETE_TODO, reducer, UPDATE_DONE } from "./todoReducer";


export interface Todo{
    id: number,
    title: string,
    description: string,
    done: boolean,
}
export interface TodosState {
  todos: Todo[];
}

export const todoInitialState: TodosState = {
  todos: [
    {
      id: 1,
      title: "Learn javascript",
      description: "lorem ipsum",
      done: true,
    },
    {
      id: 2,
      title: "Learn typescript",
      description: "lorem ipsum",
      done: false,
    },
  ],
};
export interface TodoContextType{
  handleAddTodo(todoData: Todo): void;
  handleDeleteTodo(id: number): void;
  handleUpdateDone(id: number): void;
  todos:Todo[]
}

interface Props {
  children: ReactElement;
}
export const TodoContext:React.Context<TodoContextType> = React.createContext(null);

export function TodoProvider({ children }:Props) {
  const [state, dispatch] = useReducer(reducer, todoInitialState);

  function handleAddTodo(todoData:Todo) {
    const newTodo:Todo = { id: state.todos.length + 1, ...todoData };
    dispatch({ type:ActionType.ADD_TODO, payload: newTodo });
  }

  function handleDeleteTodo(id:number) {
    dispatch({ type:ActionType.DELETE_TODO, payload:id});
  }

  function handleUpdateDone(id:number) {
    dispatch({ type: ActionType.UPDATE_DONE, payload: id });
  }

  return (
    <TodoContext.Provider
      value={{
        handleAddTodo,
        handleDeleteTodo,
        handleUpdateDone,
        todos:state.todos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
