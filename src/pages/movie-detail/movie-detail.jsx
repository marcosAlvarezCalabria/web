import { useParams } from "react-router-dom";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import { useContext, useEffect, useState } from "react";
import { getMovieDetails } from "../../services/api.services";
import CardMovieDetail from "../../components/movies/card-movie-details/card-movie-detail";
import CommentsForm from "../../components/comments-form/comments-form"; 
import AuthContext from "../../contexts/auth.context"

    
function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState(true)
    const [alreadyCommented, setAlreadyCommented] = useState(null)
    const { user } = useContext(AuthContext);


    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const { data } = await getMovieDetails(id);
                setMovie(data);
                 //if (!data.comments.length === 0){


                 //}
                 //const  author  = {...data}
                 //console.log(user.email)
                //console.log(...author.comments[0])
            } catch (error) {
                if (error.response && (error.response.status === 404 || error.response.status === 500)) {
                    setError(error.response.data.message);
                } else {
                    setError("Error al cargar los detalles de la película.");
                }
            }
        }

        fetchMovieDetails();
    }, [id,comments]);

    const handleComments = ()=> {
        setComments(!comments)
    }
    



    return (
        <PageLayout>
            <CardMovieDetail movie={movie} error={error}/>
            <CommentsForm handleComments={handleComments} movie={movie}/>
        </PageLayout>
    );
}

export default MovieDetail;
