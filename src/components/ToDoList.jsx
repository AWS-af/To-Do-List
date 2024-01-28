import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import MyToDo from "./MyToDo";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }
  function updateTodo(todoId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  }
  function removeTodo(id) {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  }

  function completeTdo(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className="list_container">
      <h1 className="list_header">Whats your Plan for Today?</h1>
      <ToDoForm onSubmit={addTodo} />
      <MyToDo
        todos={todos}
        completeTdo={completeTdo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <div className="social_links">
        <a href="https://github.com/AWS-af" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ab-siddiqui-b90392270" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export default ToDoList;
