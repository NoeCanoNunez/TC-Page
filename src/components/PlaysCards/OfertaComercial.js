import React, { useState } from "react";
import netflix from "../../img/netflix.svg"
import "./OfertaComercial.css"

const OfertaComercial = () => {
  const newNetflixPrices = {
    "2PlayInternetTelefonia": {
      100: {
        Promo: "Dscto: S/34.90 x 3meses",
        PrecioPromo: 75.1,
        PrecioNormal: 110,
        TiempoPromo: 3,
      },
      180: {
        Promo: "Dscto: S/34.90 x 3meses",
        PrecioPromo: 95.1,
        PrecioNormal: 130,
        TiempoPromo: 3,
      },
    },
    "3PlayAvanzado": {
      180: {
        Promo: "Dscto: S/34.90 x 3meses",
        PrecioPromo: 180.1,
        PrecioNormal: 215,
        TiempoPromo: 3,
      },
      280: {
        Promo: "Dscto: S/34.90 x 3meses",
        PrecioPromo: 220.1,
        PrecioNormal: 255,
        TiempoPromo: 3,
      },
    },
  };

  const newRegularPrices = {
    "1PlayInternet": {
      50: { Promo: "x2-6m", PrecioPromo: 59, PrecioNormal: 59, TiempoPromo: 0 },
      100: {
        Promo: "x2-6m",
        PrecioPromo: 69,
        PrecioNormal: 79,
        TiempoPromo: 6,
      },
      200: {
        Promo: "x2-6m",
        PrecioPromo: 79,
        PrecioNormal: 89,
        TiempoPromo: 6,
      },
      300: {
        Promo: "x2-6m",
        PrecioPromo: 99,
        PrecioNormal: 129,
        TiempoPromo: 6,
      },
      500: {
        Promo: "x2-6m",
        PrecioPromo: 199,
        PrecioNormal: 199,
        TiempoPromo: 0,
      },
      1000: { Promo: "0", PrecioPromo: 399, PrecioNormal: 399, TiempoPromo: 0 },
    },
    "2PlayInternetTelefonia": {
      50: { Promo: "x2-6m", PrecioPromo: 69, PrecioNormal: 69, TiempoPromo: 0 },
      100: {
        Promo: "x2-6m",
        PrecioPromo: 79,
        PrecioNormal: 89,
        TiempoPromo: 6,
      },
      200: {
        Promo: "x2-6m",
        PrecioPromo: 89,
        PrecioNormal: 99,
        TiempoPromo: 6,
      },
      300: {
        Promo: "x2-6m",
        PrecioPromo: 129,
        PrecioNormal: 139,
        TiempoPromo: 6,
      },
      500: {
        Promo: "x2-6m",
        PrecioPromo: 199,
        PrecioNormal: 209,
        TiempoPromo: 6,
      },
      1000: { Promo: "0", PrecioPromo: 399, PrecioNormal: 409, TiempoPromo: 6 },
    },
    "2PlayInternetTvAvanzado": {
      50: {
        Promo: "x2-6m",
        PrecioPromo: 139,
        PrecioNormal: 139,
        TiempoPromo: 0,
      },
      100: {
        Promo: "x2-6m",
        PrecioPromo: 139,
        PrecioNormal: 159,
        TiempoPromo: 6,
      },
      200: {
        Promo: "x2-6m",
        PrecioPromo: 149,
        PrecioNormal: 169,
        TiempoPromo: 6,
      },
      300: {
        Promo: "x2-6m",
        PrecioPromo: 179,
        PrecioNormal: 209,
        TiempoPromo: 6,
      },
      500: {
        Promo: "x2-6m",
        PrecioPromo: 249,
        PrecioNormal: 279,
        TiempoPromo: 6,
      },
      1000: { Promo: "0", PrecioPromo: 449, PrecioNormal: 479, TiempoPromo: 6 },
    },
    "2PlayInternetTvSuperior": {
      50: {
        Promo: "x2-6m",
        PrecioPromo: 189,
        PrecioNormal: 189,
        TiempoPromo: 0,
      },
      100: {
        Promo: "x2-6m",
        PrecioPromo: 189,
        PrecioNormal: 209,
        TiempoPromo: 6,
      },
      200: {
        Promo: "x2-6m",
        PrecioPromo: 199,
        PrecioNormal: 219,
        TiempoPromo: 6,
      },
      300: {
        Promo: "x2-6m",
        PrecioPromo: 229,
        PrecioNormal: 259,
        TiempoPromo: 6,
      },
      500: {
        Promo: "x2-6m",
        PrecioPromo: 299,
        PrecioNormal: 329,
        TiempoPromo: 6,
      },
      1000: { Promo: "0", PrecioPromo: 499, PrecioNormal: 529, TiempoPromo: 6 },
    },
    "3PlayAvanzado": {
      50: {
        Promo: "x2-6m",
        PrecioPromo: 149,
        PrecioNormal: 149,
        TiempoPromo: 0,
      },
      100: {
        Promo: "x2-6m",
        PrecioPromo: 149,
        PrecioNormal: 169,
        TiempoPromo: 6,
      },
      200: {
        Promo: "x2-6m",
        PrecioPromo: 154,
        PrecioNormal: 174,
        TiempoPromo: 6,
      },
      300: {
        Promo: "x2-6m",
        PrecioPromo: 184,
        PrecioNormal: 214,
        TiempoPromo: 6,
      },
      500: {
        Promo: "x2-6m",
        PrecioPromo: 254,
        PrecioNormal: 284,
        TiempoPromo: 6,
      },
      1000: { Promo: "0", PrecioPromo: 454, PrecioNormal: 484, TiempoPromo: 6 },
    },
    "3PlaySuperior": {
      50: {
        Promo: "x2-6m",
        PrecioPromo: 199,
        PrecioNormal: 199,
        TiempoPromo: 0,
      },
      100: {
        Promo: "x2-6m",
        PrecioPromo: 199,
        PrecioNormal: 219,
        TiempoPromo: 6,
      },
      200: {
        Promo: "x2-6m",
        PrecioPromo: 204,
        PrecioNormal: 224,
        TiempoPromo: 6,
      },
      300: {
        Promo: "x2-6m",
        PrecioPromo: 234,
        PrecioNormal: 264,
        TiempoPromo: 6,
      },
      500: {
        Promo: "x2-6m",
        PrecioPromo: 304,
        PrecioNormal: 334,
        TiempoPromo: 6,
      },
      1000: { Promo: "0", PrecioPromo: 504, PrecioNormal: 534, TiempoPromo: 6 },
    },
  };

  const [selectedOption, setSelectedOption] = useState("regular");

  const handleSelector = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderPromotionsTable = () => {
    const prices =
      selectedOption === "regular" ? newRegularPrices : newNetflixPrices;

    return (
      <table className="tableOC">
        <thead>
          <tr>
            <th className="thOC">Paquete</th>
            <th className="thOC">Velocidad</th>
            <th className="thOC">Precio Promo</th>
            <th className="thOC">Precio Normal</th>
          </tr>
        </thead>
        <tbody style={{color: "black"}}>
          {Object.entries(prices).map(([packages, packageData]) =>
            Object.entries(packageData).map(([speed, speedData]) => (
              <tr key={`${packages}-${speed}`}>

                <td className="tdOC">{packages}</td>
                <td className="tdOC" style={{fontWeight:"bold"}}>{speed === "1000" || speedData.TiempoPromo=== 3 ? `${speed}MB` : `${speed}MB (${speed*2}MBx 6m)`}</td>
                <td className="tdOC" style={{fontWeight:"bold", color:"rebeccapurple"}}>
                  {speedData.TiempoPromo === 0 ? "-" :  speedData.PrecioPromo < 100 ? `S/ ${speedData.PrecioPromo}.00 x${speedData.TiempoPromo}m`: `S/${speedData.PrecioPromo}.00 x${speedData.TiempoPromo}m`}
                  </td>
                <td className="tdOC">{speedData.PrecioNormal < 100 ? `S/ ${speedData.PrecioNormal}.00`: `S/${speedData.PrecioNormal}.00`}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div className="radio-inputs" style={{width:"100%"}}>
        <label className="radio">
          <input
            onChange={handleSelector}
            type="radio"
            name="radio"
            value="regular"
          />
          <span className="name">REGULAR</span>
        </label>
        <label className="radio">
          <input
            onChange={handleSelector}
            type="radio"
            name="radio"
            value="netflix"
          />
          <span className="name">
            <img
              style={{ width: "20px", marginRight: "6px" }}
              src={netflix}
              alt="Netflix"
            />{" "}
            NETFLIX{" "}
          </span>
        </label>
      </div>
      {renderPromotionsTable()}
    </div>
  );
};

export default OfertaComercial;
