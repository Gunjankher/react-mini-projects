import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [password,setPassword] = useState('')
  const [isNumAllowed,setIsNumAllowed] = useState(false)
  const [isCharAllowed,setIsCharAllowed] = useState(false)
  const [isCopied,setIsCopied] = useState(false)


const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let num = '0123456789'
let specialChar = '!@#$%^&*()'
let pass = ''

if(isNumAllowed) str += num
if(isCharAllowed) str += specialChar

for (let i = 0; i<length; i++) {
  
let char = Math.floor(Math.random()*str.length+1)

pass += str.charAt(char)
  
}


setPassword(pass)

  },[length,isCharAllowed,isNumAllowed])



  useEffect(()=>{
passwordGenerator()
// setIsCopied(false) 
  },[length,isCharAllowed,isNumAllowed])
 


const copyPasswordToClipboard = useCallback(()=>{

  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(password)
  setIsCopied(true)
  setTimeout(()=> setIsCopied(false),2000)
},[password])


  return (
    <>
      <h1>Password generator</h1>


      <input
      placeholder='password'
      value={password}
      readOnly
      ref={passwordRef}
    
      
      />

      <button onClick={copyPasswordToClipboard}>
        {isCopied? "copied" :'copy'}
        </button>



<div>
  <div>
    {length}
  <input
   type="range"
   min={8}
   max={20} 
   value={length}
   onChange={(e)=> setlength(e.target.value)}
   />
   </div>


  <label>number  
    <input
     type="checkbox"
     value={isNumAllowed}
     onClick={()=> setIsNumAllowed((prev)=> !prev)}
      />
  </label>

  <label>symbols
      <input
     type="checkbox"
     value={isCharAllowed}
     onClick={()=> setIsCharAllowed((prev)=> !prev)}
     />
   </label>

</div>
    </>
  )
}

export default App
