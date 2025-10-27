import { useState } from 'react'

function AddExpenseForm({ onAddExpense }) {

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')

  const handleSubmit = (e) => {
    e.preventDefault() 
    

    if (!description.trim() || !amount || parseFloat(amount) <= 0) {
      alert('Please fill all fields correctly!')
      return
    }


    const newExpense = {
      id: Date.now(), 
      description: description,
      amount: parseFloat(amount),
      category: category,
      date: new Date().toISOString().split('T')[0] 
    }


    onAddExpense(newExpense)


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