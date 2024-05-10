import "./movie-item.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/auth.context";
import { useContext, useEffect, useState } from "react";
import { removeFavorites, updateUser } from "../../../services/api.services";

function MovieItem({ movie }) {
  const { user, fetchProfile } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(true);

  useEffect(() => {
    const checkIfFavorite = () => {
      setIsFavorite(user.favorites.includes(movie.id));
    };
    checkIfFavorite();
  }, [movie.id, user.favorites]);

  async function handleFavorites() {
    try {
      if (!isFavorite) {
        const updatedUserData = { ...user, favorites: [...user.favorites, movie.id] };
        await updateUser(updatedUserData);
        fetchProfile();
      } else {
        removeFavorites(movie.id, user.id);
        fetchProfile();
      }
      setIsFavorite(prevState => prevState); // Cambiar el estado basado en el estado anterior
    } catch (error) {
      console.error("Ocurrió un error al agregar o eliminar la película de favoritos:", error);
    }
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card movie_card">
          <i role="button" onClick={handleFavorites} className={`fa ${isFavorite ? "fa-heart" : "fa-heart-o"}`} aria-hidden="true"></i>
          <img src={movie.posterURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <i className="fa fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer"></i>
            <NavLink to={`/movies/${movie.id}`}>
              <i className="fa fa-ellipsis-h" data-toggle="tooltip" data-placement="bottom" title="details"></i>
            </NavLink>
            <h5 className="card-title">{movie.title}</h5>
            <span className="movie_info">2019</span>
            <span className="movie_info "><i className="fa fa-star"></i> 9 / 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
