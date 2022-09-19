import { Layout } from "../../App/Layout/Layout";
import { useForm } from 'react-hook-form';
import { useAuth } from "../../App/Auth/Auth";
import axios from 'axios';

export const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const {loginData, setLoginData } = useAuth()

    const sendLoginRequest = async (data) => {
        const formData = new FormData();
        formData.append("username", data.username)
        formData.append("password", data.password)
        const result = await axios.post('https://api.mediehuset.net/token', formData)
        handleSessionData(result.data);
    }

    const handleSessionData = data => {
        if(data){
            sessionStorage.setItem("token", JSON.stringify(data));
            setLoginData(data)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
    }

    return(
        <Layout title="Login" description="Your HomeLands">
            {!loginData && !loginData.username ? (
            <form onSubmit={handleSubmit(sendLoginRequest)} className="LoginForm">
                <div>
                    <p>Indtast dit brugernavn og adgangskode for at logge ind.</p>
                </div>
                <div>
                    <input type="text" id="username" placeholder="Brugernavn"
                        {...register("username", { required: true })} />
                    {errors.username && (
                        <span>Venligst indtast dit brugernavn!</span>
                    )}
                </div>
                <div>
                    <input type="password" id="password" placeholder="Adgangskode"
                        {...register("password", { required: true })} />
                    {errors.password && (
                        <span>Venligst indtast dit kodeord!</span>
                    )}
                </div>
                <div>
                    <button>Login</button>
                    <button type="reset">Annuller</button>
                </div>
            </form>
            ) : (
                <div>
                    <p>You're logged in as {loginData.username}</p>
                    <button onClick={logOut}>Logout</button>
                </div>
            )}
        </Layout>
    )
}