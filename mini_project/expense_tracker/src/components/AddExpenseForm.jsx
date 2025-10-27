import { useState } from 'react'

function AddExpenseForm({ onAddExpense }) {
  // STATE: Form input values
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')

  const handleSubmit = (e) => {
    e.preventDefault() // Prevents page refresh
    
    // Validation: Don't allow empty or zero
    if (!description.trim() || !amount || parseFloat(amount) <= 0) {
      alert('Please fill all fields correctly!')
      return
    }

    // Create new expense object
    const newExpense = {
      id: Date.now(), // Simple unique id using timestamp
      description: description,
      amount: parseFloat(amount),
      category: category,
      date: new Date().toISOString().split('T')[0] // Today's date in YYYY-MM-DD format
    }

    // Send to parent
    onAddExpense(newExpense)

    // Clear form
    setDescription('')
    setAmount('')
    setCategory('Food')
  }

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      
      <div className="form-group">
        <input
          type="text"
          placeholder="Description (e.g., Lunch at Bukka)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <button type="submit" className="add-btn">Add Expense</button>
    </form>
  )
}

export default AddExpenseForm