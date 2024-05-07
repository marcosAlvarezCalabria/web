import { useEffect, useContext, useState } from "react";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import AuthContext from "../../contexts/auth.context";
import genreData from "../../../public/data/genre.data.json"

import MoviesSection from "../../components/movies/movie-section/movie-section"; 
import { getUserProfile } from "../../services/api.services";



function MainPage() {
    const { user } = useContext(AuthContext);
    const { typeQuery, setTypeQuery } = useState([])
   
    useEffect(() => {
        getUserProfile()
    },[user])




        return (
            <PageLayout>
                <h1>Main Page</h1>
                <h2>lista por genero {user?.genre}</h2>
                <MoviesSection genre={user?.genre}/>
                
            </PageLayout>
        );

    } 



export default MainPage;



//* necesito cambiar genre ya que viene como string pero la query hay que hacerla con un numero