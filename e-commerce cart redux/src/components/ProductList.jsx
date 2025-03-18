import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Smartphone', price: 20000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
