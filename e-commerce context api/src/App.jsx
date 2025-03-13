import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartProvider } from './context/cartContext'
import ProductList from './assets/components/ProductList'
import Cart from './assets/components/Cart'



function App() {
  const [cart, setCart] = useState([])

const addToCart = (product)=>{
setCart((prevCart)=> [...prevCart, {...product , quantity:1}])
}

const updateQuantity = (id,quantity)=>{
setCart((prevCart)=>prevCart.map((item)=> item.id === id? {...item,quantity}:item)) 
}

const removeFromCart = (id)=>{
setCart((prevCart)=> prevCart.filter((item)=> item.id !== id))
}

const clearCart = ()=>{
setCart([])
}






  return (
    <CartProvider value = {{cart,addToCart,removeFromCart,updateQuantity,clearCart}}>
     <h1 className='text-red-500'>E-commerce App</h1>
     <ProductList/>
     <Cart/>
    </CartProvider>
  )
}

export default App
