import axios from "axios";
import { useEffect, useState } from "react";
import { ReviewListItem } from "./ReviewListItem";

// {} inden i () er et destructure assignment 
export const ReviewList = ({event_id}) => {
    const [ reviewList, setReviewList ] = useState([]);
    
    useEffect(() => {
        const getReviewList = async () => {
            const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/reviews`)
            setReviewList(result.data.items)
        }
        getReviewList();
    }, [setReviewList])

    return (
        <section className="ReviewList">
            <hr />
            <h4>Anmeldelser</h4>
            {reviewList && reviewList.map(review => {
                return (
                    <ReviewListItem key={review.id} data={review} />
                )
            })}
        </section>
    )
}