function FilterButtons({ currentFilter, onFilterChange }) {
    return (
        <div className="filter-buttons">
            <button
                className={currentFilter === 'all' ? 'active' : ''}
                onClick={() => onFilterChange('active')}
            >
                Active
            </button>
            
            <button
                className={currentFilter === 'all' ? 'active' : ''}
                onClick={() => onFilterChange('completed')}
            >
                Completed
            </button>

        </div>
    )

}

export default FilterButtons;