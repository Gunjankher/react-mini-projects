import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState('')
  const [products, setProducts] = useState(()=>{
    return JSON.parse(localStorage.getItem('shoppingList')) || []
  })


useEffect(()=>{
localStorage.setItem('shoppingList' , JSON.stringify(products))
},[products])


const addProduct = ()=>{
  if(product?.trim() !== ''){
setProducts([...products,{product:product, bought:false}])
setProduct('')
  }
}



const deleteProduct = (product)=>{
setProducts(products.filter((item)=> item.product !== product))
}


const boughtToggle = (product)=>{
setProducts(
  products.map((item)=>(
    item.product === product ?{...item, bought :!item.bought} : item
  ))
)
}


  return (
    <>
     <h1>Shopping list app</h1>

<input 
type="text" 
placeholder='add your shopping list here'
value={product}
style={{padding:'10px' ,margin:'20px'}}
onChange={(e)=>setProduct(e.target.value)}
/>

<button onClick={addProduct}>add Product</button>



<div>
{
  products?.map((item,index)=>(
    <div key={index}>
<span style={{padding: "20px",
                fontWeight: "bold",
                color: "red",
                textDecoration: item.bought ? "line-through" : "none",}}>{item.product}</span>
<button onClick={()=>deleteProduct(item.product)} style={{margin :"20px"}}>delete</button>
<button onClick={()=>boughtToggle(item.product)}>{item.bought? "unbought" :"bought"}</button>
    </div>
  ))
}
</div>


    </>
  )
}

export default App









 /*
 shopping app 
  
 add product 
 delete product
 buy unbuy product 
 
 */


