import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('')

const clear = ()=>{
  setCount(0)
}

const onHandleClick = (e)=>{
  setCount((prev)=> prev+e.target.innerText)
}




  return (
    <>
     <h1>Calculator</h1>

<div>
   <div>
   <input
  value={count}
  readOnly
  />
   </div>

<div>
 
  <button onClick={clear}>AC</button>
  <button>/</button>
  <button>%</button>
  <button>/</button>
</div>
<div>
  <button onClick={onHandleClick} >7</button>
  <button onClick={onHandleClick} >8</button>
  <button onClick={onHandleClick} >9</button>
  <button onClick={onHandleClick}>*</button>
</div>
<div>
  <button onClick={onHandleClick}>4</button>
  <button onClick={onHandleClick}>5</button>
  <button onClick={onHandleClick}>6</button>
  <button onClick={onHandleClick}>-</button>
</div>
<div>
  <button onClick={onHandleClick}>1</button>
  <button onClick={onHandleClick}>2</button>
  <button onClick={onHandleClick}>3</button>
  <button onClick={onHandleClick}>+</button>
</div>
<div>
  <button onClick={onHandleClick}>0</button>
  <button onClick={onHandleClick}>,</button>
  <button onClick={onHandleClick}>=</button>
</div>



</div>

    </>
  )
}

export default App
