import React, { useEffect } from 'react'

export default function usePostfetch(resource,data) {
    console.log(data)
    console.log(resource)
    useEffect(()=>{
        fetch(resource,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: data
  
        }
      )
        .then((res) => {
        //   return res
        })
        .catch(() => {
  
        })
    },[resource])
  return (
    {}
  )
 
}
