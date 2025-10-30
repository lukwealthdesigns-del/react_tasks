import { useState } from 'react';

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(expense.description);
  const [editAmount, setEditAmount] = useState(expense.amount.toString());
  
  function handleSave() {
    if (editDescription.trim() === '' || editAmount <= 0) {
      alert('Please enter valid description and amount');
      return;
    }
    
    onEdit(expense.id, {
      description: editDescription.trim(),
      amount: Number(editAmount)
    });
    setIsEditing(false);
  }
  
  function handleCancel() {
    setEditDescription(expense.description);
    setEditAmount(expense.amount.toString());
    setIsEditing(false);
  }
  
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  
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
  
  return (
    <div className="expense-item" style={{ borderLeftColor: getCategoryColor(expense.category) }}>
      <div className="expense-category">
        <span 
          className="category-badge"
          style={{ backgroundColor: getCategoryColor(expense.category) }}
        >
          {expense.category}
        </span>
      </div>
      
      <div className="expense-details">
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="edit-input"
            />
            <input
              type="number"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
              className="edit-input"
              min="1"
            />
            <div className="edit-actions">
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={handleCancel} className="cancel-btn">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <div className="expense-info">
              <h3 className="expense-description" onClick={() => setIsEditing(true)}>
                {expense.description}
              </h3>
              <p className="expense-date">{formatDate(expense.date)}</p>
            </div>
            <div className="expense-amount">
              <span className="amount">₦{expense.amount.toLocaleString()}</span>
            </div>
          </>
        )}
      </div>
      
      {!isEditing && (
        <button 
          onClick={() => onDelete(expense.id)} 
          className="delete-btn"
          title="Delete expense"
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default ExpenseItem;