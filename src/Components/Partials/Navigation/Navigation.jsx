import { NavLink } from "react-router-dom"
import { useAuth } from "../../App/Auth/Auth"
import { Login } from "../../Pages/Login/Login"

export const Navigation = () => {
    const { loginData } = useAuth(Login);

    return(
        <nav className="NavBar">
            <ul>
                <li><NavLink to="/">FORSIDE</NavLink></li>
                <li><NavLink to="/events">FORESTILLINGER OG EVENTS</NavLink></li>
                <li><NavLink to="/actors">SKUESPILLERE</NavLink></li>
                <li><NavLink to="/login">{loginData.access_token ? "MIN SIDE" : "LOGIN"}</NavLink></li>
            </ul>
        </nav>
    )
}