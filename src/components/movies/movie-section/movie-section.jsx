import MoviesList from "../movies-list/movies-list"

function MoviesSection({genre}){
    return(
        <div>
            <MoviesList genre={genre}></MoviesList>
        </div>
    )
}
export default MoviesSection;