import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ExpenseProvider } from './context/TaskContext'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'



function App() {
  const [expense, setExpense] = useState([])


  const addExpense = (expense)=>{
setExpense((prevExpense)=> [...prevExpense,{id:Date.now(), ...expense}])
  }


  const removeExpense = (id)=>{
setExpense((prevExpense)=> prevExpense.filter((item)=> item.id !== id) )
  }


  const clearExpense = ()=>{
setExpense([])
  }

  return (
    <ExpenseProvider value={{expense,addExpense,removeExpense,clearExpense}}>
     <h1>Expense Tracker</h1>
     <ExpenseForm/>
     <ExpenseList/>
    </ExpenseProvider>
  )
}

export default App
