import React, { useState, useEffect } from "react";
import "./PlayCard.css";
import OfertaComercial from "./OfertaComercial";
import CoorUbi from "./CoorUbi";

const PlayCard = () => {
  const [coberturaElegida, setCoberturaElegida] = useState("ELTAMBO");
  const coberturas = [
    {
      ELTAMBO:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-12.04713740930061%2C-75.2233792911217&z=17",
    },
    {
      HUANCAYO:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-12.052540448320704%2C-75.1972146226255&z=18",
    },
    {
      CHILCA:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-12.080957177588832%2C-75.21062554361937&z=16",
    },
    {
      PILCOMAYO:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-12.053087006020784%2C-75.25627669873282&z=17",
    },
    {
      LAMERCED:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-11.059138380904654%2C-75.33052908572608&z=16",
    },
    {
      OXAPAMPA:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-10.577881282728624%2C-75.40059539271573&z=16",
    },
    {
      HUANCAVELICA:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-12.785356050630144%2C-74.97181909257003&z=17",
    },
    {
      SATIPO:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-11.256453083145507%2C-74.63879021471062&z=17",
    },
    {
      TARMA:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-11.417274232816933%2C-75.6874252647613&z=16",
    },
    {
      JAUJA:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-11.773281800225691%2C-75.49842640081538&z=17",
    },
    {
      PAMPAS:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-12.399090840322616%2C-74.8680640085629&z=18",
    },
    {
      SANRAMON:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-11.121700402726555%2C-75.35608796929995&z=17",
    },
    {
      PICHANAKI:
        "https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=-10.926305175438278%2C-74.87338190458718&z=16",
    },
  ];
  const arrayCoberturas = coberturas.map((objeto) => Object.keys(objeto)[0]);
  const elegirCobertura = (e) => {
    setCoberturaElegida(e.target.value);
  };
  const buscarCobertura = (e) => {
    e.preventDefault();
    const valorClave = coberturas.find((objeto) => coberturaElegida in objeto)[
      coberturaElegida
    ];
    window.open(valorClave, "_blank");
  };
  const coberturaZonasJunin = (
    <div className="imgPlays-container">
      <table className="table table-striped mytable">
        <thead>
          <tr className="theadContainer">
            <th scope="col" className="selectContainer">
              Elige la Cobertura:
            </th>
            <th scope="col" className="selectContainer"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <select onChange={elegirCobertura} className="form-select">
                  {coberturas
                    ? arrayCoberturas.map((cob) => <option>{cob}</option>)
                    : null}
                </select>
              </label>
            </th>
            <th>
              <input
                onClick={buscarCobertura}
                className="btn btn-success"
                type="button"
                value="Buscar"
              />
            </th>
          </tr>
        </tbody>

        <p className="medium font-weight-700 text-center">
          <a
            href="https://selectra.com.pe/empresas/claro/claro-tv/canales#que-canales-tiene-claro-tv"
            target="_blank"
            rel="noreferrer"
          >
            Lista de todos los canales aquí
          </a>
        </p>
      </table>
    </div>
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="imgPlays-container" style={{ marginBottom: "50px" }}>
          <CoorUbi />
        </div>

        <div className="imgPlays-container" style={{ marginBottom: "50px" }}>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=145vrKrVO-aBWxohD-zOqWoXZc1e9Ctk&ehbc=2E312F" style={{width: "80vw", height: "480px"}} title="Mapa de ubicación"></iframe>
        </div>

        {/* {coberturaZonasJunin} */}
        
        <div className="imgPlays-container" style={{ marginBottom: "50px" }}>
          <OfertaComercial />
        </div>
      </div>
    </>
  );
};

export default PlayCard;
