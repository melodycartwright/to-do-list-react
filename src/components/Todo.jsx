function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className={`todo ${todo.isCompleted ? "line-through" : ""}`}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="todo-text">{todo.text}</div>
      <div className="todo-actions">
        <button
          onClick={() => completeTodo(index)}
          className={todo.isCompleted ? "undo-btn" : "complete-btn"}
        >
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>
        <button onClick={() => removeTodo(index)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todo;
