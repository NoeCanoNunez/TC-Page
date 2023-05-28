import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Nav/Navbar";
import Card from "./components/Card/Card";
import NeoCard from "./components/Card/NeoCard";
import Auth from "./components/Auth/Auth";
import PlayCard from "./components/PlaysCards/PlayCard";

import allData from "./allData/miArchivo.json";
import oldData from "./allData/oldMiArchivo.json";

//importando formulas Helper
import { filterByEquipo } from "./helper/funcionOrdenYFiltroArrayObjetos";

import PriceList from "./components/PricesList/PriceList";
import Footer from "./components/Footer/Footer";

//imagen de yape
//import imgYape from "./img/Yape.jpg";

//import Auth
import { auth } from "./authentication/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  // Array de Precios
  const arrayPrecios = [
    "Prepago",
    "PortRenPre",
    "ACOMP_29",
    "ACOMP_39",
    "ACOMP_49",
    "ACOMP_55",
    "ACOMP_69",
    "ACOMP_79",
    "ACOMP_95",
    "ACOMP_109",
    "ACOMP_159",
    "ACOMP_189",
    "ACOMP_289",
    "AC6MC_29",
    "AC6MT_29",
    "AC6MC_39",
    "AC6MT_39",
    "AC6MC_49",
    "AC6MT_49",
    "AC6MC_55",
    "AC6MT_55",
    "AC6MC_69",
    "AC6MT_69",
    "AC6MC_79",
    "AC6MT_79",
    "AC6MC_95",
    "AC6MT_95",
    "AC6MC_109",
    "AC6MT_109",
    "AC6MC_159",
    "AC6MT_159",
    "AC6MC_189",
    "AC6MT_189",
    "AC6MC_289",
    "AC6MT_289",
    "AC12MC_29",
    "AC12MT_29",
    "AC12MC_39",
    "AC12MT_39",
    "AC12MC_49",
    "AC12MT_49",
    "AC12MC_55",
    "AC12MT_55",
    "AC12MC_69",
    "AC12MT_69",
    "AC12MC_79",
    "AC12MT_79",
    "AC12MC_95",
    "AC12MT_95",
    "AC12MC_109",
    "AC12MT_109",
    "AC12MC_159",
    "AC12MT_159",
    "AC12MC_189",
    "AC12MT_189",
    "AC12MC_289",
    "AC12MT_289",
    "FULLC_29",
    "FULLC_39",
    "FULLC_49",
    "FULLC_55",
    "FULLC_69",
    "FULLC_79",
    "FULLC_95",
    "FULLC_109",
    "FULLC_159",
    "FULLC_189",
    "FULLC_289",
    "LINA_29",
    "LINA_39",
    "LINA_49",
    "LINA_55",
    "LINA_69",
    "LINA_79",
    "LINA_95",
    "LINA_109",
    "LINA_159",
    "LINA_189",
    "LINA_289",
    "LAA6MC_29",
    "LAA6MT_29",
    "LAA6MC_39",
    "LAA6MT_39",
    "LAA6MC_49",
    "LAA6MT_49",
    "LAA6MC_55",
    "LAA6MT_55",
    "LAA6MC_69",
    "LAA6MT_69",
    "LAA6MC_79",
    "LAA6MT_79",
    "LAA6MC_95",
    "LAA6MT_95",
    "LAA6MC_109",
    "LAA6MT_109",
    "LAA6MC_159",
    "LAA6MT_159",
    "LAA6MC_189",
    "LAA6MT_189",
    "LAA6MC_289",
    "LAA6MT_289",
    "LAA12MC_29",
    "LAA12MT_29",
    "LAA12MC_39",
    "LAA12MT_39",
    "LAA12MC_49",
    "LAA12MT_49",
    "LAA12MC_55",
    "LAA12MT_55",
    "LAA12MC_69",
    "LAA12MT_69",
    "LAA12MC_79",
    "LAA12MT_79",
    "LAA12MC_95",
    "LAA12MT_95",
    "LAA12MC_109",
    "LAA12MT_109",
    "LAA12MC_159",
    "LAA12MT_159",
    "LAA12MC_189",
    "LAA12MT_189",
    "LAA12MC_289",
    "LAA12MT_289",
    "PAR_29",
    "PAR_39",
    "PAR_49",
    "PAR_55",
    "PAR_69",
    "PAR_79",
    "PAR_95",
    "PAR_109",
    "PAR_159",
    "PAR_189",
    "PAR_289",
    "PEXC_29",
    "PEXC_39",
    "PEXC_49",
    "PEXC_55",
    "PEXC_69",
    "PEXC_79",
    "PEXC_95",
    "PEXC_109",
    "PEXC_159",
    "PEXC_189",
    "PEXC_289",
    "REXC_29",
    "REXC_39",
    "REXC_49",
    "REXC_55",
    "REXC_69",
    "REXC_79",
    "REXC_95",
    "REXC_109",
    "REXC_159",
    "REXC_189",
    "REXC_289",
    "LC6MC_29",
    "LC6MT_29",
    "LC6MC_39",
    "LC6MT_39",
    "LC6MC_49",
    "LC6MT_49",
    "LC6MC_55",
    "LC6MT_55",
    "LC6MC_69",
    "LC6MT_69",
    "LC6MC_79",
    "LC6MT_79",
    "LC6MC_95",
    "LC6MT_95",
    "LC6MC_109",
    "LC6MT_109",
    "LC6MC_159",
    "LC6MT_159",
    "LC6MC_189",
    "LC6MT_189",
    "LC6MC_289",
    "LC6MT_289",
    "LP12MC_29",
    "LP12MT_29",
    "LP12MC_39",
    "LP12MT_39",
    "LP12MC_49",
    "LP12MT_49",
    "LP12MC_55",
    "LP12MT_55",
    "LP12MC_69",
    "LP12MT_69",
    "LP12MC_79",
    "LP12MT_79",
    "LP12MC_95",
    "LP12MT_95",
    "LP12MC_109",
    "LP12MT_109",
    "LP12MC_159",
    "LP12MT_159",
    "LP12MC_189",
    "LP12MT_189",
    "LP12MC_289",
    "LP12MT_289",
    "LR12MC_29",
    "LR12MT_29",
    "LR12MC_39",
    "LR12MT_39",
    "LR12MC_49",
    "LR12MT_49",
    "LR12MC_55",
    "LR12MT_55",
    "LR12MC_69",
    "LR12MT_69",
    "LR12MC_79",
    "LR12MT_79",
    "LR12MC_95",
    "LR12MT_95",
    "LR12MC_109",
    "LR12MT_109",
    "LR12MC_159",
    "LR12MT_159",
    "LR12MC_189",
    "LR12MT_189",
    "LR12MC_289",
    "LR12MT_289",
    "TVP_29",
    "TVP_39",
    "TVP_49",
    "TVP_55",
    "TVP_69",
    "TVP_79",
    "TVP_95",
    "TVP_109",
    "TVP_159",
    "TVP_189",
    "TVP_289",
    "RESP_29",
    "RESP_39",
    "RESP_49",
    "RESP_55",
    "RESP_69",
    "RESP_79",
    "RESP_95",
    "RESP_109",
    "RESP_159",
    "RESP_189",
    "RESP_289",
    "RETE12MC_29",
    "RETE12MT_29",
    "RETE12MC_39",
    "RETE12MT_39",
    "RETE12MC_49",
    "RETE12MT_49",
    "RETE12MC_55",
    "RETE12MT_55",
    "RETE12MC_69",
    "RETE12MT_69",
    "RETE12MC_79",
    "RETE12MT_79",
    "RETE12MC_95",
    "RETE12MT_95",
    "RETE12MC_109",
    "RETE12MT_109",
    "RETE12MC_159",
    "RETE12MT_159",
    "RETE12MC_189",
    "RETE12MT_189",
    "RETE12MC_289",
    "RETE12MT_289",
  ];
  //Filtros
  const [mostrarQueTabla, setMostrarQueTabla] = useState("caracteristicas");
  const [inventarioMostrarCero, setInventarioMostrarCero] = useState("si");
  const [filtrarPreciosNav, setFiltrarPreciosNav] = useState([
    ["id"],
    ["ASCENDENTE"],
  ]);

  //Buscador Nav
  const [equiposEnBuscadorNav, setequiposEnBuscadorNav] = useState(
    allData.data
  );
  const [ventanaAMostrar, setVentanaAMostrar] = useState("TodosLosEquipos");
  const [listaPreciosAMostar, setListaPreciosAMostar] = useState("");

  //Set Filtros
  const mostrarEquiposConInvetarioCero = (e) =>
    setInventarioMostrarCero(e.target.value);
  const queTablaMostrar = (e) => setMostrarQueTabla(e.target.value);
  const filtrandoDesdeNav = (e) => setFiltrarPreciosNav(e);

  //Set Buscador Nav
  const queEquiposMostrarDeTodos = (e) => {
    setequiposEnBuscadorNav(filterByEquipo(allData.data, e.target[0].value));
  };

  // Elelgir Ventana: TodosLosEquipos-CompararEquipos
  const queVentanaMostrarDelNavBar = (e) => {
    // console.log("que ventana mostrar", e.target.innerText)
    setVentanaAMostrar(e);
  };
  const queListaDePreciosMostrarDelNavBar = (e) => {
    //console.log("que Lista mostrar", e.target.getAttribute("refer"))
    setListaPreciosAMostar(e.target.getAttribute("refer"));
    setVentanaAMostrar("ListasDePrecios");
  };

  function compararJson(jsonA, jsonB, arrayComparar) {
    let resultado = [];
    jsonA.forEach((elA) => {
      jsonB.forEach((elB) => {
        if (elA.Equipo === elB.Equipo) {
          let total = 0;
          arrayComparar.forEach((element) => {
            const esNumero = isNaN(
              Math.round(Number(elA[element]) - Number(elB[element]))
            )
              ? "ND"
              : Math.round(Number(elA[element]) - Number(elB[element]));
            if (typeof esNumero === "number") total += esNumero;
          });
          resultado.push({ Equipo: elA.Equipo, total: total });
        }
      });
    });
    return resultado;
  }

  const enPromocion = compararJson(allData.data, oldData.data, arrayPrecios);

  const funcionSetterAuth = (e) => {
    console.log(e);
    setUserAuth("maybe");
  };

  //controlador de Autenticacion
  const [userAuth, setUserAuth] = useState(false);
  const [nameUser, setNameUser] = useState(null);
  const [correoUser, setCorreoUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setNameUser(user.displayName);
        setCorreoUser(user.email);
        setUserAuth(true);
        console.log(user," ",nameUser, " ", correoUser);
      } else {
        setUserAuth(false);
        console.log("no user");
      }
    });
  }, [onAuthStateChanged]);
  const [msjApoyo, setMsjApoyo] = useState("flex");
  const cerrarMsjApoyo = (e) => {
    e.preventDefault();
    setMsjApoyo("none");
  };
  const mensajeErrorAuth = (
    <div style={{ display: msjApoyo }} className="overlay">
      <div className="popup">
        <p className="ayuda">
          <span id="nombreUser3">TU USUARIO HA SIDO SUSPENDIDO</span>
        </p>
        <p className="ayuda">
          <span id="nombreUser2">SENTIMOS LOS PROBLEMAS </span> ocasionados.
        </p>
        <p className="ayuda">
          Probablemente tu SUSCRIPCION vencio hace algún tiempo.
        </p>
        <p className="ayuda">
          Si crees que esto es un error comunicate con nuestra area técnica.
        </p>
        <p className="ayuda">
          Al whatsapp <span id="nombreUser2">+51 999815458</span> y pronto
          solucionaremos esta <span id="nombreUser2">SUSPENCION</span>.
        </p>
        <a href="/" onClick={cerrarMsjApoyo} className="close" type="submit">
          x
        </a>
      </div>
    </div>
  );

  return (
    <div className="App">
      {userAuth === true ? (
        <div>
          <Navbar
            nameUser={nameUser}
            filtrandoDesdeNav={filtrandoDesdeNav}
            queTablaMostrar={queTablaMostrar}
            mostrarCero={mostrarEquiposConInvetarioCero}
            buscador={queEquiposMostrarDeTodos}
            selectorNavBar={queVentanaMostrarDelNavBar}
            preciosNavBar={queListaDePreciosMostrarDelNavBar}
          />
          <div style={{ marginTop: "120px" }}>
            {ventanaAMostrar === "TodosLosEquipos" ? (
              <Card
                filtrarPreciosNav={filtrarPreciosNav}
                inventarioMostrarCero={inventarioMostrarCero}
                mostrarQueTabla={mostrarQueTabla}
                dataEquipos={equiposEnBuscadorNav}
                oldEquipos={enPromocion}
              />
            ) : ventanaAMostrar === "CompararEquipos" ? (
              <NeoCard
                inventarioMostrarCero={inventarioMostrarCero}
                mostrarQueTabla={mostrarQueTabla}
                dataEquipos={allData.data}
                oldEquipos={oldData.data}
              />
            ) : ventanaAMostrar === "ListasDePrecios" ? (
              <PriceList
                todosLosPrecios={allData.data}
                listaPreciosAMostar={listaPreciosAMostar}
                enPromocion={enPromocion}
              />
            ) : ventanaAMostrar === "HFC/FTTH" ? (
              <div style={{ marginTop: "500px" }}>
                <PlayCard />
              </div>
            ) : null}
          </div>
          <Footer version={allData.version} />
        </div>
      ) : (
        <div>
          <Auth funcionSetterAuth={funcionSetterAuth} />
          {userAuth === "maybe" ? mensajeErrorAuth : null}
        </div>
      )}
    </div>
  );
}
