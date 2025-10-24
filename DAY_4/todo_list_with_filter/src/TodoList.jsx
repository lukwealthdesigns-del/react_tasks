function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          {todo.completed ? <s>{todo.text}</s> : todo.text}
          <button onClick={() => onDelete(todo.id)}>cancel</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
