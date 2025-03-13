import { useState } from 'react'
import './App.css'
import { TaskProvider } from './context/TaskContext'


function App() {
  const [tasks, setTasks] = useState(0)

const addTask = (task)=>{
setTasks((prevTask) => [...prevTask , {id: Date.now(), text:task, completed:false}])
}


const toggleTask = (id)=>{
setTasks((prevTask)=>{
  prevTask.map((task)=>task.id === id ? {...task , completed:!task.completed} :task)
})
}

removeTask = ()=>{
setTasks((prevTask)=> prevTask.filter ((task)=> task.id !== id))
}


const clearTask =()=>{
setTasks([])
}


  return (
    <TaskProvider value={{tasks,addTask,toggleTask,removeTask,clearTask}}>
      <h1 className='text-red-500'>This is task management app</h1>
    </TaskProvider>
  )
}

export default App
