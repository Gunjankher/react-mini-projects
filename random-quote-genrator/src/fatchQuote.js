




const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';

const options = {method : 'GET', headers:{accept: 'application/json'}}


export const fetchQuote = async()=>{
    
try {
    const response = await fetch(url,options)
    const data  = await response.json()
    return data
    console.log(`fetch data`,data);
      
  } catch (error) {
      console.error(err)
  }
} 



