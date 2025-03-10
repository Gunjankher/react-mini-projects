import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './context/contextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
 <>
    <UserContextProvider>
      <h1>Dark mode card project</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
 </>
  )
}

export default App
