import Slider from "react-slick";
import "./carousel-pause-on-hover.css"


function CarouselPauseOnHover(movies) {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {movies.movies.map((movie) => {
            return(
              <div>
                <img src={movie.posterURL} alt="" />
            <h3>{movie.title}</h3>
          </div>

            )

          })}
          
         
        </Slider>
      </div>
    );
  }
  
  export default CarouselPauseOnHover;