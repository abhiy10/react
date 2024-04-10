import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
  /*  const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/abhiy10')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },
   [])*/

  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
        Github Followers: {data.followers}
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhiy10')
    return response.json()
}
