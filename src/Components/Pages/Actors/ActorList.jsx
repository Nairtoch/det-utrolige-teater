import axios from "axios";
import { useEffect, useState } from "react"
import { ActorListItem } from "./ActorListItem";

export const ActorList = () => {
    const [ actorList, setActorList ] = useState();

    useEffect(() => {
        const getActorList = async () => {
            const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/actors`)
            setActorList(result.data.items)
        }
        getActorList();
    }, [setActorList])

    return (
        <section className="ActorList">
            {actorList && actorList.map(actor => {
                return (
                    <ActorListItem key={actor.id} data={actor} />
                )
            })}
        </section>
    )
}