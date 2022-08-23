import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../page/login/Login"
import { SingUp } from './../page/signup/SignUp';
import { Feed } from './../page/feed/Feed';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path='/signup' element={<SingUp/>}/>
                <Route path='/feed' element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router  