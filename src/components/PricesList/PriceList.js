import React, { useState, useEffect, useContext } from "react";
import "./PriceList.css";

import { DataContext } from "../../DataContext"
import { ordenarPor } from "../../helper/funcionOrdenYFiltroArrayObjetos";

function BodyTablaLista({ equiposFiltrados, listaAMostrar, enPromocion }) {
  const { allData } = useContext(DataContext);

  return (
    <>
      {equiposFiltrados.map((equipo) => {
        let color = "skyblue";
        enPromocion.map((el) => {
          if (el.Equipo === equipo.Equipo) {
            el.total < 0
              ? (color = "yellow")
              : el.total === 0
              ? (color = "white")
              : (color = "orange");
          }
        });

        return (
          <tr key={equipo.id}>
            <th
              style={{
                position: "sticky",
                left: "0",
                backgroundColor: color,
                maxWidth: "133px",
                minWidth: "132px",
              }}
              scope="row"
            >
              {equipo.Equipo}
            </th>
            {listaAMostrar.map((el, index) => (
              <td
                style={{ backgroundColor: color }}
                key={Math.random()}
                className={
                  index === 0 ? "trStock" : index === 1 ? "trRed" : undefined
                }
              >
                {equipo[el]}
              </td>
            ))}
          </tr>
        );
      })}
    </>
  );
}

/*******************************************************************/
function SliceButton({
  nameId,
  nombreLista,
  listaAMostrar,
  setEquiposFiltrados,
  setEquiposAFiltrar,
}) {
  function obtenerCadena(cadena) {
    let resultado = "";
    let subguion = "";
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] !== "_") {
        resultado += cadena[i];
      } else {
        subguion = cadena[i];
        break;
      }
    }
    return subguion ? resultado + subguion : cadena;
  }
  const setButton = (e) => {
    const checkbox = document.querySelectorAll(".yep");

    checkbox.forEach((input) => {
      if (input.id !== e.target.id) {
        input.checked = false;
      }
    });

    e.target.id === "Equipo"
      ? setEquiposAFiltrar(["Equipo"])
      : e.target.id === "AltPre"
      ? setEquiposAFiltrar(["Prepago"])
      : e.target.id === "PRPre"
      ? setEquiposAFiltrar(["PortRenPre"])
      : e.target.id === "Stock"
      ? setEquiposAFiltrar(["cant"])
      : e.target.id === "Red"
      ? setEquiposAFiltrar(["red"])
      : setEquiposAFiltrar([obtenerCadena(listaAMostrar) + e.target.id]);
  };

  return (
    <div className="checkbox-apple">
      <input onClick={setButton} className="yep" id={nameId} type="checkbox" />
      <label htmlFor={nameId}></label>
    </div>
  );
}
/*******************************************************************/
function FormaTablaLista({ equipos, listaAMostrar, nombreLista, enPromocion }) {
  const { allData } = useContext(DataContext);
  const [equiposFiltrados, setEquiposFiltrados] = useState(equipos);
  const [equiposAFiltrar, setEquiposAFiltrar] = useState([]);
  const [ordenacion, setOrdenacion] = useState(["ASCENDENTE"]);

  useEffect(() => {
    setEquiposFiltrados(ordenarPor(equipos, equiposAFiltrar, ordenacion));
    ordenacion[0] === "ASCENDENTE"
      ? setOrdenacion(["DESCENDENTE"])
      : setOrdenacion(["ASCENDENTE"]);
  }, [equiposAFiltrar,allData]);

  const TrRedStock = (
    <>
      <th className="trStock" scope="col">
        Stock{" "}
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="Stock"
        />
      </th>
      <th className="trRed" scope="col">
        RED{" "}
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="Red"
        />
      </th>
    </>
  );

  //Head según tipo de Lista de Precios
  const trHeadCODE = (
    <tr
      style={{
        verticalAlign: "middle",
        position: "sticky",
        top: "0",
        backgroundColor: "rgb(250,250,250)",
        zIndex: "999",
      }}
    >
      <th
        style={{
          position: "sticky",
          left: "0",
          backgroundColor: "rgb(250,250,250)",
        }}
        scope="col"
      >
        Equipo
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="Equipo"
        />
      </th>
      {TrRedStock}
      <th scope="col">
        29.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="29"
        />
      </th>
      <th scope="col">
        39.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="39"
        />
      </th>
      <th scope="col">
        49.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="49"
        />
      </th>
      <th scope="col">
        55.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="55"
        />
      </th>
      <th scope="col">
        69.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="69"
        />
      </th>
      <th scope="col">
        79.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="79"
        />
      </th>
      <th scope="col">
        95.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="95"
        />
      </th>
      <th scope="col">
        109.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="109"
        />
      </th>
      <th scope="col">
        159.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="159"
        />
      </th>
      <th scope="col">
        189.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="189"
        />
      </th>
      <th scope="col">
        289.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="289"
        />
      </th>
    </tr>
  );
  const trHeadCUOTAS = (
    <tr
      style={{
        verticalAlign: "middle",
        position: "sticky",
        top: "0",
        backgroundColor: "rgb(250,250,250)",
        zIndex: "999",
      }}
    >
      <th
        style={{
          position: "sticky",
          left: "0",
          backgroundColor: "rgb(250,250,250)",
        }}
        scope="col"
      >
        Equipo{" "}
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="Equipo"
        />
      </th>
      {TrRedStock}
      <th scope="col">
        Cuota 39.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="39"
        />
      </th>
      <th scope="col">TOTAL 39.90</th>
      <th scope="col">
        Cuota 49.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="49"
        />
      </th>
      <th scope="col">TOTAL 49.90</th>
      <th scope="col">
        Cuota 55.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="55"
        />
      </th>
      <th scope="col">TOTAL 55.90</th>
      <th scope="col">
        Cuota 69.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="69"
        />
      </th>
      <th scope="col">TOTAL 69.90</th>
      <th scope="col">
        Cuota 79.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="79"
        />
      </th>
      <th scope="col">TOTAL 79.90</th>
      <th scope="col">
        Cuota 95.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="95"
        />
      </th>
      <th scope="col">TOTAL 95.90</th>
      <th scope="col">
        Cuota 109.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="109"
        />
      </th>
      <th scope="col">TOTAL 109.90</th>
      <th scope="col">
        Cuota 159.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="159"
        />
      </th>
      <th scope="col">TOTAL 159.90</th>
      <th scope="col">
        Cuota 189.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="189"
        />
      </th>
      <th scope="col">TOTAL 189.90</th>
      <th scope="col">
        Cuota 289.90
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="289"
        />
      </th>
      <th scope="col">TOTAL 289.90</th>
    </tr>
  );
  const trHeadPRE = (
    <tr
      style={{
        verticalAlign: "middle",
        position: "sticky",
        top: "0",
        backgroundColor: "rgb(250,250,250)",
        zIndex: "999",
      }}
    >
      <th
        style={{
          position: "sticky",
          left: "0",
          backgroundColor: "rgb(250,250,250)",
        }}
        scope="col"
      >
        Equipo{" "}
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="Equipo"
        />
      </th>
      {TrRedStock}
      <th scope="col">
        Alta Prepagos{" "}
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="AltPre"
        />
      </th>
      <th scope="col" htmlFor="check-apple">
        Porta y Reno Prepago{" "}
        <SliceButton
          listaAMostrar={listaAMostrar[2]}
          setOrdenacion={setOrdenacion}
          setEquiposFiltrados={setEquiposFiltrados}
          setEquiposAFiltrar={setEquiposAFiltrar}
          nameId="PRPre"
        />{" "}
      </th>
    </tr>
  );

  return (
    <>
      <div className="title-container">
        <p className="text-center">{nombreLista}</p>
      </div>
      <div
        style={{ overflowY: "scroll", height: "80vh", borderRadius: "10px", marginTop:"-20px" }}
      >
        <table
          style={{ backgroundColor: "rgba(255,255,255,.9)" }}
          className="table table-striped"
        >
          <thead>
            {listaAMostrar.length <= 4
              ? trHeadPRE
              : listaAMostrar.length <= 14
              ? trHeadCODE
              : trHeadCUOTAS}
          </thead>
          <tbody>
            <BodyTablaLista
              equiposFiltrados={equiposFiltrados}
              listaAMostrar={listaAMostrar}
              enPromocion={enPromocion}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}

/*******************************************************************/
function PriceList({ todosLosPrecios, listaPreciosAMostar, enPromocion }) {
  const objetoDeArraysListaAMostrar = {
    AltaPortaYRenoPrepago: ["cant", "red", "Prepago", "PortRenPre"],
    AltaRegularPostpago: [
      "cant",
      "red",
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
    ],
    Ataque12M: [
      "cant",
      "red",
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
    ],
    Ataque6M: [
      "cant",
      "red",
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
    ],
    AtaqueCompetencia: [
      "cant",
      "red",
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
    ],
    AltaCuotas12M: [
      "cant",
      "red",
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
    ],
    AltaCuotas6M: [
      "cant",
      "red",
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
    ],
    FullClaro: [
      "cant",
      "red",
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
    ],
    ListaLite6M: [
      "cant",
      "red",
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
    ],
    LineaAdicional: [
      "cant",
      "red",
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
    ],
    ListaPORTA12M: [
      "cant",
      "red",
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
    ],
    ListaRENO12M: [
      "cant",
      "red",
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
    ],
    PortabilidadExclusiva: [
      "cant",
      "red",
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
    ],
    RenovacionExclusiva: [
      "cant",
      "red",
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
    ],
  };

  useEffect(() => {
    const names = listaPreciosAMostar;
    setListaAMostrar(objetoDeArraysListaAMostrar[names]);
  }, [listaPreciosAMostar]);

  const [listaAMostrar, setListaAMostrar] = useState([]);

  return (
    <div>
      <FormaTablaLista
        equipos={todosLosPrecios}
        listaAMostrar={listaAMostrar}
        nombreLista={listaPreciosAMostar}
        enPromocion={enPromocion}
      />
    </div>
  );
}

export default PriceList;
