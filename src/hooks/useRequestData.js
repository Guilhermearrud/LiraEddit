import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialData, url) => {

    const [data, setData] = useState(initialData)

    const getData = () => {

        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.get(url, headers)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })

    }

    useEffect(() => {
        getData()
    }, [url])

    return [data, getData]
}

export default useRequestData 