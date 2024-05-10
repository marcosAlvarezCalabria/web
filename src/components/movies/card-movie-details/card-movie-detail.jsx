
function CardMovieDetail({ movie, error }) {
    
    return (
        error ? (
            <p>Error: {error}</p>
        ) : (
            <div>
                <h2>Movie Details</h2>
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
