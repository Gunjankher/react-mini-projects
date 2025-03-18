import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    totalQuantity:0,
    totalPrice:0
}



export const cartSlice  = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.cartItems.find((i)=> i.id === action.payload.id)

            if(item){
                item.quantity +=1
            }else{
                state.cartItems.push({...action.payload, quantity:1})
            }

            state.totalQuantity++
            state.totalPrice +=  action.payload.price
        },

        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((i) => i.id === action.payload);
            if (itemIndex !== -1) {
              state.totalQuantity -= state.cartItems[itemIndex].quantity;
              state.totalPrice -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
              state.cartItems.splice(itemIndex, 1);
            }
          },
      
          updateQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload.id);
            if (item) {
              const quantityDiff = action.payload.quantity - item.quantity;
              state.totalQuantity += quantityDiff;
              state.totalPrice += quantityDiff * item.price;
              item.quantity = action.payload.quantity;
            }
          },
      
          clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
          },
        },
      });


      export const { addToCart, removeFromCart, updateQuantity, clearCart, cartItems} = cartSlice.actions;
export default cartSlice.reducer;