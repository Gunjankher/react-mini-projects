import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    expenses: [
        
    ],  // Stores an array of expense objects
    totalAmount: 0 // Keeps track of total expense amount
};





const expenseSlice = createSlice({
    name:'expense',
    initialState,
    reducers:{
        addExpenses :(state,action)=>{
          state.expenses.push(action.payload)
          state.totalAmount+= action.payload.amount  
        },
        removeExpenses :(state,action)=>{

            const expneseToRemove = state.expenses.find(exp => exp.id === action.payload)

            return {
                ...state,
                expenses :state.expenses.filter(exp => exp.id !== action.payload),
                totalAmount : expneseToRemove ? state.totalAmount - expneseToRemove.amount : state.totalAmount
            }
        }
    },
})



export const {addExpenses,removeExpenses} = expenseSlice.actions


export default expenseSlice.reducer

