import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500'>E-Commerce cart Redux</h1>
      <Cart/>
      <ProductList/>
    </>
  )
}

export default App
