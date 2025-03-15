import React from 'react'
import { useExpense } from '../context/TaskContext'

function ExpenseList() {
    const {expense, removeExpense,clearExpense} = useExpense()
  return (
    <div>
        <h2>Expenses</h2>
        {
            expense.length === 0 ? (
                <p>No expenses yet</p>
            ):(
                <ul>
                    {expense?.map((expense)=>(
                        <li key={expense.id}>
                            <span>{expense.name} - ${expense.amount} ({expense.category})</span>
                            <button onClick={() => removeExpense(expense.id)}>❌</button> 
                        </li>
                    ))}
                </ul>
            )}

{expense.length > 0 && (
        <button onClick={clearExpense}>Clear All</button>
      )}     
    </div>
  )
}

export default ExpenseList