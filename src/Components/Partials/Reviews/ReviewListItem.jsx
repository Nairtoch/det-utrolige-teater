export const ReviewListItem = props => {
    return (
        <div className='ReviewList'>
            <span className="ReviewStars">
                <hr />
                <p>{props.data.num_stars}</p>
                <p>{props.data.created}</p>
            </span>
            <span>
                <h3>{props.data.user.firstname} {props.data.user.lastname}</h3>
                <p>{props.data.comment}</p>
            </span>
        </div>
    )
}