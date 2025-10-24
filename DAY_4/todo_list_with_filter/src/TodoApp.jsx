import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

function TodoApp() {
  // 1️⃣ State for all todos
  const [todos, setTodos] = useState([]);

  // 2️⃣ State for the filter type (all, active, completed)
  const [filter, setFilter] = useState("all");

  // Add new todo
  function addTodo(text) {
    if (text.trim() === "") return; // ignore empty input
    const newTodo = {
      id: Date.now(), // unique id
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  // Toggle completed
  function toggleTodo(id) {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  }

  // Delete todo
  function deleteTodo(id) {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  }

  // Clear all completed
  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  }

  // Apply current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  // Count stats
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="main">
      <h1>Personal Todo List</h1>

      <TodoInput onAdd={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <p>
        Total: {total} tasks | Completed: {completed}
      </p>

      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoApp;
