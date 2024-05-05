import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../../assets/images/cineHub2.png";
import AuthContext from "../../../contexts/auth.context";
import { useContext } from "react";

function Navbar() {
  const { user, doLogout } = useContext(AuthContext);
 










  return (
    <nav className="navbar fixed-top bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand"><img src={logo} alt="" /></NavLink>
        <p>{user?.name}</p>
        <div className="buttons row">
          <div className="col-4"></div>
          <div className="col-4">
            {user ? (
              <button className="nav-link btn btn-outline-danger" onClick={doLogout}>Logout</button>
            ) : (
              <a href="/login" className="btn btn-outline-danger btn-block">Login</a>
            )}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;