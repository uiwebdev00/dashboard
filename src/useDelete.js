import React from 'react'

export default function useDelete(resource) {
    useEffect(()=>{

        fetch(resource,{method:'DELETE'})
            .then((res)=>{
                if(!res.ok){
                    throw new Error(`error => ${res.status}`)
                }
                return res.json()
            })
            .then((data)=>{
                setData(data);
                setIsPending(false)

            })
            .catch((err)=>{
                setError(err.message);
                setIsPending(false)
            })

    },[resource])
  return (
    <div>useDelete</div>
  )
}
