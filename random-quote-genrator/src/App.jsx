import { useEffect, useState } from 'react'
import './App.css'
import { fetchQuote } from './fatchQuote'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);



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




// useEffect(()=>{
//   getData()
// },[])
  

useEffect(() => {
  getData(); // Initial fetch
  const intervalId = setInterval(() => {
    console.log("Fetching data...");
    getData(); // Auto-fetch every 5s
  }, 5000); // 5000ms = 5s
 console.log("Cleaning up interval")
  return () => clearInterval(intervalId); // Cleanup
}, []); 


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
    </>
  )
}

export default App
