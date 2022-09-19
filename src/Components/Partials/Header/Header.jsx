import { Navigation } from "../Navigation/Navigation"

export const Header = () => {
    return(
        <header className="Header">
            <div>
                <p>logo goes here</p>
            </div>
            <div>
                {/* <Search /> */}
                <Navigation />
            </div>
        </header>
    )
}