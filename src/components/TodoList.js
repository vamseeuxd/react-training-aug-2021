import React from "react";
import { TodoListItem } from "./TodoListItem";

export function TodoList(props) {
  return (
    <ul className="list-group" style={{maxHeight: "calc(100vh - 100px)",overflow: "hidden auto",}}>
      {props.todoList.map((todo) => <TodoListItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo} />)}
    </ul>
  );
}
