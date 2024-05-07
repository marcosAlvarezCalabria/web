import {useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/auth.context";
import { getMovies } from "../../../services/api.services";
import MovieItem from "../movie-item/movie-item";
import CenterModeCarousel from "../../ui/carousel/center-mode-carousel";


function MoviesList ({genre}){
    const [movies,setMovies] = useState ([]);
    const { user } = useContext(AuthContext)


    useEffect(() => {
        async function fetch(){
            try{
                const query = {}
                if(genre) query.genre = genre;
                
                const { data: movies } = await getMovies(query);
                setMovies(movies)
               

            } catch(error) {
                console.log(error)
                //change this 
            }          
               }
        fetch();   

    }, [genre]);
     
    return(
        
        <div className='d-flex flex-column gap-1'><CenterModeCarousel movies={movies} /> </div>    
    
    )
}

export default MoviesList;