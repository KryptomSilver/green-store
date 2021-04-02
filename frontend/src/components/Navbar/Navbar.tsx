import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
      <img src="./img/store.png" alt="" width={38} height={30} className="d-inline-block align-center pr-2" />Green-Store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
            Home 
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Compras
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ventas
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
