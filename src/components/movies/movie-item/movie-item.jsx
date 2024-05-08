import "./movie-item.css"
import { NavLink } from "react-router-dom";


function MovieItem({movie}){


    return(
	

        <div className="row">
    <div className="col-md-4">
      <div className="card movie_card">
        <img src={movie.posterURL} className="card-img-top" alt="..."/>
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

    )
}

export default MovieItem;