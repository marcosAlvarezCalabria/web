import PageLayout from "../../components/layouts/page-layout/page-layout";
import("./register.css");
import { useForm } from "react-hook-form";
import backgroundRegister from "../../assets/images/background-register-1.jpg"
import { createUser } from "../../services/api.services";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Box, TextField, Select, MenuItem} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

function Register() {


    const { register, setError, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const latitude = useRef(0);
    const longitude = useRef(0);
    const [showPassword, setShowPassword] = useState(false)


    useEffect(() => {
        navigator.geolocation?.getCurrentPosition((position) => {
            latitude.current = position.coords.latitude;
            longitude.current = position.coords.longitude;
        })
    }, [])



    async function handleDataSubmit(data) {
        try {
            await createUser({
                ...data,
                location: {
                    type: "Point",
                    coordinates: [latitude.current ?? 0, longitude.current ?? 0]
                }
            });
            navigate("/login");
        } catch (error) {
            if (error.response?.data?.errors) {
                const { errors } = error.response.data;
                Object.keys(errors).forEach((fieldWithError) => {
                    setError(fieldWithError, { message: errors[fieldWithError].message })
                })
            }

        }
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)

    }

    return (
        <PageLayout background={backgroundRegister}>
             
             <div className=" h-100 d-flex justify-content-center align-items-center row-col" style={{ minHeight: "calc(100vh + 72px)" }}>
            
                <form onSubmit={handleSubmit(handleDataSubmit)} className="form-container">
                    {/*Name  */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField {...register("name", { required: "Name is required" })} type="text" className={` ${errors.name ? "is-invalid" : ""}`} id="input-with-sx" label="Name" variant="standard" />
                        {errors.name ? (<div className="invalid-feedback">{errors.name.message} </div>) : ""}
                    </Box>

                    {/*email  */}
                    <div>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField {...register("email", { required: "Email is required" })} type="email" className={`mb-2  ${errors.email ? "is-invalid" : ""}`} id="input-with-sx1" label="Email" variant="standard" />
                            {errors.email ? (<div className="invalid-feedback">{errors.email.message} </div>) : ""}
                        </Box>

                    </div>

                    {/*birthDate  */}
                    <div>

                    </div>
                    <div className="mt-2">
                        <DateRangeRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField {...register("birthDate", { required: "BirthDate is required" })} type="date" variant="standard" className={` ${errors.birthDate ? "is-invalid" : ""}`} type="date"></TextField>

                        {errors.birthDate ? (<div className="invalid-feedback">{errors.birthDate.message} </div>) : ""}
                    </div>

                    {/*password*/}
                    <div>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <i role="button" onClick={handleShowPassword}>{showPassword ? <Visibility sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> : <VisibilityOff sx={{ color: 'action.active', mr: 1, my: 0.5 }} />} </i>
                            <TextField {...register("password", { required: "Password is required" })} type={showPassword ? 'text' : 'password'} className={`${errors.password ? "is-invalid" : ""}`} id="input-with-sx1" label="Password" variant="standard" />
                            {errors.password ? (<div className="invalid-feedback">{errors.password.message} </div>) : ""}

                        </Box>
                    </div>
                    <div>
                        <MovieFilterIcon  sx={{ color: 'action.active', mr: 1, my: 1 }}></MovieFilterIcon>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                             label="BirthDay"
                             variant="standard"
                            {...register("genre")} className={`mb-2 ${errors.genre ? "is-invalid" : ""}`} aria-label="Default select example"
                        >
                            <MenuItem value="action">Action</MenuItem>
                            <MenuItem value="adventure">Adventure</MenuItem>
                            <MenuItem value="animation">Animation</MenuItem>
                            <MenuItem value="comedy">Comedy</MenuItem>
                            <MenuItem value="crime">Crime</MenuItem>
                            <MenuItem value="documentary">Documentary</MenuItem>
                            <MenuItem value="drama">Drama</MenuItem>
                            <MenuItem value="family">Family</MenuItem>
                            <MenuItem value="fantasy"></MenuItem>
                            <MenuItem value="history">History</MenuItem>
                            <MenuItem value="horror">Horror</MenuItem>
                            <MenuItem value="mystery">Mystery</MenuItem>
                            <MenuItem value="science fiction">Science Fiction</MenuItem>
                            <MenuItem value="tv movie">TV Movie</MenuItem>
                            <MenuItem value="suspense">Suspense</MenuItem>
                            <MenuItem value="western">Western</MenuItem>

                        </Select>
                        
                        {errors.genre ? (<div className="invalid-feedback">{errors.genre.message} </div>) : ""}

                    </div>
                    <div className="d-flex justify-content-center">
                    <button type="submit" className="btn col-4 btn-danger mt-5 btn-block mb-2">Sign in</button>
                    </div>




                    
                </form>

            </div>

             
           








        </PageLayout>

    )
}

export default Register;