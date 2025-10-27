function ExpenseStats({ expenses }) {

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  

  const expenseCount = expenses.length
  

  const highestExpense = expenses.length > 0 
    ? Math.max(...expenses.map(e => e.amount))
    : 0

  const categoryTotals = {}
  expenses.forEach(expense => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += expense.amount
    } else {
      categoryTotals[expense.category] = expense.amount
    }
  })

  return (
    <div className="expense-stats">
      <h2>Your Spending Statistics</h2>
      
      <div className="stats-grid">
        {}
        <div className="stat-card total">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <p className="stat-label">Total Spent</p>
            <p className="stat-value">₦{totalAmount.toLocaleString()}</p>
          </div>
        </div>

        {}
        <div className="stat-card count">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <p className="stat-label">Total Expenses</p>
            <p className="stat-value">{expenseCount}</p>
          </div>
        </div>

        {}
        <div className="stat-card highest">
          <div className="stat-icon">🔥</div>
          <div className="stat-info">
            <p className="stat-label">Highest Expense</p>
            <p className="stat-value">₦{highestExpense.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {}
      {Object.keys(categoryTotals).length > 0 && (
        <div className="category-breakdown">
          <h3>Spending by Category</h3>
          <div className="breakdown-list">
            {Object.entries(categoryTotals).map(([category, amount]) => (
              <div key={category} className="breakdown-item">
                <div className="breakdown-left">
                  <span className={`category-dot ${category.toLowerCase()}`}></span>
                  <span className="breakdown-category">{category}</span>
                </div>
                <div className="breakdown-right">
                  <span className="breakdown-amount">₦{amount.toLocaleString()}</span>
                  <span className="breakdown-percentage">
                    {((amount / totalAmount) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpenseStats;