import {configureStore} from '@reduxjs/toolkit'
import expenseSlice  from './ExpenseSlice'


export const store = configureStore({

    reducer:{
        expenses: expenseSlice
    }
})


