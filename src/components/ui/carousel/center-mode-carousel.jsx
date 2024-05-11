import Slider from "react-slick";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg"
import("./center-model-carousel.css")
import MovieItem from "../../movies/movie-item/movie-item";






function CenterModeCarousel({ movies,handlePlayVideo }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500
  };
  return (
    <div className="container p-4">
      <div className="slider-container">
      <Slider {...settings}> 
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieItem handlePlayVideo={handlePlayVideo} movie={movie} />
          </div>
        ))}

      </Slider>
    </div>

    </div>
    
  );
}

export default CenterModeCarousel;




