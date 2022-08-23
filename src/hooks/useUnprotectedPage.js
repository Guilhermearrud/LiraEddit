import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            navigate("/")
        }
        
    }, [navigate])
} 