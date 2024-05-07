import { useContext } from "react";
import MoviesList from "../movies-list/movies-list";
import "./movie-section.css"
import AuthContext from "../../../contexts/auth.context";

function MoviesSection({}){
    const { user } = useContext(AuthContext);
    return(
        <div className=" movieSection container">
            MoviesSection {user?.genre}
            <MoviesList genre={user?.genre}/>

        </div>
    )
}
export default MoviesSection;