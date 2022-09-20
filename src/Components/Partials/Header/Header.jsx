import { Navigation } from "../Navigation/Navigation"
import IconLogo from "../../../Assets/Images/Icon_Logo.png"
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header className="Header">
            <div className="Logo">
                <Link to={'/'}><img src={IconLogo} alt="Logo" /></Link>
            </div>
            <div>
                {/* <Search /> */}
                <Navigation />
            </div>
        </header>
    )
}