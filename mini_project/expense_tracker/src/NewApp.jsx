import { useState } from 'react'
import './ExpenseTracker.css'
import Header from './components/Header'
import AddExpenseForm from './components/AddExpenseForm'
import CategoryFilter from './components/CategoryFilter'
import ExpenseStats from './components/ExpenseStats'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Lunch at Mama Put",
      amount: 1500,
      category: "Food",
      date: "2025-01-15"
    },
    {
      id: 2,
      description: "Uber to Victoria Island",
      amount: 2500,
      category: "Transport",
      date: "2025-01-15"
    },
    {
      id: 3,
      description: "Netflix Subscription",
      amount: 5000,
      category: "Entertainment",
      date: "2025-01-14"
    }
  ])

  const [currentFilter, setCurrentFilter] = useState('All')

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updatedExpenses)
  }

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses])
  }

  // NEW FUNCTION: Edit an expense
  const editExpense = (id, updatedData) => {
    const updatedExpenses = expenses.map(expense => {
      if (expense.id === id) {
        return { ...expense, ...updatedData }
      }
      return expense
    })
    setExpenses(updatedExpenses)
  }

  const filteredExpenses = currentFilter === 'All' 
    ? expenses 
    : expenses.filter(expense => expense.category === currentFilter)

  return (
    <div className="app-container">
      <Header />
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseStats expenses={expenses} />
      <CategoryFilter 
        currentFilter={currentFilter} 
        onFilterChange={setCurrentFilter}
      />
      <ExpenseList 
        expenses={filteredExpenses} 
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
    </div>
  )
}

export default App