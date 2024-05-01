import PageLayout from "../../components/layouts/page-layout/page-layout";
import { Link } from "react-router-dom";
import ("./home.css")



function Home(){
    return(
        
        <PageLayout>
  <div className="container" >
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center mb-3">
        <h1 className="big-text">Welcome to CineHub, where every movie tells a story and every story ignites imagination.</h1>
      </div>
      <div className="mb-3">
        <Link to="/">
          <button className="btn btn-danger btn-custom">Explorar</button>
        </Link>
      </div>
    </div>
  </div>
</PageLayout>

      
        
    )
}

export default Home;