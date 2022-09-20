import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";

export const HomeHighlights = () => {
    const [ highlights, setHighlights ] = useState([]);

    useEffect(() => {
        const getHighlights = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/events?orderby=rand()&limit=3`)
                setHighlights(result.data.items)
            }
            catch (error) {
                console.error(error)
            }
        }
        // Function call
        getHighlights();
    }, [setHighlights])

    return (
        <section className="HomeHighlights">
            {highlights && highlights.map((items) => {
                return (
                    <figure key={items.id}>
                        <img src={items.image} alt="this show is on highlights right now!" />
                        <article>
                            <p>{items.stage_name}</p>
                            <p>{items.startdate} - {items.stopdate}</p>
                            <hr />
                            <h3>{items.title}</h3>
                            <p><span>{items.genre}</span></p>
                        </article>
                        <span>
                            <button className="buy"><Link to={`/events/${items.id}`}>KØB BILLET</Link></button>
                            <button><Link to={`/events/${items.id}`}>LÆS MERE</Link></button>
                        </span>
                    </figure>
                )
            })}
        </section>
    )
}