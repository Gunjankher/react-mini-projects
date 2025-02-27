import { useEffect, useState } from 'react'
import './App.css'
import { fetchQuote } from './fatchQuote'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  console.log(`quoteData`, typeof data?.data);


const getData = async()=>{
  try {
    const quote = await fetchQuote()
    setData(quote)
    setLoading(false)
  } catch (error) {
    setError(error.message)
  }
}



  useEffect(()=>{
    getData()
  },[])




  return (
    <>
     <h1>Random Quote Generator</h1>
     <div>{data?.data?.map((quote)=>(
      <div>
        {quote.content}
      </div>
     ))}</div>
     <button style={{margin:'30px'}}>Generate</button>
    </>
  )
}

export default App
