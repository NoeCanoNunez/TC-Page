import React, { useState, useContext, useEffect, useRef } from "react";
import "./BotonExpandible.css";
import { DataContext } from "../../DataContext";

const BotonExpandible = ({
  queTablaMostrar,
}) => {
  //Booleano que expande y contrae los filtros
  const [menuExpandido, setMenuExpandido] = useState(false);

  //Cambia los selectores para definir el orden de los equipos
  const [mostrarPrecios, setMostrarPrecios] = useState("none");

  //DataContext para modificar el allData
  const { setInventarioCero, setfiltrarAllData, inventarioCero } =
    useContext(DataContext);

  const botonRef = useRef(null);
  const timerRef = useRef(null);

  const handleMouseLeave = () => {
    // Empezar el temporizador al salir del componente
    timerRef.current = setTimeout(() => {
      setMenuExpandido(false);
    }, 5000);
  };

  const handleClickOutside = (event) => {
    if (botonRef.current && !botonRef.current.contains(event.target)) {
      timerRef.current = setTimeout(() => {
        setMenuExpandido(false);
      }, 5000);
    }
  };

  const handleClickInside = () => {
    // Resetear el temporizador al hacer clic dentro del componente
    clearTimeout(timerRef.current);
    setMenuExpandido(!menuExpandido);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timerRef.current);
    };
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (botonRef.current && !botonRef.current.contains(event.target)) {
  //       setMenuExpandido(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  /*/////////////////////*/

  const handleClick = () => {
    setMenuExpandido(!menuExpandido);
  };
  const handleChange = (e) => {
    e.target.value === "Prepago" || e.target.value === "Equipo"
      ? setMostrarPrecios("none")
      : setMostrarPrecios("block");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.listaPrecios.value);
    console.log(e.target.orden.value);
    e.target.listaPrecios.value === "Equipo"
      ? setfiltrarAllData([["Equipo"], [e.target.orden.value]])
      : e.target.listaPrecios.value === "Prepago"
      ? setfiltrarAllData([["Prepago"], [e.target.orden.value]])
      : setfiltrarAllData([
          [e.target.listaPrecios.value + e.target.precios.value],
          [e.target.orden.value],
        ]);
  };



  const Mostrar = (
    <div className={`filter-bar ${menuExpandido ? "filter-bar-show" : "filter-bar-hide none"}`}>
      <div className="filter-bar__item">
        <h3>Mostrar</h3>
        <select onChange={(e) => queTablaMostrar(e)}>
          <option value="caracteristicas">Caracteristicas</option>
          <option value="precios18Meses">Precios CODE</option>
          <option value="preciosCuotas">Precios CUOTAS</option>
        </select>
        <h3>MostrarStock0?</h3>
        <select
          value={inventarioCero}
          onChange={(e) => {
            setInventarioCero(e.target.value);
          }}
        >
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
        <h3>FIltrar Por Precio</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <select id="listaPrecios" onChange={(e) => handleChange(e)}>
            <option value="Equipo">Nombres</option>
            <option value="PAR_">AltaRegPost</option>
            <option value="Prepago">Prepago</option>
            <option value="ACOMP_">AtaqComp</option>
            <option value="FULLC_">FullClaro</option>
            <option value="LINA_">LineaAdic</option>
            <option value="PEXC_">PortExclus</option>
            <option value="REXC_">RenoExclus</option>
            <option value="LAA6MC_">AltaCuo6M</option>
            <option value="AC6MC_">AtaqComp6M</option>
            <option value="LC6MC_">ListaLite6M</option>
            <option value="LAA12MC_">AltaCuo12M</option>
            <option value="AC12MC_">AtaqComp12M</option>
            <option value="LP12MC_">PortaExclu12M</option>
            <option value="LR12MC_">RenoExclus12M</option>
          </select>
          <select id="precios" style={{ display: mostrarPrecios }}>
            <option value="55">55.90</option>
            <option value="29">29.90</option>
            <option value="39">39.90</option>
            <option value="49">49.90</option>
            <option value="69">69.90</option>
            <option value="79">79.90</option>
            <option value="95">95.90</option>
            <option value="109">109.90</option>
            <option value="159">159.90</option>
            <option value="189">189.90</option>
            <option value="289">289.90</option>
          </select>
          <select id="orden">
            <option value="ASCENDENTE">Ascendente</option>
            <option value="DESCENDENTE">Descendente</option>
          </select>
          <input className="btn btn-success" type="submit"></input>
        </form>
      </div>
    </div>
  );

  return (
    <div ref={botonRef} onMouseLeave={handleMouseLeave}>
      <button className="boton" onClick={handleClickInside}>
        {menuExpandido ? "Ocultar Filtros" : "Mostrar Filtros"}
      </button>
      {Mostrar}
    </div>
  );
};

export default BotonExpandible;
