import VideoPlayer from "../../video-player/video-player";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../contexts/auth.context";
import { deleteComment } from "../../../services/api.services";

function CardMovieDetail({ movie, error, showForm , handleComments}) {
    const user = useContext(AuthContext)
    const[deleteUniqComment, setDeleteUniqComment] = useState(false)
    
useEffect(() => {

},[deleteComment])

  const handleDeleteComment = (id) => {
    deleteComment(id)
    console.log(id)
    setDeleteUniqComment(!deleteComment)
    handleComments()

  }

    return (
        error ? (
            <p>Error: {error}</p>
        ) : (
            <div>
                {movie ? (
                    <div>
                        <p>Title: {movie.title}</p>
                        <p>Release Year: {movie.releaseDate}</p>
                        <p>Genre: {movie.genres}</p>
                        
                        <div>
                            <h3>Comments:</h3>
                            {movie.comments.map((comment, index) => (
                                <div  key={index}>
                                   <p>{comment.text}.............rating   {comment.rating} creado por  {comment.author.name}</p>
                                   {showForm && <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>} 
                                  
                                    
                                    </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        )
    );
}
export default CardMovieDetail;
