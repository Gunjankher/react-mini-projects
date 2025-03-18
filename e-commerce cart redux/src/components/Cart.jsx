import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';

const Cart = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
              />
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total Quantity: {totalQuantity}</h3>
          <h3>Total Price: ₹{totalPrice}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
