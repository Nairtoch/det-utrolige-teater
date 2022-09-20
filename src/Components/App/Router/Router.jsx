import { Route, Routes } from "react-router-dom"
import { EventDetails } from "../../Pages/Events/EventDetails"
import { EventList } from "../../Pages/Events/EventList"
import { Home } from "../../Pages/Home/Home"
import { Login } from "../../Pages/Login/Login"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/events">
                <Route index element={<EventList />}></Route>
                <Route path=":event_id" element={<EventDetails />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}