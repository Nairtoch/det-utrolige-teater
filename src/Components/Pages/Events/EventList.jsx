import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Layout } from "../../App/Layout/Layout";
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
        <Layout title="Oversigt" description="Her kan du se alle vores kommende forestillinger">
            {eventList && eventList.map(event => {
                return (
                    <EventListItem key={event.id} data={event} />
                )
            })}
        </Layout>
    )
}