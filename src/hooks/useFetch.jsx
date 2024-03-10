import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data)

            })
            .finally(()=>{
                setIsLoading(false)
            })
    },[])

    return { data, isLoading }
}
