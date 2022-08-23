

export const getPost = (form, navigate) => {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const body = form

    axios.post(`${baseURL}/posts`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        
    })
    .catch((err) => {
        console.log(err.response)
    })

}