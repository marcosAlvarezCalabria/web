import { useContext, useEffect, useState } from "react";
import CenterModeCarousel from "../../ui/carousel/center-mode-carousel";
import AuthContext from "../../../contexts/auth.context";
import { getMovies, getUserProfile } from "../../../services/api.services";
import CarouselPauseOnHover from "../../carousel-pause-on-hover/carousel-pause-on-hover";





function MoviesList({ genre, filter, handlePlayVideo, carouselType }) {
    const [movies, setMovies] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        async function fetch() {
            try {

                const query = {};
                if (filter) query.genres = filter
                if (genre) query.genres = user.genre
                const { data: movies } = await getMovies(query)
                setMovies(movies)
                getUserProfile(user)

            }

            catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, [genre, filter])

    let carouselComponent;
    switch (carouselType) {
        case "CenterModeCarousel":
            carouselComponent = <CenterModeCarousel handlePlayVideo={handlePlayVideo} movies={movies} />;
        case "CarouselPauseOnHover":
            carouselComponent = <CarouselPauseOnHover movies={movies} />;
    }





    return (
        <div>
            {carouselComponent}
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