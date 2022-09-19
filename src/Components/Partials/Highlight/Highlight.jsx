import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

export const Highlight = () => {
    const [ highlight, setHighlight ] = useState({});

    useEffect(() => {
        const getHighlight = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/events?orderby=rand()&limit=1`)
                setHighlight(result.data.items)
            }
            catch (error) {
                console.error(error)
            }
        }
        getHighlight();
    }, [setHighlight])

    return (
        <section className="Highlight">
            {highlight && highlight.map((items) => {
                return (
                    <figure key={items.id}>
                        <figcaption>
                            <article>
                                <h3>{items.title}</h3>
                                <p>{items.startdate} - {items.stopdate}</p>
                                <p>{items.stage_name}</p>
                                <p>{items.genre}</p>
                            </article>
                        </figcaption>
                        <img src={items.image} alt="this show is on highlights right now!" />
                    </figure>

                )
            })}
        </section>
    )
}