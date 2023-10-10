import React, { useEffect, useState } from "react";
import copy from "clipboard-copy";
import "./CoorUbi.css";
import logoGoogle from "../../img/google-logo.svg"

function CoorUbi() {
  const [responseDataCity, setResponseDataCity] = useState([]);
  const [responseDataAddress, setResponseDataAddress] = useState([]);
  const [inputCities, setInputCities] = useState("");
  const [localityId, setLocalityId] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [addressSendValue, setAddressSendValue] = useState("");
  const [numberAddress, setNumberAddress] = useState();
  const [yourCoord, setYourCoord] = useState(null);
  const [latLon, setLatLon] = useState({ lat: "", lon: "" });
  const [displayNoneDist, setDisplayNoneDist] = useState(false);
  const [displayNoneAddr, setDisplayNoneAddr] = useState(false);
  const [yourNODO, setYourNODO] = useState({
    area_name: "",
    area_status: "",
    capacity: "",
    map: "",
    region: "",
    services: "",
    team: "",
    tecnology: "",
  });
  const [coordUnida, setCoordUnida] = useState(`${latLon.lat}, ${latLon.lon}`);

  //Funciones
    //funcion promedio de coordenadas
    function calcularPromedios(coordinates) {
      let sumaValoresA = 0;
      let sumaValoresB = 0;

      coordinates.forEach(array => {
        sumaValoresA += array[0];
        sumaValoresB += array[1];
      });

      const valorAPromedio = sumaValoresA / coordinates.length;
      const valorBPromedio = sumaValoresB / coordinates.length;

      return [valorAPromedio, valorBPromedio];
    }

    // Sirve para saber si es pantalla movil o no
    function chooseConstant() {
      const constantA = "Valor para pantalla de PC";
      const constantB = "Valor para pantalla móvil";

      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
        navigator.userAgent
      );

      return isMobile ? constantB : constantA;
    }



  //Cada cambio en el Input de City ejecuta lo de abajo
  const handleInputCity = (e) => {
    setInputCities(e.target.value);
  };
  //Al elegir la Ciudad Se Guarda el codigo de Localizacion y se actualiza el valor del input
  const selectInputCity = (e) => {
    setInputCities(e.target.innerText);
    setLocalityId(e.currentTarget.getAttribute("localityid"));
    setDisplayNoneDist(true);
  };

  //Cada cambio en el Input de Address se ejecuta lo de abajo
  const handleInputAddress = (e) => {
    setAddressValue(e.target.value);
  };
  //Al elegir la Ciudad Se Guarda el codigo de Localizacion y se actualiza el valor del input
  const selectAddress = (e) => {
    setAddressValue(e.target.innerText);
    setAddressSendValue(e.currentTarget.getAttribute("addresssendvalue"));
    setDisplayNoneAddr(true);
  };
  //Cada cambio en el Input de Address se ejecuta lo de abajo
  const handleInputAddressNumber = (e) => {
    setNumberAddress(e.target.value);
  };
  //Al hacer click en el boton buscar devuelve las coordenadas
  const buscarCoordenadas = async (e) => {
    e.preventDefault();
    let sendAddress = encodeURIComponent(
      `${addressSendValue} ${numberAddress}`
    );
    try {
      const responsec = await fetch(
        `https://apis.geodir.co/geocoding/v1/json?address=${sendAddress}&segments=locality_id:${localityId}&key=051f80b9-caa0-4af5-83d8-fae4eef59952`
      );
      const datac = await responsec.json();
      setYourCoord(datac);
      if (datac.status === "OK") {
        setLatLon({
          lat: datac.results[0].geometry.coordinates.lat,
          lon: datac.results[0].geometry.coordinates.lon,
        });
        setCoordUnida(`${datac.results[0].geometry.coordinates.lat}, ${datac.results[0].geometry.coordinates.lon}`)
      }
    } catch (error) {
      console.log("Error al Obtener las Coordenadas:", error);
    }

  };
  //Al hacer Click se usan las coordenadas para ir al mapa
  // const busquedaManual = (e) => {
  //   e.preventDefault();
  //   let valorClave = `https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=${latLon.lat}%2C${latLon.lon}&z=15`;
  //   window.open(valorClave, "_blank");
  // };
  //Al hacer Click se usan las coordenadas para ir al mapa
  const busquedaGMaps = (e) => {
    e.preventDefault();
    function chooseConstant() {
      const GMaps = `https://www.google.com/maps/search/?api=1&query=${coordUnida}&z=15`;
      // const MyMaps = `https://www.google.com/maps/d/u/0/viewer?mid=145vrKrVO-aBWxohD-zOqWoXZc1e9Ctk&ehbc&ll=${latLon.lat}%2C${latLon.lon}&z=15`;
      const MyMaps = `https://www.google.com/maps/d/u/0/viewer?mid=145vrKrVO-aBWxohD-zOqWoXZc1e9Ctk&ehbc&ll=${latLon.lat}%2C${latLon.lon}&z=15`;
      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
        navigator.userAgent
      );

      return isMobile ? MyMaps : GMaps;
    }
    let valorClave = chooseConstant();
    window.open(valorClave, "_blank");
  };
  //Al hacer Click Verificara si la zona tiene cobertura y dara como respuesta el NODO
  const buscarNODO = async (e) => {
    e.preventDefault();
    function validarCoordenadas(texto) {
      var formatoCoordenadas = /^-?\d+(\.\d+)?,\s-?\d+(\.\d+)?$/;
      return formatoCoordenadas.test(texto);
    }

    let coordenadasEnviar = `https://apis.geodir.co/geofencing/geofencing/area?latlon=${coordUnida}&layer_area_id=eloggbda2669&key=051f80b9-caa0-4af5-83d8-fae4eef59952`

    if (validarCoordenadas(coordUnida)) {
      try {
        const responsec = await fetch(coordenadasEnviar);
        console.log(responsec)
        const datac = await responsec.json();
        console.log(datac)
        setYourNODO({
          area_name: datac.area_name,
          area_status: datac.area_status,
          capacity: datac.capacity,
          map: datac.map,
          region: datac.region,
          services: datac.services,
          team: datac.team,
          tecnology: datac.tecnology,
        });
      } catch (error) {
        console.log("Error al obtner Informacion del NODO y Cobertura:", error);
      }
    } else {
      setMostrarError(true)
    }
  };
  //Modificar Latitud y Longitus desde sus inputs
  const modificarLatLon = (e) => {
    const { value } = e.target;
    setCoordUnida(value);
  };
  //Funcion que copia el valor de la longitud y latitud al portapapeles
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);
  useEffect(() => {
    if (mostrarMensaje) {
      const timeout = setTimeout(() => {
        setMostrarMensaje(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [mostrarMensaje]);

  useEffect(() => {
    if (mostrarError) {
      const timeout = setTimeout(() => {
        setMostrarError(false)
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [mostrarError]);

  const copiar = (e) => {
    const clipboardValue = `${coordUnida}`;
    copy(clipboardValue);
    setMostrarMensaje(true)
  };
  //Reiniciar Todo
  const reiniciar = (e) => {
    e.preventDefault();
    setInputCities("");
    setAddressValue("");
    setNumberAddress("");
    setYourCoord("");
    setResponseDataCity([]);
    setResponseDataAddress([]);
    setDisplayNoneDist(false);
    setDisplayNoneAddr(false);
    setCoordUnida("")
    setLatLon({ lat: "", lon: "" });
    setYourNODO({
      area_status: "",
    });
  };
  //Obtener todas las ciudades
  useEffect(() => {
    const fetchData = async () => {
      if (inputCities.length > 2) {
        try {
          const responsea = await fetch(
            `https://apis.geodir.co/geocoding/layers/adminlevel3?search=${inputCities}&key=051f80b9-caa0-4af5-83d8-fae4eef59952`
          );
          const dataa = await responsea.json();
          const promedios = calcularPromedios(JSON.parse(dataa[0].bbox).coordinates[0])
          setLatLon({ lat: promedios[1], lon: promedios[0] })
          setCoordUnida(`${promedios[1]}, ${promedios[0]}`)
          setResponseDataCity(dataa);
        } catch (error) {
          console.log("Error Al obtener los nombres de las Ciudades:", error);
        }
      }
    };
    fetchData();
  }, [inputCities]);

  //Obtener las Calles
  useEffect(() => {
    const fetchData = async () => {
      if (addressValue.length > 0) {
        try {
          const responseb = await fetch(
            `https://apis.geodir.co/geocoding/layers/routes?search=${addressValue}&key=051f80b9-caa0-4af5-83d8-fae4eef59952&locality_id=${localityId}`
          );
          const datab = await responseb.json();
          setResponseDataAddress(datab);
        } catch (error) {
          console.log("Error al Obtener los nombres de las calles:", error);
        }
      }
    };
    fetchData();
  }, [addressValue, localityId]);

  return (
    <div>
      <h1 className="text-center" style={{ color: "RGB(250,250,250)" }}>
        Busca tus coordenadas
      </h1>
      <form>
        <label className="marginTop10 h6" htmlFor="inputCities">
          Distrito/Provincia/Departamento
        </label>
        <input
          id="inputCities"
          onChange={handleInputCity}
          className="form-control"
          type="text"
          placeholder="Escribe el Distrito"
          value={inputCities}
          autoComplete="off"
        ></input>
        <div className={displayNoneDist ? "none" : "marginTop10"}>
          {responseDataCity.length === 0
            ? null
            : responseDataCity.map((el, i) =>
              i < 10 ? (
                <p
                  className="optionSelector"
                  key={el.locality_id}
                  localityid={el.locality_id}
                  onClick={selectInputCity}
                >
                  {el.name}
                </p>
              ) : null
            )}
        </div>
        <label className="marginTop10 h6" htmlFor="addressValue">
          Ingrese la Direccion
        </label>
        <input
          id="addressValue"
          onChange={handleInputAddress}
          className="form-control"
          type="text"
          placeholder="Escribe la dirección"
          value={addressValue}
          autoComplete="off"
        ></input>
        <div className={displayNoneAddr ? "none" : "marginTop10"}>
          {responseDataAddress.length === 0
            ? null
            : responseDataAddress.map((el, i) =>
              i < 10 ? (
                <p
                  className="optionSelector"
                  key={el.locality_id}
                  addresssendvalue={el.name_complete}
                  onClick={selectAddress}
                >
                  {el.name_complete}
                </p>
              ) : null
            )}
        </div>
        <label className="marginTop10 h6" htmlFor="number">
          Ingrese el N°#, si no tiene ingrese "101"
        </label>
        <input
          id="number"
          onChange={handleInputAddressNumber}
          className="form-control"
          type="number"
          placeholder="#"
          value={numberAddress}
          autoComplete="off"
        ></input>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            className="btn btn-dark botonCoordenadas align-center"
            onClick={buscarCoordenadas}
          >
            Enviar
          </button>
          <button
            className="btn btn-danger botonCoordenadas align-center"
            onClick={reiniciar}
          >
            Reiniciar
          </button>
        </div>
      </form>

      <>
        <p className="h6">Las coordenadas son:</p>
        <div className="form-group input-group">
          <input
            className="form-control"
            type="text"
            name="lat"
            value={coordUnida}
            onChange={modificarLatLon}
          ></input>
          <input
            className="btn btn-warning"
            type="button"
            onClick={copiar}
            value="copiar"
          >
          </input>
          {mostrarMensaje && <div className="fade-out">Coordenadas Copiadas...</div>}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{ marginTop: "30px", paddingBottom: "30px" }}
            onClick={buscarNODO}
            className="btn btn-success"
          >
            Verifica Cobertura
          </button>
          {mostrarError && <div className="fade-out2">Coordenadas Invalidas ...</div>}
          <button
            style={{ marginTop: "30px", paddingBottom: "30px" }}
            onClick={busquedaGMaps}
            className="btn btn-light"
          >
            <img src={logoGoogle} alt="logoGoogle" width="20px" /> Maps
          </button>
        </div>
        {yourNODO.area_status === "" ? null : yourNODO.area_status ===
          "SIN COBERTURA" ? (
          <div className="text-center">
            <p className="h5 presulta">{yourNODO.area_status}</p>
            {/* <button
              style={{ paddingBottom: "30px" }}
              onClick={busquedaManual}
              className="btn btn-light"
            >
              Busqueda Manual
            </button> */}
          </div>
        ) : (
          <div className="text-center">
            <p className="h5 presulta">{yourNODO.area_status}</p>
            <span>
              NODO:<p className="h5 presult">{yourNODO.area_name}</p>
            </span>
            <span>
              VELOCIDAD MAXIMA:<p className="h5 presult">{yourNODO.capacity}</p>
            </span>
            <span>
              REGION:<p className="h5 presult">{yourNODO.region}</p>
            </span>
            <span>
              SERVICIOS:<p className="h5 presult">{yourNODO.services}</p>
            </span>
            <span>
              Tecnologia:<p className="h5 presult">{yourNODO.team}</p>
            </span>
          </div>
        )}
      </>

      <div>
        {/* Aquí puedes mostrar o utilizar los datos del XML almacenados en xmlData */}
        {/* <pre>{JSON.stringify(xmlData, null, 2)}</pre> */}
      </div>
    </div>
  );
}

export default CoorUbi;
