import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarRegistro = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/create-familia" className="nav-link">
        Datos Generales
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/create-familia-fisica" className="nav-link">
              Fisica
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/create-familia-domicilio" className="nav-link">
              Domicilio
            </Link>
          </li>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <li className="nav-item active">
              <Link to="/create-familia-org" className="nav-link">
                Familia
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/create-familia-familiares" className="nav-link">
                Familiares
              </Link>
            </li>
            <li className="nav-item active">
              <button onClick={"/"} className="nav-link">
                Cerrar
              </button>
            </li>

            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarRegistro;
