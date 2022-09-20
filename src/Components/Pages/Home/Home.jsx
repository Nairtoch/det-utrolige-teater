import { Highlight } from "../../Partials/Highlight/Highlight"
import { HomeHighlights } from "./HomeHighlights"

export const Home = () => {
    return(
        <section className="FrontCards">
            <Highlight />
            <HomeHighlights />
        </section>
    )
}