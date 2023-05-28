import React, { useEffect, useState } from "react";
import "./CoorUbi.css";

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
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  //Al hacer Click se usan las coordenadas obtenidas para verificar cobertura
  const verificarCobertura = (e) => {
    e.preventDefault()
    let valorClave = `https://www.google.com/maps/d/u/0/viewer?mid=130fNfdmfbarzuQbGbDqkFjC47ysx4Mdh&ll=${latLon.lat}%2C${latLon.lon}&z=22`
    window.open(valorClave, "_blank");
  }

  useEffect(() => {
    const fetchData = async () => {
      if (inputCities.length > 2) {
        try {
          const responsea = await fetch(
            `https://apis.geodir.co/geocoding/layers/adminlevel3?search=${inputCities}&key=051f80b9-caa0-4af5-83d8-fae4eef59952`
          );
          const dataa = await responsea.json();
          setResponseDataCity(dataa);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [inputCities]);

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
          console.log("Error fetching data:", error);
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
          autocomplete="off"
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
                    {" "}
                    {el.name}{" "}
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
          autocomplete="off"
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
                    {" "}
                    {el.name_complete}{" "}
                  </p>
                ) : null
              )}
        </div>
        <label className="marginTop10 h6" htmlFor="number">
          Ingrese el N°#, si no tiene ponga "0"
        </label>
        <input
          id="number"
          onChange={handleInputAddressNumber}
          className="form-control"
          type="number"
          placeholder="#"
          value={numberAddress}
          autocomplete="off"
        ></input>
        <button
          className="btn btn-dark botonCoordenadas align-center"
          onClick={buscarCoordenadas}
        >
          Enviar
        </button>
      </form>
      {yourCoord ? (
        yourCoord.status === "OK" ? (
          <>
            <p className="h6">Las coordenadas son:</p>
            <h2 style={{backgroundColor:"rgba(0,0,0,.5)", padding:"10px 5px"}} className="text-center">
              {" "}
              {latLon.lat}, {latLon.lon}
            </h2>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <button style={{paddingBottom: "30px"}} onClick={verificarCobertura} className="btn btn-success">Verificar Cobertura</button>
            </div>
            
            {/* <pre>{JSON.stringify(yourCoord, null, 2)}</pre> */}
          </>
        ) : (
          <h2>No exiten coordenadas para tu dirección</h2>
        )
      ) : null}
    </div>
  );
}

export default CoorUbi;
