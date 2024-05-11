import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../../assets/images/cineHub2.png";
import AuthContext from "../../../contexts/auth.context";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const { user, doLogout } = useContext(AuthContext);
  const [ navbarColor, setNavbarColor] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 100) { // Cambia 100 por la posición a partir de la cual quieres cambiar el color
        setNavbarColor('transparent'); 
        console.log("mayor ",scrollPosition)
      } else {
        setNavbarColor('black'); 
        console.log("menor ", scrollPosition)
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <nav style={{ backgroundColor: navbarColor, opacity:"0.8"}} className="navbar fixed-top ">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand"><img src={logo} alt="" /></NavLink>
        <NavLink to="/profile"><p>{user?.name}</p></NavLink>
        <div className="buttons row">
          <div className="col-4"></div>
          <div className="col-4">
        
            
            {user ? (
              <button className="nav-link btn btn-danger" onClick={doLogout}>Logout</button>
            ) : (
              <a href="/login" className="btn btn-danger btn-block">Login</a>
            )}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;