import VideoPlayer from "../../video-player/video-player";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../contexts/auth.context";
import { deleteComment } from "../../../services/api.services";
import ItemListDetail from "../../../components/item-list-detail/item-list-detail"

function CardMovieDetail({ movie, error , handleComments}) {
    const { user } = useContext(AuthContext)
    const[deleteUniqComment, setDeleteUniqComment] = useState(false)
    const [showButton,setShowButton] = useState(false)
    

    
    
    

useEffect(() => {
    const commentsA = movie?.comments
    const showbuttonDelete = commentsA?.some(comment => comment.author.email === user.email)

    if (!showbuttonDelete) {
        setShowButton(!showButton)
        
    }
    
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
                                   <p><ItemListDetail comment={comment} handleDeleteComment={handleDeleteComment}/></p>
                                   
                                  
                                    
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
