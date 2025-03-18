import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpenseForm/>
      <ExpenseList/>
    </>
  )
}

export default App
