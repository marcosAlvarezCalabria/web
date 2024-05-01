import { useEffect, useState } from "react"
import "./page-layout.css"
import { useLocation } from "react-router-dom";
import backgroundHome from "../../../assets/images/background-home.jpg";
import backgroundRegister from "../../../assets/images/background-register1.jpg";
import Navbar from "../../ui/navbar/navbar";
import Footer from "../../ui/footer/footer";

function PageLayout({ children }) {

  const location = useLocation();
  const [backgroundComponent, setBackgroundComponent] = useState(null)

  useEffect(() => {
    if (location.pathname === "/") {
      setBackgroundComponent(backgroundHome);
    } else if (location.pathname === "/register") {
      setBackgroundComponent(backgroundRegister)
    } else {
      setBackgroundComponent("")
    }
  }, [location.pathname])

  return (
    <>
    <Navbar/>
     <div style={{ backgroundImage: `url(${backgroundComponent})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }} className="main container-fluid p-0 m-0 vh-100">{children}</div>
     <Footer/>
    </>
        
   
  )
}
export default PageLayout;

