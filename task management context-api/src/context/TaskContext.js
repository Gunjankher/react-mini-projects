import {createContext,useContext} from 'react'


export const taskContext  = createContext({
    tasks:[],
    addTask:(task)=>{},
    toggleTask:(id)=>{},
    removeTask:(id)=>{},
    clearTask:()=>{}
})





export const TaskProvider = taskContext.Provider

export const useTasks = ()=> useContext(taskContext)


