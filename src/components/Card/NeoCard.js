import React, { useState, useEffect, useContext } from "react";
import "./NeoCard.css";
import TablaCaracteristicas from "./TablaCaracteristicas";
import { motion } from "framer-motion";
import TablaPreciosCODE from "./TablaPreciosCODE";
import TablaPreciosCuotas from "./TablaPreciosCuotas";
import masImg from "../Card/icons/file-plus.svg";
import returnImg from "../Card/icons/file-return.svg";
import cerrar from "../Card/icons/x-circle.svg";
import { DataContext } from "../../DataContext"
/*-------------------------------------------------------------*/
function MiniCard({ mostrarQueTabla, el, img }) {
  const [mostrar, setMostrar] = useState("caracteristicas");
  const [displayCard, setDisplayCard] = useState("container__cards");
  useEffect(() => {
    setMostrar(mostrarQueTabla);
  }, [mostrarQueTabla,el]);

  const changeDisplayCard = () => {
    setDisplayCard("none")
  }

  function cambiarEspacios(cadena) {
    return cadena.replace(/ /g, "%20");
  }
  const imagenEquipo = "https://raw.githubusercontent.com/NoeCanoNunez/TC-Page/master/src/img/claro/" + cambiarEspacios(el.Equipo) +".webp"
  
  console.log("NeoCard")
  return (
    <>    
      <div className={displayCard}>
      <img onClick={changeDisplayCard} id="cerrar" alt="Cerrar" src={cerrar} />
        <div className="card">
          <div className="cover__card">
            <img src={imagenEquipo} alt="" />
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col prepagoGo1">Prepago</div>
              <div className="col preciopagoGo1">S/.{el.Prepago}</div>
            </div>
            <div className="row">
              <div className="col prepagoGo2">PortaYReno</div>
              <div className="col preciopagoGo2">S/.{el.PortRenPre}</div>
            </div>
          </div>
          <h2 className="ColorNameEquipo">{el.Equipo}</h2>
          <h6 className="ColorNameEquipo">Cantidad: {el.cant} unid.</h6>
          <div>
            <button
              onClick={() => setMostrar("caracteristicas")}
              className="boton1"
            >
              Caracteristicas
            </button>
            <button
              onClick={() => setMostrar("precios18Meses")}
              className="boton2"
            >
              Precios 18 Meses
            </button>
            <button
              onClick={() => setMostrar("preciosCuotas")}
              className="boton3"
            >
              Precios Cuotas
            </button>
          </div>

          {mostrar === "caracteristicas" ? (
            <TablaCaracteristicas equipo={el} />
          ) : mostrar === "precios18Meses" ? (
            <TablaPreciosCODE equipo={el} />
          ) : (
            <TablaPreciosCuotas equipo={el} />
          )}
        </div>
      </div>
    </>
  );
}
/*-------------------------------------------------------------*/
function NewMiniCard({ equipos, queEquiposMostrar }) {
  const [inputView, setInputView] = useState("output none");
  const [masView, setMasView] = useState("input");
  const [messageCard, setMessageCard] = useState("Presione Aquí para Añadir un Equipo")

  const [inputBuscar, setInputBuscar] = useState("");
  const [namesEquipos, setNamesEquipos] = useState([]);

  const inputclass = inputView + " form-control"



  useEffect(() => {
    if (equipos.length === 0) {
    } else if (inputBuscar.length < 2) {
      setNamesEquipos([]);
    } else {
      setNamesEquipos(
        equipos.filter(
          (el) =>
            el.Equipo.toLowerCase().search(inputBuscar.toLowerCase()) !== -1
        )
      );
    }
  }, [inputBuscar]);

  const inputHandler = (e) => {
    e.preventDefault();
    setInputBuscar(e.target.value);
  };
  const handleClick = () => {
    if (inputView === "output none") {
      setMasView("output none");
      setInputView("input");
      setMessageCard("Digite El Nombre Del Equipo A Comparar")
    } else {
      setMasView("input");
      setInputView("output none");
      setMessageCard("Presione Aquí para Añadir un Equipo")
    }
  };
  const enviarHandler = (e) => {
    setInputBuscar("");
    setNamesEquipos([]);
    queEquiposMostrar(equipos.filter(equipo => equipo.Equipo === e.target.innerText)[0])
};

  return (
    <>
      <div className="container__cards">
        <div
          className="card"
          style={{ position: "relative", display: "block" }}
        >
          <div id="svgContainer">
          <div style={{ textAlign: "center", verticalAlign: "middle" }}>
            <div onClick={handleClick} className={masView}>
            <img src={masImg} alt="imgMas" />
            </div>
            <div onClick={handleClick} className={inputView}>
            <img src={returnImg} alt="returnImg" />
            </div>
          </div>
          </div>
          <div style={{ textAlign: "center", verticalAlign: "middle" }}>
            {inputView ? (
              <form>
                <label id="labelInputCard" htmlFor="inputCard" >{messageCard}</label>
                <input
                  id="inputCard" type="search" autoComplete="off" onChange={inputHandler} className={inputclass} value={inputBuscar} autoFocus />
                <div
                  id="optionsContainer"
                  className={inputView}
                >
                  {namesEquipos.length === 0
                    ? null
                    : namesEquipos.map((el, i) =>
                        i < 10 ? (
                          <p className="optionSelector" key={el.id} onClick={enviarHandler}
                          > {el.Equipo} </p>
                        ) : null
                      )}
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
/*-------------------------------------------------------------*/
function NeoCard({
  mostrarQueTabla,
  dataEquipos,
}) {
  
  const { newData } = useContext(DataContext);
  const [equiposCard, setEquiposCard] = useState([]);


  const cambiandoEquiposAMostrar = (prop)=> setEquiposCard([...equiposCard,prop])

  return (
    <>
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: "block" ? 0 : 200 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="container__background-triangle">
            <div className="triangle triangle1"></div>
            <div className="triangle triangle2"></div>
            <div className="triangle triangle3"></div>
          </div>
          <div className="container_miniCard">
            {equiposCard.length===0
            ? null
            : equiposCard.map((el,i) => {
              return <MiniCard key={i} mostrarQueTabla={mostrarQueTabla} el={el} img/>
            })
            } 
            <NewMiniCard equipos={newData.data} queEquiposMostrar={cambiandoEquiposAMostrar} />
          </div>
        </div>
      </motion.div>
    </>
  );
}
/*-------------------------------------------------------------*/
export default NeoCard;
