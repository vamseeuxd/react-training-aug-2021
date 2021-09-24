import React, { useEffect } from "react";

export function TodoListItem(props) {

  /** 
   * This is a React Hook will call while this Component is 
   *    1. Added to Page 
   *    2. Removed from Page
   * */
  useEffect(() => {
    /* While adding */
    // alert("TodoListItem Component added to Page , Item is " + props.todo.name);

    return ()=>{
      /* While removing */
      // alert("TodoListItem Component removed from Page , Item is " + props.todo.name);
    }
  }, []);

  return (
    <li className="list-group-item d-flex align-items-center">
      <b>{props.todo.name}</b>
      {/* --------------------- Delete Todo ---------------------------- */}
      <button
        onClick={() => props.deleteTodo(props.todo.id)}
        type="button"
        className="btn btn-danger btn-sm ms-auto"
      >
        Delete
      </button>
      {/* --------------------- Delete Todo ---------------------------- */}
    </li>
  );
}
