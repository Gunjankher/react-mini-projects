import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount =()=>{
if(count>=0){
  setCount(count+1)
 
  
}
  }


 
  const decreaseCount =()=>{
setCount(count-1)
  }

  const reset = ()=>{
    setCount(0)
  }

  return (
    <>
    <h1>counter</h1>
    
    <div>{count}</div>
    <br/>
    <br/>
   <div>
   <button onClick={increaseCount}>+</button>
   <button onClick={decreaseCount}>-</button>
   </div>
    <br/>
    <div>
      <button onClick={reset}>reset</button>
    </div>
    </>
  )
}

export default App
