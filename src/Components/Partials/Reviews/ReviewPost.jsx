import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../../App/Auth/Auth";

/**
 * @param {number} Destructuring assignment of item_id from props object
 * Example of component call: <FormElement item_id={5}>
 * @returns HTML Form Element
 */
const ReviewPost = props => {
    // Destructuring Assignment from form hooks
    const { register, handleSubmit, formState: { errors } } = useForm()
    // Creating an object to use useAuth
    const { loginData, setLoginData } = useAuth()

    /**
     * Function to send the form
     * @param {object} data: Object with input values 
     * @param {object} e: Objekt with event values
     */
    const submitForm = async (data, e) => {
        // Function "options"
        const options = {
            headers: {
                Authorization: `Bearer ${loginData.access_token}` // This is our authorization with a bearer token, 
                                                                    // you cannot post comments without this.
            }
        }
        const endpoint = "https://api.mediehuset.net/detutroligeteater/reviews" // Setting a variable with endpoint
        const formData = new FormData(e.target) // Calling instanse of formdata with event target (which is the form object)
        console.log(...formData) // Logging spread of formdata

        const result = await axios.post(endpoint, formData, options) // Calling API
        if (result) {
            // If the comment is sent, send this message to the user
            console.log('Formen er sendt');
        }
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="ReviewPostComment">
            <h3>Skriv en anmeldelse</h3>
            <p>Antal stjerner:</p>
            {/* Hidden input with id for the element to be commented on */}
            <input type="hidden" value={props.event_id} {...register("event_id")} />
            <div className="col-1">
                {/* Text input for title */}
                <input type="text" placeholder="Emne" {...register("subject", { required: true })} />
                {/* Validating text input for title */}
                {errors.title && <span>Du skal skrive en titel</span>}
            </div>
            <div className="col-2">
                {/* Text area input for the comment */}
                <textarea placeholder="Kommentar" {...register("comment", { required: true })} />
                {/* A button to send the form, if all requirements are met */}
                <button>Send</button>
                {/* Validating comment */}
                {errors.comment && <span>Du skal skrive en kommentar</span>}
            </div>
        </form>
    )
}

export { ReviewPost }