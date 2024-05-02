import { useEffect, useState } from "react"
import "./page-layout.css"
import { useLocation } from "react-router-dom";
import backgroundHome from "../../../assets/images/background-home-black.jpg";
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

      <div className="" style={{ backgroundImage: `url(${backgroundComponent})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: "100%", minHeight: "calc(100vh + 72px)", }}>{children}
      </div>

    </>


  )
}
export default PageLayout;

