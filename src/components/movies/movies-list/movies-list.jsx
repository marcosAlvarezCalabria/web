import { useContext, useEffect, useState } from "react";
import CenterModeCarousel from "../../ui/carousel/center-mode-carousel";
import AuthContext from "../../../contexts/auth.context";
import { getMovies, getUserProfile } from "../../../services/api.services";





function MoviesList({ genre }) {
    const [movies, setMovies] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        async function fetch() {
            try {
                const query= {};
                if(genre) query.genres = user.genre
               const { data: movies }= await getMovies(query)
               console.log(query)
               setMovies(movies)
               getUserProfile(user)

            }

            catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, [genre])





    return (
        <div>Movieslist
            <CenterModeCarousel movies={movies} />
        </div>

    )

}

export default MoviesList;



/*const userModified = { ...user };

// Modificar la propiedad que se pasa como genre en la copia
if (user) {
    const genreString = user?.genre;
    const foundKey = Object.keys(genreData).find(function (clave) {
        return genreData[clave] === genreString;
    });

    if (foundKey) {
        console.info(`found key ${foundKey}`);
       

        userModified.genre = [foundKey]; // Modificar genre en la copia
        console.info(`user modified ${userModified.genre}`);
    } else {
        console.info(`no found key`);
    }

    return (
        <PageLayout>
            <h1>Main Page</h1>
            <h2>slider por genero {user.genre}</h2>
            <MoviesList typeQuery={} />
            <h2>slider por popularidad </h2>
        </PageLayout>
    );

} else if(!user){
    return (
        <PageLayout>
            <h1>Main Page</h1>
            
            <MoviesList />
        </PageLayout>
    )
}*/