import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeExpenses } from '../store/ExpenseSlice'

function ExpenseList() {

    const {expenses,totalAmount} = useSelector((state)=> state.expenses)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Total Expenses: ₹{totalAmount}</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>

           {expense.single} {expense.category}: ₹{expense.amount}
            <button onClick={() => dispatch(removeExpenses(expense.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul> 
    </div>
  )
}


export default ExpenseList