function CategoryFilter({ currentFilter, onFilterChange }) {
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'Food', label: 'Food' },
    { key: 'Transport', label: 'Transport' },
    { key: 'Bills', label: 'Bills' },
    { key: 'Entertainment', label: 'Entertainment' },
    { key: 'Others', label: 'Others' }
  ];
  
  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat.key}
          className={`filter-btn ${currentFilter === cat.key ? 'active' : ''} ${cat.key.toLowerCase()}`}
          onClick={() => onFilterChange(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;