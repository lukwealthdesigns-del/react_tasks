function TodoFilter({ filter, setFilter }) {
  return (
    <div>
      <p>Filter:</p>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}

export default TodoFilter;
