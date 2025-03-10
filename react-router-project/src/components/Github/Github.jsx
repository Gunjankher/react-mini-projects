import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {

// const [data,setData] = useState()


const data = useLoaderData()

// useEffect(()=>{
//     fetch('https://api.github.com/users/Gunjankher')
//     .then((Response => Response.json()))
//     .then(data =>{
//         console.log(data);
//         setData(data)
//     },[])
// })

  return (
    <div>
 <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img  src={data.avatar_url} alt="Git picture" width={300}  />
    {data.starred}
    </div>
    </div>
  )
}

export default Github



export const githubInfoLoader = async()=>{
    const Response = await fetch('https://api.github.com/users/Gunjankher')
    return Response.json()
}