import { useState } from 'react'

function ExpenseItem({ expense, onDelete, onEdit }) {

  const [isEditing, setIsEditing] = useState(false)
  

  const [editedDescription, setEditedDescription] = useState(expense.description)
  const [editedAmount, setEditedAmount] = useState(expense.amount)

  const handleDelete = () => {
    onDelete(expense.id)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {

    if (!editedDescription.trim() || editedAmount <= 0) {
      alert('Please enter valid values!')
      return
    }


    onEdit(expense.id, {
      description: editedDescription,
      amount: parseFloat(editedAmount)
    })

    setIsEditing(false)
  }

  const handleCancel = () => {

    setEditedDescription(expense.description)
    setEditedAmount(expense.amount)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <div className="expense-item">
      <div className="expense-info">
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <h3 onClick={handleEdit} className="editable">{expense.description}</h3>
        )}
        <span className="expense-date">{expense.date}</span>
      </div>
      
      <div className="expense-right">
        <span className={`category-badge ${expense.category.toLowerCase()}`}>
          {expense.category}
        </span>
        
        {isEditing ? (
          <input
            type="number"
            className="edit-input amount-input"
            value={editedAmount}
            onChange={(e) => setEditedAmount(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span className="expense-amount editable" onClick={handleEdit}>
            ₦{expense.amount.toLocaleString()}
          </span>
        )}
        
        {isEditing ? (
          <div className="edit-actions">
            <button className="save-btn" onClick={handleSave}>✓</button>
            <button className="cancel-btn" onClick={handleCancel}>✕</button>
          </div>
        ) : (
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        )}
      </div>
    </div>
  )
}

export default ExpenseItem;