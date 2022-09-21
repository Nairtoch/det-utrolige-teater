import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ReviewPost = (props) => {
    const [ reviewList, setReviewPost ] = useState([]);
    const { register, handleSubmit, formstate: { errors } } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('subject', data.subject);
        formData.append('comment', data.comment);
        formData.append('event_id', props.event_id);
        formData.append('num_stars', data.num_stars);
        formData.append('active', 1);
        const result = await axios.post('https://api.mediehuset.net/detutroligeteater/reviews', formData);

        if (result) {
            console.log('Your comment has been well received, Nat.');
        } else {
            console.log(errors);
        }
        setReviewPost(true)
    }

    return (
        <section className="ReviewPostComment">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Skriv en anmeldelse</h3>
                <p>Antal Stjerner:</p>
                <div className="col-2">
                    <input type="text" placeholder="Emne"></input>
                    <button type="submit">SEND</button>
                    <input type="text" placeholder="Kommentar"></input>
                </div>
            </form>
        </section>
    )
}