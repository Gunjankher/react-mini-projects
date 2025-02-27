import { useEffect, useState } from 'react'
import './App.css'
import { fetchQuote } from './fatchQuote'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [isLooping, setIsLooping] = useState(false)



  // console.log(`quoteData`, typeof data?.data);


const getData = async()=>{
  try {
    const quote = await fetchQuote()
    setData(quote)
    setLoading(false)
  } catch (error) {
  console.error(error)
  }
}


const genrateData = ()=>{
  getData()

}





  

useEffect(() => {
  getData()
  let intervalId
  if(isLooping){
    getData()
    setIsLooping(true)
    intervalId = setInterval (()=> getData(),5000)
  }

  return ()=>{
    if(intervalId) clearInterval(intervalId)
  }
}, [isLooping]); 


  return (
    <>
     <h1>Random Quote Generator</h1>
     <div>{[data?.data].map((quote,index)=>(
      <div key={quote?.id || index}>
        {quote?.content}
        <br />
        <span>- {quote?.author}</span>
        <br />
        <span>{quote?.tags}</span>
      </div>
     ))}</div>
     <button onClick={genrateData} style={{margin:'30px'}}>Generate</button>
     <button onClick={()=> setIsLooping(!isLooping)} style={{margin : "10px"}}>{isLooping ? 'stop-loop' : 'start-loop'}</button>
    </>
  )
}

export default App
