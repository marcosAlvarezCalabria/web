import { useContext , useState} from "react";
import MoviesList from "../movies-list/movies-list";
import VideoPlayer from "../../video-player/video-player"
import "./movie-section.css";


function MoviesSection({selectedGenre , title}) {
    const [showVideo, setShowVideo] = useState(false)

    const handlePlayVideo = () => {
        console.log("aqui desde moviesection")
        setShowVideo(!showVideo)

    }

    return (
        <div className="movieSection container">
            <p>{title} {selectedGenre}</p>
            {showVideo? <div><VideoPlayer/></div> : ""}

            <MoviesList handlePlayVideo={handlePlayVideo}  filter={selectedGenre} />
        </div>
    );
}

export default MoviesSection;
