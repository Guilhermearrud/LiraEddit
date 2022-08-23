import axios from "axios"
import { baseURL } from './../constants/url';

export const createPost = (form, getPosts) => {

    const body = form

    axios.post(`${baseURL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })

    .then((res) => {
      alert(res.data)
      getPosts()
    })

    .catch((er) => {
      alert(er.response.message)

    })
  }