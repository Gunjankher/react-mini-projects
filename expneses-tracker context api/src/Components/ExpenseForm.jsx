import React, { useState } from 'react'
import { useExpense } from '../context/TaskContext'


function ExpenseForm() {

    const {addExpense} = useExpense()
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")


const handleSubmit = (e)=>{
e.preventDefault()
if (!name || !amount || !category) return;
addExpense({name,amount:parseFloat(amount), category})
setName("");
setAmount("");
setCategory("");


}

  return (
   <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder="Expense Name" value={name} onChange={(e) => setName(e.target.value)}  />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}  />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
      <button type="submit">Add Expense</button>
   </form>
  )
}

export default ExpenseForm