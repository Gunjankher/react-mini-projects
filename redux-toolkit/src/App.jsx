import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddTodo from './components/addTodo'
import Todos from './components/todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo/>
    <Todos />
    </>
  )
}

export default App
