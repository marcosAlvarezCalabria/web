import CenterMode from "../../components/ui/carousel-home/carousel-home";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import("./login.css")
import backgroundHome from "../../assets/images/background-home-black.jpg"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../contexts/auth.context.jsx"




function Login() {

    const { register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate();
    const { doLogin } = useContext(AuthContext)
    const [apiError, setApiError] = useState("") 

   async function handleDataSubmit(data){
    try {
        await doLogin(data);
        navigate("/profile");
    } catch (error) {
        if (error.response?.data?.message === "Invalids credentials") {
            setApiError("Invalid email or password. Please try again."); // Establecer el mensaje de error del API
        } else {
            setApiError("An error occurred. Please try again later."); // Otro tipo de error
        }
    }
}


    return (
        <PageLayout background={backgroundHome}>
           <div className=" h-100 d-flex justify-content-center align-items-center row" style={{ minHeight: "calc(100vh + 72px)" }}>
                <form onSubmit={handleSubmit(handleDataSubmit)} className="form-container pt-4 col-8 col-md-6 col-lg-4">
                    {/*email  */}
                    <div>
                        <label className="form-label">Email address</label>
                        <input {...register("email",{required:"Email is required"})} type="email" className = {`form-control ${errors.email ? "is-invalid" : ""}`} />
                        {errors.email ? (<div className="invalid-feedback">{errors.email.message} </div>): ""}
                    </div>
                    {/*password*/}
                    <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input {...register("password",{required:"Password is required"})} type="text" className = {`form-control ${errors.password ? "is-invalid" : ""}`} />
                        {errors.password ? (<div className="invalid-feedback">{errors.password.message} </div>): ""}
                        {apiError && <div className="alert alert-danger mt-3">{apiError}</div>}


                    </div>
                
                    <div className="d-flex justify-content-center">
                        <div className="col-6">
                            <button  type="submit" className="btn col-6 btn-danger mt-4 mb-2">Sign in</button>
                        </div>
                        <div>
                            <p className="mt-4">Don't have a count? <NavLink to = "/register">Signup</NavLink></p>
                        </div>
                         
                    
                    </div>
                   
                </form>

            </div>
            

        </PageLayout>

    )
}
export default Login;