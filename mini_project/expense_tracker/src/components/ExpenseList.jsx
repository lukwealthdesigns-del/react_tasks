import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>No expenses to show. Add your first expense to get started!</p>
      </div>
    );
  }
  
  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ExpenseList;