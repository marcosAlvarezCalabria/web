
import { useContext, useState } from "react";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import AuthContext from "../../contexts/auth.context";
import { updateUser } from "../../services/api.services";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditProfile() {
    const { register, setError, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
       
      };

    async function handleDataSubmit(data) {
        try {
            await updateUser(data)
            console.log("esto es handlesubmit")
            navigate("/profile")
            
        } catch (error) {
            if (error.response?.data.errors) {
                const { errors } = error.response.data
                Object.keys(errors).forEach((fieldWithError) => {
                    setError(fieldWithError, { message: errors[fieldWithError].message })

                })
            }


        }
    }


    const { user } = useContext(AuthContext)

    return (
        <PageLayout>
            <div className=" h-100 d-flex justify-content-center align-items-center row">
                <form onSubmit={handleSubmit(handleDataSubmit)}  className="form-container pt-4 col-8 col-md-6 col-lg-4">
                    {/*Name  */}
                    <div>
                        <label htmlFor="name"  value={user?.name} className="form-label">Name</label>
                        <input defaultValue={user?.name} {...register("name", { required: "Name is required" })} type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} />
                        {errors.name ? (<div className="invalid-feedback">{errors.name.message} </div>) : ""}
                    </div>
                    {/*email  */}
                    <div>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input defaultValue={user?.email}{...register("email", { required: "Email is required" })} type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} />
                        {errors.email ? (<div className="invalid-feedback">{errors.email.message} </div>) : ""}

                    </div>

                    {/*birthDate  */}
                    <div>
                        <label htmlFor="birthDate" className="form-label"> BirthDate</label>
                        <input defaultValue={user?.birthDate}  {...register("birthDate", { required: "BirthDate is required" })} type="date" className={`form-control ${errors.birthDate ? "is-invalid" : ""}`} />
                        {errors.birthDate ? (<div className="invalid-feedback">{errors.birthDate.message} </div>) : ""}
                    </div>

                    {/*password*/}
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <i role="button" className=" m-2 fa fa-eye" onClick={togglePasswordVisibility} aria-hidden="true"></i>
                        
                        <input defaultValue={user?.password}   {...register("password", { required: "Password is required" })} type={passwordVisible ? "password": "text" } className={`form-control ${errors.password ? "is-invalid" : ""}`} />
                        

                        {errors.password ? (<div className="invalid-feedback">{errors.password.message} </div>) : ""}
                    </div>
                    <div>
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <select  defaultValue={user?.name}  {...register("genre")} className={`form-select mb-2 ${errors.genre ? "is-invalid" : ""}`} aria-label="Default select example">


                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="animation">Animation</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="documentary">Documentary</option>
                            <option value="drama">Drama</option>
                            <option value="family">Family</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="history">History</option>
                            <option value="horror">Horror</option>
                            <option value="mystery">Mystery</option>
                            <option value="science fiction">Science Fiction</option>
                            <option value="tv movie">TV Movie</option>
                            <option value="suspense">Suspense</option>
                            <option value="war">War</option>
                            <option value="western">Western</option>


                        </select>
                        {errors.genre ? (<div className="invalid-feedback">{errors.genre.message} </div>) : ""}

                    </div>




                    <button type="submit" className="btn col-4 btn-danger btn-block mb-2">Sign in</button>
                </form>
            </div>
        </PageLayout>

    )
}

export default EditProfile;