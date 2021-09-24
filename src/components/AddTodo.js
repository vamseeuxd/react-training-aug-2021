import React from "react";

export function AddTodo(prop) {
  return (
    <div className="input-group">
      <input type="text" value={prop.newTodoName} onChange={prop.onTextInputChange} className="form-control" placeholder="New Todo Item"/>
      <button onClick={prop.addNewTodo} disabled={prop.newTodoName.length === 0} className="btn btn-outline-secondary" type="button">Add Todo</button>
    </div>
  );
}
