import PageLayout from "../../components/layouts/page-layout/page-layout";
import { Link } from "react-router-dom";
import("./home.css")
import Responsive from "../../components/ui/carousel-home/carousel-home";
import CenterMode from "../../components/ui/carousel-home/carousel-home";




function Home() {
  return (

    <PageLayout>
      <section className="text-center">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="row justify-content-center">
            <h1 className="big-text col-6">Welcome to CineHub, where every movie tells a story and every story ignites imagination.</h1>
          </div>

          <div className="mb-3">
            <Link to="/">
              <button className="btn btn-danger btn-custom">Explorar</button>
            </Link>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="background-slider p-5 container mt-5">
          <CenterMode></CenterMode>
        </div>



      </section>
    </PageLayout>



  )
}

export default Home;