import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { FaTimes, FaBars } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

function MyToDo({ completeTdo, todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  function submitUpdate(value) {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  }
  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div className="my_todos_container">
      <div
        className={todo.isComplete ? "my_todo my_todo_complete" : "my_todo"}
        key={index}
      >
        <div
          key={todo.text}
          onClick={() => completeTdo(todo.id)}
          className="my_todo_text"
        >
          {todo.text}
        </div>
        <div className="my_todo_icons">
          <FaTimes
            onClick={() => removeTodo(todo.id)}
            className="my_todo_delete "
          />
          <GoPencil
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="my_todo_edit"
          />
        </div>
      </div>
    </div>
  ));
}

export default MyToDo;
