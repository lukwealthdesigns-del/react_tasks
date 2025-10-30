function ExpenseStats({ expenses }) {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalExpenses = expenses.length;
  
  // Find highest expense
  const highestExpense = expenses.length > 0 
    ? expenses.reduce((max, expense) => expense.amount > max.amount ? expense : max)
    : null;
  
  // Calculate spending by category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});
  
  return (
    <div className="expense-stats">
      <div className="expense_stats">
      <div className="stat-card total-amount">
        <span className="stat-value">₦{totalAmount.toLocaleString()}</span>
        <span className="stat-label">Total Spent</span>
      </div>
      
      <div className="stat-card expense-count">
        <span className="stat-value">{totalExpenses}</span>
        <span className="stat-label">Total Expenses</span>
      </div>
      
      <div className="stat-card highest-expense">
        <span className="stat-value">
          {highestExpense ? `₦${highestExpense.amount.toLocaleString()}` : '₦0'}
        </span>
        <span className="stat-label">Highest Expense</span>
      </div>
      </div>
      
      <div className="category-breakdown">
        <h3>Spending by Category</h3>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <div key={category} className="category-item">
            <span className="category-name">{category}</span>
            <span className="category-amount">₦{amount.toLocaleString()}</span>
            <div className="category-bar">
              <div 
                className="category-fill" 
                style={{ 
                  width: `${(amount / totalAmount) * 100}%`,
                  backgroundColor: getCategoryColor(category)
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function for category colors
function getCategoryColor(category) {
  const colors = {
    Food: '#ff6b6b',
    Transport: '#4ecdc4',
    Bills: '#45b7d1',
    Entertainment: '#96ceb4',
    Others: '#feca57'
  };
  return colors[category] || '#cccccc';
}

export default ExpenseStats;