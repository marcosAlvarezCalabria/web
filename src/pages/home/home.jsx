import PageLayout from "../../components/layouts/page-layout/page-layout";
import { Link } from "react-router-dom";
import("./home.css")
import backgroundHome from "../../assets/images/image.jpg"
import AutoPlay from "../../components/auto-play/auto-play";






function Home() {
 
  return (

    <PageLayout background={backgroundHome}>
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
        <div className="p-5">
          <div className="background-slider p-5 container d-flex align-item-center">
           <AutoPlay className="align-item-center"/>
          
        </div>
        </div>

        



      </section>
    </PageLayout>



  )
}

export default Home;



