import axios from "axios"
import { baseURL } from "../constants/url"
import { goToFeed } from "../router/Coordinator"

export const login  = (form, navigate) => {

    const body = form

    axios.post(`${baseURL}/users/login`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
    })
    .catch((err) => {
        console.log(err.response)
    })
}

export const signup = (form, navigate) => {

    const body = form

    axios.post(`${baseURL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
    })
    .catch((err) => {
        console.log(err.response.data)
    })
}