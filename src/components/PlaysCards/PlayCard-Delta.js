import React, { useState, useEffect } from "react";
import "./PlayCard.css";

import imgVelocidad from "../../img/velocidad.jpg";
import netflix from "../../img/netflix.svg";
import CoorUbi from "./CoorUbi";

const PlayCard = () => {
  const [inputB, setInputB] = useState(false);
  const [inputC, setInputC] = useState(false);
  const [inputD, setInputD] = useState(false);
  const [selectB, setSelectB] = useState("0");
  const [selectC, setSelectC] = useState("0");
  const [selectB2, setSelectB2] = useState("0");
  const [resultado, setResultado] = useState("");
  const [selectCValue, setSelectCValue] = useState("");

  const [coberturaElegida, setCoberturaElegida] = useState("ELTAMBO");

  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    if (name === "inputB") {
      setInputB(checked);
      if ( checked) {
        setSelectB("1");
      } else if (!checked) {
        setSelectB("0");
        setSelectB2("0");
      } else {
      }
      if (checked ) {
        setSelectC("10");
      } else if (checked ) {
        setSelectC("0");
      } else if (!checked) {
        setSelectC("9");
      }
    } else if (name === "inputC") {
      setInputC(checked);
      if (!checked) {
        setInputD(false);
        setSelectC(false);
      }
    } else if (name === "inputD") {
      setInputD(checked);
      if (inputC & !checked) {
        setInputD(false);
        setSelectC("0");
      } else if (!checked) {
        setInputD(false);
      }
    }
  };

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

  useEffect(() => {
    if ( inputB && inputC && inputD) {
      setResultado("3PLAY-Netflix");
      console.log("3PLAY-Netflix");
    } else if ( inputC && inputD) {
      setResultado("2PLAY-Netflix");
      console.log("2PLAY-Netflix");
    } else if (inputB && inputC && inputD) {
      setResultado("3PLAY");
      console.log("3PLAY");
    } else if (inputB && inputC) {
      setResultado("2PLAY-TV-INT");
      console.log("2PLAY-TV-INT");
    } else if (inputB && inputD) {
      setResultado("2PLAY-TV-TLF");
      console.log("2PLAY-TV-TLF");
    } else if (inputC && inputD) {
      setResultado("2PLAY-INT-TLF");
      console.log("2PLAY-INT-TLF");
    } else if (inputB) {
      setResultado("1PLAY-TV");
      console.log("1PLAY-TV");
    } else if (inputC) {
      setResultado("1PLAY-INT");
      console.log("1PLAY-INT");
    } else {
      setResultado("");
      console.log("Nada que mostrar");
    }
  }, [, inputB, inputC, inputD]);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectB") {
      setSelectB(value);
      if (!value) {
        setSelectB2("0");
      }
    } else if (name === "selectC") {
      setSelectC(value);
      setSelectCValue(value);
      console.log(value)
    } else if (name === "selectB2") {
      setSelectB2(value);
      if (!value) {
        setSelectB2("0");
      }
    }
  };

  const preciosInternetRegular = {
    "50MB": 70,
    "100MB": 80,
    "150MB": 95,
    "200MB": 110,
    "300MB": 200,
    "500MB": 240,
    "1000MB": 440,
  };

  const preciosInternetAtaque = {
    "50MB": 59,
    "100MB": 79,
    "200MB": 99,
    "300MB": 149,
    "500MB": 169,
  };

  const preciosInternetNetflix = {
    "100MB": 80,
    "180MB": 100,
    "280MB": 140,
  };

  const preciosNetflix = {
    "2Play": 20,
    "3Play": 40,
  }

   const preciosTv = {
     Avanzado: 75,
     Superior: 125,
   }

  const preciosTelefono = {
    price: 10
  };

  const [eleccionPreciario, setEleccionPreciario] = useState("ATAQUE");

  const handlerSelector=(e)=>{
    setEleccionPreciario(e.target.nextElementSibling.innerText)
    console.log(eleccionPreciario)
  }
  

  const selectorListaPrecios = (
    <div  className="radio-inputs">
      <label className="radio">
        <input onClick={handlerSelector} type="radio" name="radio" defaultChecked />
        <span className="name">ATAQUE</span>
      </label>
      <label className="radio">
        <input onClick={handlerSelector} type="radio" name="radio"  />
        <span className="name">REGULAR</span>
      </label>
      <label className="radio">
        <input onClick={handlerSelector} type="radio" name="radio" />
        <span className="name"><img
                    
                    style={{ width: "20px", marginRight: "6px" }}
                    src={netflix}
                    alt="Netflix"
                  /> NETFLIX </span>
      </label>
    </div>
  );

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
        <tfoot>
          <p className="medium font-weight-700 text-center">
            <a
              href="https://selectra.com.pe/empresas/claro/claro-tv/canales#que-canales-tiene-claro-tv"
              target="_blank"
              rel="noreferrer"
            >
              Lista de todos los canales aqui
            </a>
          </p>
        </tfoot>
      </table>
    </div>
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Aqui van los Selectores y la imagenes */}
        <div className="tableContainer">
          {selectorListaPrecios}
          <table className="table table-striped mytable">
            <thead>
              <tr className="theadContainer">
                <th scope="col" className="selectContainer">
                  <i className="thead-img bi bi-tv"></i>
                  <p>TV</p>
                </th>
                <th scope="col" className="selectContainer">
                  <i className="thead-img bi bi-router"></i>
                  <p>Internet</p>
                </th>
                <th scope="col" className="selectContainer">
                  <i className="thead-img bi bi-telephone-plus"></i>
                  <p>Telefono</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <th>
                  {/* Input TV del tipo Select con Efecto*/}

                  <div id="macario" className="checkbox-wrapper-12">
                    <div className="cbx">
                      <input
                        type="checkbox"
                        name="inputB"
                        checked={inputB}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="cbx-12"></label>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                      </svg>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                        <filter id="goo-12">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="4"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                            result="goo-12"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>

                  {/* Fin del Input TV del tipo Select */}
                </th>
                <th>
                  {/* Input Router del tipo Select con Efecto*/}

                  <div id="macario" className="checkbox-wrapper-12">
                    <div className="cbx">
                      <input
                        type="checkbox"
                        name="inputC"
                        checked={inputC}
                        onChange={handleInputChange}
                        
                      />
                      <label htmlFor="cbx-12"></label>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                      </svg>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                        <filter id="goo-12">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="4"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                            result="goo-12"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>

                  {/* Fin del Input Router del tipo Select */}
                </th>
                <th>
                  {/* Input Telefono del tipo Select con Efecto*/}

                  <div id="macario" className="checkbox-wrapper-12">
                    <div className="cbx">
                      <input
                        type="checkbox"
                        name="inputD"
                        checked={inputD}
                        onChange={handleInputChange}
                        // disabled={ || (! && !inputB && !inputC)}
                      />
                      <label htmlFor="cbx-12"></label>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                      </svg>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                        <filter id="goo-12">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="4"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                            result="goo-12"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  {/* Fin del Input Telefono del tipo Select */}
                </th>
              </tr>
              <tr className={inputB || inputC ? null : "hidden"}>
                
                <th>
                  <select
                    className={inputB ? "form-select" : "hidden"}
                    name="selectB"
                    value={selectB}
                    onChange={handleSelectChange}
                    disabled={!inputB}
                  >
                    <option
                      value="0"
                      className={ inputB ? null : "hidden"}
                    >
                      --Elija--
                    </option>
                    <option
                      value="1"
                      className={inputB ? null : "hidden"}
                    >
                      Avanzado
                    </option>
                    <option
                      value="2"
                      className={ inputB ? null : "hidden"}
                    >
                      Superior
                    </option>
                  </select>
                </th>
                <th>
                  <select
                    className={inputC ? "form-select" : "hidden"}
                    name="selectC"
                    id="selectC"
                    value={selectC}
                    onChange={handleSelectChange}
                    disabled={!inputC}
                  >
                    <option value="0" >
                      --Elija--
                    </option>
                    {eleccionPreciario === "ATAQUE" 
                    ? Object.keys(preciosInternetAtaque).map(el => (<option value={el}>{el}</option>))
                    : eleccionPreciario === "REGULAR" 
                      ? Object.keys(preciosInternetRegular).map(el => (<option  value={el}>{el}</option>))
                      : Object.keys(preciosInternetNetflix).map(el => (<option  value={el}>{el}</option>))
                  }
                  </select>
                </th>
                <th></th>
              </tr>
              <tr className={inputB ? null : "hidden"}>
                
                <th>
                  {" "}
                  <select
                    className="form-select"
                    name="selectB2"
                    // value={selectB2}
                    onChange={handleSelectChange}
                    disabled={!inputB}
                  >
                    <option value="0">1 Deco</option>
                    <option value="1">2 Decos</option>
                    <option value="2">3 Decos</option>
                  </select>
                </th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Aqui van los Precios y las imagenes */}
        <div
          className={ inputB || inputC ? "resultContainer" : "hidden"}
        >
          <div className="promocionPlays">
            <div id="box">
              <p id="flashlight">
                <span id="light">
                  {`${
                    inputB && inputC && inputD
                      ? "3 "
                      : (inputB && inputC) ||
                        (inputB && inputD) ||
                        (inputC && inputD)
                      ? "2 "
                      : inputB || inputC
                      ? "1 "
                      : ""
                  }`}
                </span>
                <span id="flash"> PLAY </span>
              </p>
            </div>
            <p>
              <span className={!inputD ? "hidden" : "text"}>
                {`${
                  inputD
                    ?  !inputB
                      ? "Con 80 minutos MultiDestino"
                      : "Con 100 minutos MultiDestino"
                    : ""
                }`}
              </span>
            </p>
            <p
              className={`${
                resultado === "3PLAY" ||
                resultado === "2PLAY-TV-INT" ||
                resultado === "2PLAY-INT-TLF" ||
                resultado === "1PLAY-INT"
                  ? ""
                  : "hidden"
              }`}
            >
              <span id="lightDscto2">50</span>
              <span id="lightDscto3">% DSCTO X : </span>
              <span id="lightDscto2">{`${
                resultado === "3PLAY" || resultado === "2PLAY-TV-INT"
                  ? " 3"
                  : resultado === "2PLAY-INT-TLF" || resultado === "1PLAY-INT"
                  ? " 1"
                  : ""
              }`}</span>
              <span id="lightDscto3">{`${
                resultado === "3PLAY" || resultado === "2PLAY-TV-INT"
                  ? " MESES"
                  : resultado === "2PLAY-INT-TLF" || resultado === "1PLAY-INT"
                  ? " MES"
                  : ""
              }`}</span>
            </p>
            <p className="coraje">
              {`${
                resultado === "2PLAY-Netflix"
                  ? selectC === "9"
                    ? "S/" + 110
                    : "S/" + 130
                  : resultado === "3PLAY-Netflix"
                  ? selectC === "10"
                    ? selectB2 === "2"
                      ? "S/" + 225
                      : "S/" + 215
                    : selectB2 === "2"
                    ? "S/" + 265
                    : "S/" + 255
                  : resultado === "3PLAY"
                  ? selectB !== "0" && selectC !== "0"
                    ? selectB === "1"
                      ? selectB2 === "2"
                        ? "S/" +
                          (85 +
                            preciosInternetAtaque[selectC] +
                            preciosTelefono.TPlayMD[selectC])
                        : "S/" +
                          (75 +
                            preciosInternetAtaque[selectC] +
                            preciosTelefono.TPlayMD[selectC])
                      : selectB2 === "2"
                      ? "S/" +
                        (135 +
                          preciosInternetAtaque[selectC] +
                          preciosTelefono.TPlayMD[selectC])
                      : "S/" +
                        (125 +
                          preciosInternetAtaque[selectC] +
                          preciosTelefono.TPlayMD[selectC])
                    : "..."
                  : resultado === "2PLAY-TV-INT"
                  ? selectB !== "0" && selectC !== "0"
                    ? selectB === "1"
                      ? selectB2 === "2"
                        ? "S/" + (85 + preciosInternetAtaque[selectC])
                        : "S/" + (75 + preciosInternetAtaque[selectC])
                      : selectB2 === "2"
                      ? "S/" + (135 + preciosInternetAtaque[selectC])
                      : "S/" + (125 + preciosInternetAtaque[selectC])
                    : "..."
                  : resultado === "2PLAY-TV-TLF"
                  ? selectB !== "0"
                    ? selectB === "1"
                      ? selectB2 === "2"
                        ? "S/" + 140
                        : "S/" + 130
                      : selectB2 === "2"
                      ? "S/" + 190
                      : "S/" + 180
                    : "..."
                  : resultado === "2PLAY-INT-TLF"
                  ? selectC !== "0"
                    ? "S/" + (preciosInternetAtaque[selectC] + preciosTelefono.DPlay)
                    : "..."
                  : resultado === "1PLAY-TV"
                  ? selectB !== "0"
                    ? selectB === "1"
                      ? selectB2 === "2"
                        ? "S/" + 130
                        : "S/" + 120
                      : selectB2 === "2"
                      ? "S/" + 180
                      : "S/" + 170
                    : "..."
                  : resultado === "1PLAY-INT"
                  ? selectC !== "0"
                    ? "S/" + preciosInternetAtaque[selectC]
                    : "..."
                  : "Algo no funciona bien, Llamen a la NASA"
              }`}
            </p>
          </div>

          <div className="imgPlays-container">
            <img
              className="imgPlays"
              src={resultado?`https://raw.githubusercontent.com/NoeCanoNunez/TC-Page/master/src/img/Plays/${resultado}.webp`:null}
              alt=""
            />
          </div>
        </div>

        <div className="imgPlays-container" style={{ marginBottom: "50px" }}>
          <CoorUbi />
        </div>

        {coberturaZonasJunin}
      </div>
    </>
  );
};

export default PlayCard;
