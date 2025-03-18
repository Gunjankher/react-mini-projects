import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addExpenses} from '../store/ExpenseSlice'



function ExpenseForm() {

    const [amount,setAmount] = useState("")
    const [category,setCategory] = useState("")
    const [single,setSingle] = useState("")
    const dispatch = useDispatch()


    const handleSubmit = (e)=>{

        e.preventDefault()
        if(!amount || !category) return 

        dispatch(addExpenses({id:Date.now(), amount:Number(amount), category,single}))
        setAmount("")
        setCategory("")
        setSingle('')
    }

  return (
  
   <form action="" onSubmit={handleSubmit}>
      <input
     type="text"
     placeholder='Enter Expense here'
     value={single}
     onChange={(e)=> setSingle(e.target.value)}

     />
    <input
     type="number"
     placeholder='amount'
     value={amount}
     onChange={(e)=>setAmount(e.target.value)}

     
     />
    <input
     type="text"
     value={category}
     placeholder='category'
     onChange={(e)=> setCategory(e.target.value)}
     
     />

<button type='submit'>Add Expenses</button>

   </form>
  )
}

export default ExpenseForm