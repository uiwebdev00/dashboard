import { useEffect, useState } from "react";



export default function useGetFetch(resource,updState) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(()=>{

        fetch(resource)
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

    },[resource,updState])

    return {data,error,isPending};
}
