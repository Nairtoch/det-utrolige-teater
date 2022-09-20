import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const HomeHighlights = () => {
    const { event_id } = useParams();
    const [ eventData, setEventData ] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/events/${event_id}`)
                setEventData(result.data.items)
            }
            catch (err) {
                console.error(err)
            }
        }
        getEventData();
    }, [event_id])

    return (
        <section>
            {eventData ? (
                <div>
                    {eventData.image && (
                        <img src={eventData.image} alt="Billede af et produkt" />
                    )}
                </div>
            ) : null}
            <div className="EventInfo">
                <h3>{eventData.title}</h3>
                <p>{eventData.description}</p>
            </div>
        </section>
    )
}