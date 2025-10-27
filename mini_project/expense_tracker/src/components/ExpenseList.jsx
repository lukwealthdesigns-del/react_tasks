import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return (
      <div className="no-expenses">
        <p>📭 No expenses found!</p>
        <p className="hint">Try adding some expenses or changing the filter.</p>
      </div>
    )
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id} 
          expense={expense}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default ExpenseList;