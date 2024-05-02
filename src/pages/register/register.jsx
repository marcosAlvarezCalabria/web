import PageLayout from "../../components/layouts/page-layout/page-layout";
import("./register.css")
import { useForm } from "react-hook-form"

function Register() {


    const { register, handleSubmit, formState: {errors}} = useForm()

    const handleEventSubmit = (event) => {
        console.log(event)


    }

    return (
        <PageLayout>

            <div className=" h-100 d-flex justify-content-center align-items-center row" style={{ minHeight: "calc(100vh + 72px)" }}>
                <form onSubmit={handleSubmit(handleEventSubmit)} className="form-container pt-4 col-8 col-md-6 col-lg-4">
                    {/*Name  */}
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input {...register("name",{ required: "Name is required" })} type="text" className = {`form-control ${errors.name ? "is-invalid" : ""}`} />
                        {errors.name ? (<div className="invalid-feedback">{errors.name.message} </div>): ""}
                    </div>
                    {/*username  */}
                    <div>
                        <label className="form-label">Username</label>
                        <input {...register("username",{required:"Username is required"})} type="text" className = {`form-control ${errors.username ? "is-invalid" : ""}`} />
                        {errors.username ? (<div className="invalid-feedback">{errors.username.message} </div>): ""}
                    </div>
                    {/*email  */}
                    <div>
                        <label className="form-label">Email address</label>
                        <input {...register("email",{required:"Email is required"})} type="email" className = {`form-control ${errors.email ? "is-invalid" : ""}`} />
                        {errors.email ? (<div className="invalid-feedback">{errors.email.message} </div>): ""}
                    </div>
                   
                    {/*birthDate  */}
                    <div>
                    <label htmlFor="birthDate" className="form-label"> BirthDate</label>
                    <input {...register("birthDate",{required:"BirthDate is required"})} type="date" className = {`form-control ${errors.birthDate ? "is-invalid" : ""}`} />
                        {errors.birthDate ? (<div className="invalid-feedback">{errors.birthDate.message} </div>): ""}
                    </div>

                    {/*password*/}
                    <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input {...register("password",{required:"Password is required"})} type="text" className = {`form-control ${errors.password ? "is-invalid" : ""}`} />
                        {errors.password ? (<div className="invalid-feedback">{errors.password.message} </div>): ""}
                    </div>
                    <div>
                    <label htmlFor="password" className="form-label">Genre</label>
                        <select {...register("genre")} className = {`form-select mb-2 ${errors.genre ? "is-invalid" : ""}`} aria-label="Default select example">
                            
                            
                            <option value="28">Acción</option>
                            <option value="12">Aventura</option>
                            <option value="16">Animación</option>
                            <option value="35">Comedia</option>
                            <option value="80">Crimen</option>
                            <option value="99">Documental</option>
                            <option value="18">Drama</option>
                            <option value="10751">Familia</option>
                            <option value="14">Fantasía</option>
                            <option value="36">Historia</option>
                            <option value="27">Terror</option>
                            <option value="9648">Misterio</option>
                            <option value="878">Ciencia Ficción</option>
                            <option value="10770">Película de TV</option>
                            <option value="53">Suspenso</option>
                            <option value="10752">Guerra</option>
                            <option value="37">Western</option>
                        </select>
                        {errors.genre ? (<div className="invalid-feedback">{errors.genre.message} </div>): ""}

                    </div>




                    <button  type="submit" className="btn col-4 btn-danger btn-block mb-2">Sign in</button>
                </form>

            </div>








        </PageLayout>

    )
}

export default Register;