import { Navigation } from "../Navigation/Navigation"
import IconLogo from "../../../Assets/Images/Icon_Logo.png"
import { Link } from "react-router-dom"
import { Search } from "../../Pages/Search/Search"

export const Header = () => {
    return(
        <header className="Header">
            <div className="Logo">
                <Link to={'/'}><img src={IconLogo} alt="Logo" /></Link>
            </div>
            <div className="col-2">
                <Search />
                <Navigation />
            </div>
        </header>
    )
}