import { useContext } from "react";
import MoviesList from "../movies-list/movies-list";
import AuthContext from "../../../contexts/auth.context";
import "./movie-section.css";

function MoviesSection({ selectedGenre , title}) {
    const { user } = useContext(AuthContext);
    return (
        <div className="movieSection container">
            <p>{title} {selectedGenre}</p>
            <MoviesList filter={selectedGenre} />
        </div>
    );
}

export default MoviesSection;
