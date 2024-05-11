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
    const { user } = useContext(AuthContext);


    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const { data } = await getMovieDetails(id);
               // console.info({data});
                setMovie(data);
            } catch (error) {
                if (error.response && (error.response.status === 404 || error.response.status === 500)) {
                    setError(error.response.data.message);
                } else {
                    setError("An error ocurred loading details.");
                }
            }
        }

        fetchMovieDetails();
    }, [id,comments]);

    const handleComments = ()=> {
        setComments(!comments)
    }
    const commentsA = movie?.comments
    const showForm = commentsA?.some(comment => comment.author.email === user.email)
    return (
        <PageLayout>
             <h2>Movie Details</h2>
            <CardMovieDetail handleComments={handleComments}  movie={movie} error={error}/>
           {!showForm && <CommentsForm handleComments={handleComments} movie={movie}/> }
        </PageLayout>
    );
}

export default MovieDetail;
