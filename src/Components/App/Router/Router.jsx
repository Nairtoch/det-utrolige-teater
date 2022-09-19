import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
import { Login } from "../../Pages/Login/Login"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}