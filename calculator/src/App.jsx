import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const clear = ()=>{
  setCount(0)
}


// const handleNumberClick =()=>{

// }

  return (
    <>
     <h1>Calculator</h1>

<div>
   <div>
    {count}
   </div>

<div>
  <button onClick={clear}>AC</button>
  <button>/</button>
  <button>%</button>
  <button>/</button>
</div>
<div>
  <button onClick={(e)=>setCount(e.target.value)}>7</button>
  <button>8</button>
  <button>9</button>
  <button>*</button>
</div>
<div>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>-</button>
</div>
<div>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>+</button>
</div>
<div>
  <button>0</button>
  <button>,</button>
  <button>=</button>
</div>



</div>

    </>
  )
}

export default App
