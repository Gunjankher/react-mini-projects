import React from 'react'
import { useCart } from '../../context/cartContext'

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Headphones", price: 99 },
    { id: 4, name: "Smartwatch", price: 199 },
    { id: 5, name: "Keyboard", price: 49 },
  ];

function ProductList() {
    const {addToCart} = useCart()

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white px-3 py-1 rounded mt-2 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList