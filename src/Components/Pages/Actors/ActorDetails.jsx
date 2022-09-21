import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ActorDetails = () => {
    const { actor_id } = useParams();
    const [actorData, setActorData] = useState([]);

    useEffect(() => {
        const getActorData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/actors/${actor_id}`)
                setActorData(result.data.item)
            }
            catch (err) {
                console.error(err)
            }
        }
        getActorData();
    }, [actor_id])

    return (
        <>
            <section className="ActorDetails">
                <div>
                    <h1>Skuespillere</h1>
                </div>
                <div className="col-2">
                    {actorData ? (
                        <div>
                            {actorData.image && (
                                <img src={actorData.image} alt="Billede af en skuespiller som du vil læse mere om." />
                            )}
                        </div>
                    ) : null}
                    <div>
                        <span className="col-1">
                            <span>
                                <h3>{actorData.name}</h3>
                                <p>{actorData.description}</p>
                            </span>
                        </span>
                    </div>
                </div>
            </section>
            <section className="ActorDetailsButton">
                <button><Link to={`/actors`}>SE ALLE SKUESPILLERE</Link></button>
            </section>
        </>
    )
}