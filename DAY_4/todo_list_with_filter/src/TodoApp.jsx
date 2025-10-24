import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

function TodoApp() {
 
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("all");

  
  function addTodo(text) {
    if (text.trim() === "") return; 
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  
  function toggleTodo(id) {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  }


  function deleteTodo(id) {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  }


  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  }


  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; 
  });


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
