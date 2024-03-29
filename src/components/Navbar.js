import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">Adopciones</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/create-familia" className="nav-link">
              Registro
            </Link>
          </li>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <li className="nav-item active">
              <Link to="/list/familias" className="nav-link">
                Familias
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/add-familia" className="nav-link">
                Agregar
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
export default Navbar;
