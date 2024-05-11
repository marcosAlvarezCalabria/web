import PageLayout from "../../components/layouts/page-layout/page-layout";
import { Link } from "react-router-dom";
import("./home.css")
import backgroundHome from "../../assets/images/background-home3.jpg"
import { CardMedia } from "@mui/material";
import CarouselPauseOnHover from "../../components/carousel-pause-on-hover/carousel-pause-on-hover";




function Home() {
  return (

    <PageLayout background={backgroundHome}>
      <section className="text-center">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="row justify-content-center">
            <h1 className="big-text col-6">Welcome to CineHub, where every movie tells a story and every story ignites imagination.</h1>
          </div>

          <div className="mb-3">
            <Link to="/main">
              <button className="btn btn-danger btn-custom">Explorar</button>
            </Link>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="background-slider p-5 container mt-5">
          {/* <CenterMode></CenterMode> */}
          <CarouselPauseOnHover/>
          
        </div>



      </section>
    </PageLayout>



  )
}

export default Home;