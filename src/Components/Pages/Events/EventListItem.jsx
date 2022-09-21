import { Link } from 'react-router-dom';

export const EventListItem = props => {
    return (
        <div className='EventList'>
            <span>
                <figure>
                    <img src={props.data.image} alt="billede af et produkt" />
                </figure>
            </span>
            <span>
                <h3>{props.data.title}</h3>
            </span>
            <span>
                <div>
                    <p>{props.data.stage_name}</p>
                    <p>{props.data.startdate} - {props.data.stopdate}</p>
                </div>
            </span>
            <span>
                <button className='buy'>KØB BILLET</button>
                <button className='read'><Link to={`/events/${props.data.id}`}>LÆS MERE</Link></button> 
            </span>
        </div>
    )
}