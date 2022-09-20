import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

export const Highlight = () => {
    const [ highlight, setHighlight ] = useState([]);

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
            {highlight && highlight.map((item) => {
                return (
                    <figure key={item.id}>
                        <article>
                            <p>{item.stage_name}</p>
                            <p>{item.startdate} - {item.stopdate}</p>
                            <h3>{item.title}</h3>
                            <p><span>{item.genre}</span></p>
                        </article>
                        <img src={item.image} alt="this show is on highlights right now!" />
                    </figure>
                )
            })}
        </section>
    )
}