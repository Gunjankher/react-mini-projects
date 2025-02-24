import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[todo,setTodo] = useState('')
  const[todos,setTodos] = useState([])


const addTodo = ()=>{
  if(todo.trim() !== ""){
    setTodos([...todos,{text:todo,completed:false}])
    setTodo('')
  }
}

const deleteTodos = (text) => {
  setTodos(todos.filter((item) => item.text !== text));
};




const completeTodo = (text) => {
  setTodos(
    todos.map((item) =>
      item.text === text ? { ...item, completed: !item.completed } : item
    )
  );
};




  return (
    <>
    <h1>Simplest todo app</h1>
    <input
     type="text"
     value={todo}
     placeholder='place your todo here'
     onChange={(e)=>setTodo(e.target.value)}
     />

<button
onClick={addTodo}
>add</button>

<div>
 {
  todos?.map((text,index)=>(
    <div key={index}>
      <span
      
      style={{padding:'20px', fontWeight: 'bold', color: 'red' ,textDecoration: text.completed ? 'line-through' : 'none', }} >{text.text}</span>
      <button  onClick={()=>deleteTodos(text.text)}>delete</button>
      <button style={{margin:'20px' }} onClick={()=> completeTodo(text.text)}>{text.completed ? "undo":"completed"}</button>
    </div>
  ))
  
 }

</div>


    </>

  )
}

export default App
