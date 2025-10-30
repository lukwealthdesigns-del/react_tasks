import { useState } from 'react';
import Header from './Header';
import AddExpenseForm from './AddExpenseForm';
import CategoryFilter from './CategoryFilter';
import ExpenseStats from './ExpenseStats';
import ExpenseList from './ExpenseList';


function Parent() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Lunch at Shoprite",
      amount: 10500,
      category: "Food",
      date: "2025-01-15"
    },
    {
      id: 2,
      description: "Uber to NCC",
      amount: 1500,
      category: "Transport",
      date: "2025-01-15"
    },
    {
      id: 3,
      description: "Netflix Subscription",
      amount: 3600,
      category: "Entertainment",
      date: "2025-01-14"
    },
    {
      id: 4,
      description: "Electricity Bill",
      amount: 8000,
      category: "Bills",
      date: "2025-01-13"
    }
  ]);
  
  const [filter, setFilter] = useState('all');
  
  // Add new expense
  function addExpense(expenseData) {
    const newExpense = {
      id: Date.now(),
      ...expenseData,
      date: new Date().toISOString().split('T')[0]
    };
    setExpenses([...expenses, newExpense]);
  }
  
  // Delete expense
  function deleteExpense(id) {
    setExpenses(expenses.filter(expense => expense.id !== id));
  }
  
  // Edit expense
  function editExpense(id, updatedData) {
    setExpenses(expenses.map(expense =>
      expense.id === id ? { ...expense, ...updatedData } : expense
    ));
  }
  
  // Filter expenses
  const filteredExpenses = expenses.filter(expense => {
    if (filter === 'all') return true;
    return expense.category === filter;
  });

  return (
    <div className="app">
      <Header />
      <AddExpenseForm onAddExpense={addExpense} />
      <CategoryFilter currentFilter={filter} onFilterChange={setFilter} />
      <ExpenseList 
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
      <ExpenseStats expenses={expenses} />
    </div>
  );
}

export default Parent;