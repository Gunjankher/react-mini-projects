import {createContext,useContext} from 'react'


export const TaskContext = createContext({
    expense:[],
    addExpense:()=>{},
    removeExpense :()=>{},
    clearExpense:()=>{}
})


export const ExpenseProvider = TaskContext.Provider


export function useExpense() {
     return useContext(TaskContext)
}


