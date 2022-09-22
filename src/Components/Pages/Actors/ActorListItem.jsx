import { Link } from 'react-router-dom';

export const ActorListItem = props => {
    return (
        <div className='ActorList'>
            <div className='col-1'>
                <span>
                    <figure>
                        <img src={props.data.image} alt="billede af et produkt" />
                    </figure>
                </span>
                <span>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.description.substring(0, 475)}...</p>
                </span>
                <span>
                    <button className='read'><Link to={`/actors/${props.data.id}`}>LÆS MERE</Link></button>
                </span>
            </div>
        </div>
    )
}