import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import React from 'react'




function TaskForm() {

const [task,setTask] = useState('')
const {addTask} = useTasks()


const handleSubmit =(e)=>{
    e.preventDefault()
    addTask(task)
    setTask("")
}


  return (
   <form action="" onSubmit={handleSubmit}>
<input
 type="text"
 placeholder="Enter the task"
 onChange={(e)=> setTask(e.target.value)}
 className="border p-2 flex grow"

/>

<button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>


   </form>
  )
}

export default TaskForm