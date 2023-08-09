import React, { useState, useEffect, useContext } from "react";

import "./App.css";

import Navbar from "./components/Nav/Navbar";
import Card from "./components/Card/Card";
import NeoCard from "./components/Card/NeoCard";
import Auth from "./components/Auth/Auth";
import PlayCard from "./components/PlaysCards/PlayCard";
import Footer from "./components/Footer/Footer";
import PriceList from "./components/PricesList/PriceList";

//Importando AllData y OldData desde el DataContext
import { DataContext } from "./DataContext";

//importando formulas Helper
import { filterByEquipo } from "./helper/funcionOrdenYFiltroArrayObjetos";

//import Auth
import { auth } from "./authentication/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  //Aqui va el Data Provider
  const { allData, oldData } = useContext(DataContext);

  // Array de Precios
  function generateArray() {
    var prefixes = [
      "ACOMP_",
      "AC6MC_",
      "AC6MT_",
      "AC12MC_",
      "AC12MT_",
      "FULLC_",
      "LINA_",
      "LAA6MC_",
      "LAA6MT_",
      "LAA12MC_",
      "LAA12MT_",
      "PAR_",
      "PEXC_",
      "REXC_",
      "LC6MC_",
      "LC6MT_",
      "LP12MC_",
      "LP12MT_",
      "LR12MC_",
      "LR12MT_",
      "TVP_",
      "RESP_",
      "RETE12MC_",
      "RETE12MT_",
    ];
    var numbers = [29, 39, 49, 55, 69, 79, 95, 109, 159, 189, 289];

    var array = ["Prepago", "PortRenPre"];
    for (var i = 0; i < prefixes.length; i++) {
      for (var j = 0; j < numbers.length; j++) {
        array.push(prefixes[i] + numbers[j]);
      }
    }
    return array;
  }
  const arrayPrecios = generateArray();

  //Filtros
  const [mostrarQueTabla, setMostrarQueTabla] = useState("caracteristicas");
  const [inventarioMostrarCero, setInventarioMostrarCero] = useState("si");
  const [filtrarPreciosNav, setFiltrarPreciosNav] = useState([
    ["id"],
    ["ASCENDENTE"],
  ]);

  //Buscador Nav
  const [equiposEnBuscadorNav, setequiposEnBuscadorNav] = useState(
    allData
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
    setequiposEnBuscadorNav(filterByEquipo(allData, e.target[0].value));
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
  const enPromocion = compararJson(allData,oldData,arrayPrecios)

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

  useEffect(() => {
    const isMobile =
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
        navigator.userAgent
      );
    if (ventanaAMostrar === "TodosLosEquipos" || ventanaAMostrar === "CompararEquipos") {
      if (isMobile) {
        document.body.style.zoom = "80%"; // Ajusta el valor según el nivel de zoom deseado
      }
    } else {
      if (isMobile) {
        document.body.style.zoom = "100%"; // Ajusta el valor según el nivel de zoom deseado
      }
    }
  }, [ventanaAMostrar]);

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
                dataEquipos={allData}
                oldEquipos={oldData}
              />
            ) : ventanaAMostrar === "ListasDePrecios" ? (
              <PriceList
                todosLosPrecios={allData}
                listaPreciosAMostar={listaPreciosAMostar}
                enPromocion={enPromocion}
              />
            ) : ventanaAMostrar === "HFC/FTTH" ? (
              <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                <PlayCard />
              </div>
            ) : null}
          </div>
          <Footer version={"mañana"} />
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
