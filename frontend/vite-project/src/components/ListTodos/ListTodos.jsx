import React from "react";
import { useEffect, useState } from "react";
import "./ListTodos.css";
const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [editTodoDescription, setEditTodoDescription] = useState("");
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      data.sort((a, b) => a.todo_id - b.todo_id);
      setTodos(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  const deleteTodo = async (index) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${index}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      setTodos(todos.filter((todo) => todo.todo_id !== index));
    } catch (error) {
      console.error(error.message);
    }
  };
  const updateTodo = async (e, todo) => {
    e.preventDefault();
    try {
      if (editTodoDescription.length === 0) {
        setEditId(-1);
        return;
      }
      const body = { description: editTodoDescription };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
      setEditTodoDescription("");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <ul>
        {todos.map((todo, index) =>
          editId === todo.todo_id ? (
            <li key={todo.todo_id}>
              <input
                type="text"
                name="description"
                id={`id${todo.todo_id}`}
                placeholder={todo.description}
                autoComplete="off"
                onChange={(e) => {
                  setEditTodoDescription(e.target.value);
                }}
                minLength={1}
                maxLength={250}
                pattern="^[a-zA-Z].*\S$"
                required
              />
              <div className="item-buttons">
                <button
                  type="button"
                  onClick={(e) => {
                    updateTodo(e, todo);
                  }}
                >
                  ✅
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditId(-1);
                  }}
                >
                  ❌
                </button>
              </div>
            </li>
          ) : (
            <li key={todo.todo_id}>
              <div className="item-description">{todo.description}</div>
              <div className="item-buttons">
                <button
                  type="button"
                  onClick={() => {
                    setEditId(todo.todo_id);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    deleteTodo(todo.todo_id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default ListTodos;
