import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

function App() {
  /* State Hook */
  const [todoList, updateTodoList] = useState([
    { id: "1", name: "Item - 1" },
    { id: "2", name: "Item - 2" },
  ]);
  const [newTodoName, upNewTodoName] = useState("");

  const mainListGroup = useRef();

  /**
   * this is used to monitor newTodoName state 
   *    if newTodoName state is updated below useEffect call below code.
   */
  useEffect(()=>{
    if(newTodoName.length > 10 ){
      mainListGroup.current.style.borderTop = '5px solid red';
    }else{
      mainListGroup.current.style.borderTop = '5px solid green';
    }
  },[newTodoName])

  const addNewTodo = (event) => {
    console.log(event);
    updateTodoList([
      ...todoList,
      { id: new Date().getTime(), name: newTodoName },
    ]);
    upNewTodoName("");
  };

  const onTextInputChange = (event) => {
    upNewTodoName(event.target.value);
  };

  const deleteTodo = (toDOId) => {
    const isConfirm = window.confirm("Are you sure! Do you want to delete?");
    if (isConfirm) {
      updateTodoList(
        todoList.filter((todo) => {
          return todo.id !== toDOId;
        })
      );
    }
  };

  return (
    <div className="container-fluid">
      <ul ref={mainListGroup} className="list-group mt-3">
        {/* --------------------- Add Todo --------------------------- */}
        <li className="list-group-item">
          <AddTodo addNewTodo={addNewTodo} newTodoName={newTodoName} onTextInputChange={onTextInputChange}/>
        </li>
        {/* ---------------------Todo List ---------------------------- */}
        <li className="list-group-item">
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </li>
      </ul>
    </div>
  );
}

export default App;
