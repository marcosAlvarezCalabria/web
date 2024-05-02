import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../../assets/images/cineHub2.png"

function Navbar(){
    return (

      <nav className="navbar fixed-top bg-dark">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand"><img src={logo} alt="" /></NavLink>
    <div className="buttons">
    
      <NavLink to="/login" className="btn btn-outline-danger" >Login</NavLink>
    </div>
    
  </div>
</nav>

    )
}

export default Navbar;