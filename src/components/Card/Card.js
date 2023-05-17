import React, { useState, useEffect } from "react";
import "./Card.css";
import TablaCaracteristicas from "./TablaCaracteristicas";
import { motion } from "framer-motion";
import TablaPreciosCODE from "./TablaPreciosCODE";
import TablaPreciosCuotas from "./TablaPreciosCuotas";
import { ordenarPor } from "../../helper/funcionOrdenYFiltroArrayObjetos";
import promo from "../../img/promo.png";


function MiniCard({ mostrarQueTabla, el, oldEquipos }) {
  const [mostrar, setMostrar] = useState("caracteristicas");
  useEffect(() => {
    setMostrar(mostrarQueTabla);
  }, [mostrarQueTabla]);

  function cambiarEspacios(cadena) {
    return cadena.replace(/ /g, "%20");
  }
  const imagenEquipo = "https://raw.githubusercontent.com/NoeCanoNunez/TC-Page/master/src/img/claro/" + cambiarEspacios(el.Equipo) +".webp"
  
    const displayPromo = oldEquipos.filter(elem => el.Equipo === elem.Equipo)[0] ? (oldEquipos.filter(elem => el.Equipo === elem.Equipo)[0].total < 0 ? "block" : "none") : "none"
    
  return (
    <>
      <div className="container__cards">
        <div className="card">
          <div className="cover__card">
          <img style={{display:displayPromo}} id="enPromo" alt="promo" src={promo} />
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
          {/* <h6 className="ColorNameEquipo">Cantidad: {el.cant} unid.</h6> */}
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
            <TablaPreciosCODE equipo={el} oldPrice={oldEquipos[el.Equipo]}/>
          ) : (
            <TablaPreciosCuotas equipo={el} oldPrice={oldEquipos[el.Equipo]}/>
          )}
        </div>
      </div>
    </>
  );
}

function Card({ 
  filtrarPreciosNav,
  inventarioMostrarCero, 
  mostrarQueTabla, 
  dataEquipos, 
  oldEquipos 
}) {
  
  const newDataEquipos =dataEquipos;
  const [mostrarCero, setMostrarCero] = useState(newDataEquipos);
  
  useEffect(() => {
    inventarioMostrarCero === "no"
      ? setMostrarCero(newDataEquipos.filter((e) => e.cant > 0))
      : setMostrarCero(dataEquipos);
  }, [inventarioMostrarCero,dataEquipos]);

  useEffect(() => {
    setMostrarCero(ordenarPor(dataEquipos,filtrarPreciosNav[0],filtrarPreciosNav[1]))
  }, [filtrarPreciosNav]);


  return (
    <>
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: "block" ? 0 : 30 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="container__background-triangle">
            <div className="triangle triangle1"></div>
            <div className="triangle triangle2"></div>
            <div className="triangle triangle3"></div>
          </div>
          <div className="container_miniCard">
            {dataEquipos.length !== 0
              ? mostrarCero.map((el) => (
                  <MiniCard mostrarQueTabla={mostrarQueTabla} key={el.id} el={el} oldEquipos={oldEquipos}/>
                ))
              : "Cargando..."}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Card;