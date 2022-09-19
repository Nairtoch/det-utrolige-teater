import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <nav className="NavBar">
            <ul>
                <li><NavLink to="/">FORSIDE</NavLink></li>
                <li><NavLink to="/products">FORESTILLINGER OG EVENTS</NavLink></li>
                <li><NavLink to="/actors">SKUESPILLERE</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </nav>
    )
}