import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Highlight } from "../../Partials/Highlight/Highlight"
import { EventListItem } from "./EventListItem";

export const EventList = () => {
    const [ eventList, setEventList ] = useState([]);

    useEffect(() => {
        const getEventList = async () => {
            const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/events?orderby=rand()`)
            setEventList(result.data.items)
        }
        getEventList();
    }, [setEventList])

    return (
        <section className="EventTitle">
            <Highlight />
            <h1>Oversigt</h1>
            {eventList && eventList.map(event => {
                return (
                    <EventListItem key={event.id} data={event} />
                )
            })}
        </section>
    )
}