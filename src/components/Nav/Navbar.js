import React from "react";
import logo from "../../logo.svg";
import BotonExpandible from "./BotonExpandible.js";

import "./Navbar.css";

function Navbar({ filtrandoDesdeNav, queTablaMostrar, mostrarCero, buscador, selectorNavBar,preciosNavBar }) {
  const liStyle = { color: "white" };

  const submitBuscar = (e) => {
    e.preventDefault();
    buscador(e);
    selectorNavBar("TodosLosEquipos");
  };

  const submitSelectorNavbar = (e) => {
    e.preventDefault();
    selectorNavBar(e.target.innerText);
    if (e.target.innerText === "TodosLosEquipos") {
    document.getElementById("navInputBusqueda").value =""
    document.getElementById("tori").click()
    }
  };

  const submitListaPreciosAMostrar = (e)=>{
    e.preventDefault();
    preciosNavBar(e)
  }

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={submitSelectorNavbar}
                  style={liStyle}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  TodosLosEquipos
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={submitSelectorNavbar}
                  style={liStyle}
                  className="nav-link"
                  href="/"
                >
                  CompararEquipos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  style={liStyle}
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ListasDePrecios
                </a>
                <ul className="dropdown-menu">
                <li>
                    <a onClick={submitListaPreciosAMostrar} refer="AltaPortaYRenoPrepago" className="dropdown-item" href="/">
                      Alta Porta y Reno Pre
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="AltaRegularPostpago" className="dropdown-item" href="/">
                      Alta Regular Postpago
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="AtaqueCompetencia" className="dropdown-item" href="/">
                      Ataque Competencia
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="FullClaro" className="dropdown-item" href="/">
                      FullClaro
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="LineaAdicional" className="dropdown-item" href="/">
                      Linea Adicional
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="PortabilidadExclusiva" className="dropdown-item" href="/">
                      Portabilidad Exclusiva
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="RenovacionExclusiva" className="dropdown-item" href="/">
                      Renovacion Exclusiva
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="AltaCuotas6M" className="dropdown-item" href="/">
                      Alta Cuotas 6M
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="Ataque6M" className="dropdown-item" href="/">
                      Ataque 6M
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="ListaLite6M" className="dropdown-item" href="/">
                      Lista Lite 6M
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="AltaCuotas12M" className="dropdown-item" href="/">
                      Alta Cuotas 12M
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="Ataque12M" className="dropdown-item" href="/">
                      Ataque 12M
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="ListaPORTA12M" className="dropdown-item" href="/">
                      Lista PORTA 12M
                    </a>
                  </li>
                  <li>
                    <a onClick={submitListaPreciosAMostrar} refer="ListaRENO12M" className="dropdown-item" href="/">
                      Lista RENO 12M
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a style={liStyle} className="nav-link disabled" href="/">
                  EnPromocion
                </a>
              </li> */}
            </ul>
            <form onSubmit={submitBuscar} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busqueda Grupal"
                aria-label="Search"
                id="navInputBusqueda"
              />
              <button id="tori" className="btn btn-warning botonBuscar" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
      <BotonExpandible
      filtrandoDesdeNav={filtrandoDesdeNav}
        queTablaMostrar={queTablaMostrar}
        mostrarCero={mostrarCero}
      />
    </div>
  );
}


export default Navbar;
