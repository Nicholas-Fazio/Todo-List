import { React, useState } from "react";
import "./AddTodo.css";
const AddTodo = () => {
  const [description, setDescription] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="addTodo">
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter Description"
          autoComplete="off"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          minLength={1}
          maxLength={250}
          pattern="^[a-zA-Z].*\S$"
          required
        />
        <button id="submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
