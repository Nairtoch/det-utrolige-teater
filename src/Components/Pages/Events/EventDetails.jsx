import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReviewList } from "../../Partials/Reviews/ReviewList";
import { ReviewPost } from "../../Partials/Reviews/ReviewPost";

export const EventDetails = () => {
    const { event_id } = useParams();
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/events/${event_id}`)
                setEventData(result.data.item)
            }
            catch (err) {
                console.error(err)
            }
        }
        getEventData();
    }, [event_id])

    return (
        <section className="EventDetails">
            {eventData ? (
                <div>
                    {eventData.image && (
                        <img src={eventData.image} alt="Billede af et produkt" />
                    )}
                </div>
            ) : null}
            <div className="EventInfo">
                <span className="col-2">
                    <span>
                        <p>{eventData.stage_name}</p>
                        <p>{eventData.startdate} - {eventData.stopdate}</p>
                    </span>
                    <span className="EventPrice">
                        <h2>BILLETPRIS: {eventData.price} DKK</h2>
                    </span>
                </span>
                <span>
                    <hr />
                    <h3>{eventData.title}</h3>
                    <h4>{eventData.genre}</h4>
                </span>
                <span>
                    <p>{eventData.description}</p>
                    <p>Varighed ca. {eventData.duration_minutes} minutter</p>
                </span>
                <span>
                    <h4>Medvirkende</h4>
                </span>
                <section className="Actors">
                    {eventData.actors && eventData.actors.map(actor => {
                        return (
                            <span className="col-1" key={actor.id}>
                                <figure>
                                    <Link to={`/actors/${actor.id}`}><img src={actor.image} alt={actor.name} /></Link>
                                </figure>
                                <h4>{actor.name}</h4>
                            </span>
                        )
                    })}
                </section>
            </div>
            <section>
                <ReviewList event_id={event_id} />
                <ReviewPost event_id={event_id} />
            </section>
        </section>
    )
}