import React from 'react'
import { useCart } from '../../context/cartContext'

function Cart() {

    const {cart,removeFromCart,updateQuantity,clearCart} = useCart()

  return (
    <div> <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-2">
            <div>
              <h3 className="text-lg">{item.name}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-12 border rounded px-2"
              />
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 cursor-pointer"
            >
              ❌
            </button>
          </div>
        ))}
        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 mt-4 rounded cursor-pointer">
          Clear Cart
        </button>
      </>
    )}
  </div></div>
  )
}

export default Cart