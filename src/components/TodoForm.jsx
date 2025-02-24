import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    console.log("Submitting:", value);
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new Todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default TodoForm;
