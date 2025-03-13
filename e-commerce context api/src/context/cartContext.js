import {createContext,useContext} from 'react'


export const cartContext = createContext({
    cart:[],
  addToCart: (product) => {},
  removeFromCart: (id) => {},
  updateQuantity: (id, quantity) => {},
  clearCart: () => {}
})


export const useCart =()=>{
    return useContext(cartContext)
}

export const CartProvider  = cartContext.Provider