import { Route, Routes } from "react-router-dom"
import { ActorDetails } from "../../Pages/Actors/ActorDetails"
import { ActorList } from "../../Pages/Actors/ActorList"
import { EventDetails } from "../../Pages/Events/EventDetails"
import { EventList } from "../../Pages/Events/EventList"
import { Home } from "../../Pages/Home/Home"
import { Login } from "../../Pages/Login/Login"
import { Search } from "../../Pages/Search/Search"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/events">
                <Route index element={<EventList />}></Route>
                <Route path=":event_id" element={<EventDetails />}></Route>
            </Route>
            <Route path="/actors">
                <Route index element={<ActorList />}></Route>
                <Route path=":actor_id" element={<ActorDetails />}></Route>
            </Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}