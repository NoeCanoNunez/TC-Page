import React, { useState, useEffect } from "react";
import "./PlayCard.css";

import imgVelocidad from "../../img/velocidad.jpg";
import netflix from "../../img/netflix.svg";

const PlayCard = () => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [inputC, setInputC] = useState(false);
  const [inputD, setInputD] = useState(false);
  const [selectB, setSelectB] = useState("0");
  const [selectC, setSelectC] = useState("0");
  const [selectB2, setSelectB2] = useState("0");
  const [resultado, setResultado] = useState("");

  const [selectCValue, setSelectCValue] = useState("");

  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    if (name === "inputA") {
      setInputA(checked);
      if (checked && inputB) {
        setSelectB("1");
        setInputC(true);
        setInputD(true);
      } else if (checked) {
        setInputC(true);
        setInputD(true);
        setSelectC("9");
      } else if (!checked && inputB) {
        setSelectB("0");
        setSelectC("0");
        setInputC(false);
        setInputD(false);
      } else if (!checked) {
        setSelectC("0");
        setInputC(false);
        setInputD(false);
      } else {
      }
      if (checked && inputB) {
        setSelectC("10");
      } else if (!checked) {
        setSelectC("0");
      }
    } else if (name === "inputB") {
      setInputB(checked);
      if (inputA && checked) {
        setSelectB("1");
      } else if (!checked) {
        setSelectB("0");
        setSelectB2("0");
      } else {
      }
      if (checked && inputA) {
        setSelectC("10");
      } else if (checked && !inputA) {
        setSelectC("0");
      } else if (!checked && inputA) {
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

  useEffect(() => {
    if (inputA && inputB && inputC && inputD) {
      setResultado("3PLAY-Netflix");
      console.log("3PLAY-Netflix");
    } else if (inputA && inputC && inputD) {
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
  }, [inputA, inputB, inputC, inputD]);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectB") {
      setSelectB(value);
      if (!value) {
        setSelectB2("0");
      }
    } else if (name === "selectC") {
      setSelectC(value);
      setSelectCValue(event.target[event.target.value].innerText);
    } else if (name === "selectB2") {
      setSelectB2(value);
      if (!value) {
        setSelectB2("0");
      }
    }
  };

  const preciosInternet = {
    1: 70,
    2: 80,
    3: 95,
    4: 110,
    5: 125,
    6: 200,
    7: 240,
    8: 440,
  };
  // const preciosTv = {
  //   Avanzado: 75,
  //   Superior: 125,
  // }

  const preciosTelefono = {
    DPlay: 10,
    TPlayMD: {
      1: 10,
      2: 10,
      3: 10,
      4: 5,
      5: 5,
      6: 5,
      7: 5,
      8: 5,
    },
  };
  return (
    <div>
      <div className="imgContainer">
        <img src={imgVelocidad} alt="velocidad"></img>
      </div>
      <div className="tableContainer">
        <table
          className="table table-striped mytable"
          style={{
            position: "absolute",
            minWidth: "550px",
            maxWidth: "700px",
            zIndex: "1",
            left: "3vw",
            top: "12vh",
          }}
        >
          <thead>
            <tr className="theadContainer">
              <th scope="col" className="selectContainer">
                <img
                  className="thead-img"
                  style={{ width: "100px" }}
                  src={netflix}
                  alt="Netflix"
                />
              </th>
              <th scope="col" className="selectContainer">
                <i className="thead-img bi bi-tv"></i>
              </th>
              <th scope="col" className="selectContainer">
                <i className="thead-img bi bi-router"></i>
              </th>
              <th scope="col" className="selectContainer">
                <i className="thead-img bi bi-telephone-plus"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                {/* Input Netflix del tipo Select con Efecto*/}
                <div id="macario" class="checkbox-wrapper-12">
                  <div class="cbx">
                    <input
                      type="checkbox"
                      name="inputA"
                      checked={inputA}
                      onChange={handleInputChange}
                    />
                    <label for="cbx-12"></label>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
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
                {/* Fin del Input Netflix del tipo Select */}
              </th>
              <th>
                {/* Input TV del tipo Select con Efecto*/}

                <div id="macario" class="checkbox-wrapper-12">
                  <div class="cbx">
                    <input
                      type="checkbox"
                      name="inputB"
                      checked={inputB}
                      onChange={handleInputChange}
                    />
                    <label for="cbx-12"></label>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
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

                <div id="macario" class="checkbox-wrapper-12">
                  <div class="cbx">
                    <input
                      type="checkbox"
                      name="inputC"
                      checked={inputC}
                      onChange={handleInputChange}
                      disabled={inputA}
                    />
                    <label for="cbx-12"></label>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
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

                <div id="macario" class="checkbox-wrapper-12">
                  <div class="cbx">
                    <input
                      type="checkbox"
                      name="inputD"
                      checked={inputD}
                      onChange={handleInputChange}
                      disabled={inputA || (!inputA && !inputB && !inputC)}
                    />
                    <label for="cbx-12"></label>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
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
              <th></th>
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
                    className={!inputA && inputB ? null : "hidden"}
                  >
                    --Elija--
                  </option>
                  <option
                    value="1"
                    className={!inputA && inputB ? null : "hidden"}
                  >
                    Avanzado
                  </option>
                  <option
                    value="2"
                    className={!inputA && inputB ? null : "hidden"}
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
                  <option value="0" className={!inputA ? null : "hidden"}>
                    --Elija--
                  </option>
                  <option
                    value="1"
                    className={
                      !inputA
                        ? !inputB && !inputD
                          ? "hidden"
                          : null
                        : "hidden"
                    }
                  >
                    50MB
                  </option>
                  <option value="2" className={!inputA ? null : "hidden"}>
                    100MB
                  </option>
                  <option value="3" className={!inputA ? null : "hidden"}>
                    150MB
                  </option>
                  <option value="4" className={!inputA ? null : "hidden"}>
                    200MB
                  </option>
                  <option value="5" className={!inputA ? null : "hidden"}>
                    250MB
                  </option>
                  <option value="6" className={!inputA ? null : "hidden"}>
                    300MB
                  </option>
                  <option value="7" className={!inputA ? null : "hidden"}>
                    500MB
                  </option>
                  <option value="8" className={!inputA ? null : "hidden"}>
                    1000MB
                  </option>
                  <option
                    value="9"
                    className={inputA && !inputB ? null : "hidden"}
                  >
                    100MB
                  </option>
                  <option value="10" className={inputA ? null : "hidden"}>
                    180MB
                  </option>
                  <option
                    value="11"
                    className={inputA && inputB ? null : "hidden"}
                  >
                    280MB
                  </option>
                </select>
              </th>
              <th></th>
            </tr>
            <tr className={inputB ? null : "hidden"}>
              <th></th>
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
            <tr className={inputA || inputB || inputC ? null : "hidden"}>
              <th colSpan={2} className="">
                <div id="box">
                  <p id="flashlight">
                    <span id="light">
                  {`${
                    inputB && inputC && inputD
                      ? ("3 ")
                      : (inputB && inputC) ||
                        (inputB && inputD) ||
                        (inputC && inputD)
                      ? "2 "
                      : inputB || inputC
                      ? "1 "
                      : ""
                  }`}
                  </span>
                    <span id="flash"> PLAY</span>
                  </p>
                </div>
                {/* <p>
                  {`El plan TV: ${
                    inputB && selectB === "1"
                      ? "AVANZADO"
                      : selectB === "2"
                      ? "SUPERIOR"
                      : ""
                  }`}
                </p>
                <p>
                  {`Con Decos: ${
                    inputB && selectB2 === "0"
                      ? "1 Decodificador"
                      : selectB2 === "1"
                      ? "2 Decodificadores"
                      : selectB2 === "2"
                      ? "3 Decodificadores"
                      : ""
                  }`}
                </p>
                <p>{`MB: ${inputC && selectC !== "0" ? selectCValue : ""}`}</p> */}
                <p>
                <span class="text">
                  {`${
                    inputD
                      ? inputA && !inputB
                        ? "80 minutos"
                        : "100 minutos"
                      : ""
                  }`}
                </span>
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
                            ? "S/" + (85 +
                              preciosInternet[selectC] +
                              preciosTelefono.TPlayMD[selectC])
                            : "S/" + (75 +
                              preciosInternet[selectC] +
                              preciosTelefono.TPlayMD[selectC])
                          : selectB2 === "2"
                          ? "S/" + (135 +
                            preciosInternet[selectC] +
                            preciosTelefono.TPlayMD[selectC])
                          : "S/" + (125 +
                            preciosInternet[selectC] +
                            preciosTelefono.TPlayMD[selectC])
                        : "Esperando eleccion ..."
                      : resultado === "2PLAY-TV-INT"
                      ? selectB !== "0" && selectC !== "0"
                        ? selectB === "1"
                          ? selectB2 === "2"
                            ? "S/" + (85 + preciosInternet[selectC])
                            : "S/" + (75 + preciosInternet[selectC])
                          : selectB2 === "2"
                          ? "S/" + (135 + preciosInternet[selectC])
                          : "S/" + (125 + preciosInternet[selectC])
                        : "Esperando eleccion ..."
                      : resultado === "2PLAY-TV-TLF"
                      ? selectB !== "0"
                        ? selectB === "1"
                          ? selectB2 === "2"
                            ? "S/" + 140
                            : "S/" + 130
                          : selectB2 === "2"
                          ? "S/" + 190
                          : "S/" + 180
                        : "Esperando eleccion ..."
                      : resultado === "2PLAY-INT-TLF"
                      ? selectC !== "0"
                        ? "S/" + (preciosInternet[selectC] + preciosTelefono.DPlay)
                        : "Esperando eleccion ..."
                      : resultado === "1PLAY-TV"
                      ? selectB !== "0"
                        ? selectB === "1"
                          ? selectB2 === "2"
                            ? "S/" + 130
                            : "S/" + 120
                          : selectB2 === "2"
                          ? "S/" + 180
                          : "S/" + 170
                        : "Esperando eleccion ..."
                      : resultado === "1PLAY-INT"
                      ? selectC !== "0"
                        ?  "S/" + preciosInternet[selectC]
                        : "Esperando eleccion ..."
                      : "Algo no funciona bien, Llamen a la NASA"
                  }`}
                </p>
              </th>
              <th colSpan={2}>
                av
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayCard;
