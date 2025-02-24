import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState('')
  const [products, setProducts] = useState([])


const addProduct = ()=>{
  if(product?.trim() !== ''){
setProducts([...products,{product:product, bought:false}])
setProduct('')
  }
}



const deleteProduct = (product)=>{
setProducts(products.filter((item)=> item.product !== product))
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

<button onClick={()=> setProducts(addProduct)}>add Product</button>



<div>
{
  products?.map((item,index)=>(
    <div key={index}>
<span>{item.product}</span>
<button onClick={()=>deleteProduct(item.product)} style={{margin :"20px"}}>delete</button>
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


