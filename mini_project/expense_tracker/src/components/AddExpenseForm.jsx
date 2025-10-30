import { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  
  function handleSubmit(e) {
    e.preventDefault();
    
    if (description.trim() === '' || amount <= 0) {
      alert('Please enter valid description and amount');
      return;
    }
    
    onAddExpense({
      description: description.trim(),
      amount: Number(amount),
      category
    });
    
    // Reset form
    setDescription('');
    setAmount('');
    setCategory('Food');
  }
  
  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What did you spend on?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      />
      
      <input
        type="number"
        placeholder="Amount (₦)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input"
        min="1"
      />
      
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        className="form-select"
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select>
      
      <button type="submit" className="add-btn">
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;