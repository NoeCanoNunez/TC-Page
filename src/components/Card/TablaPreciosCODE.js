import React from "react";
import "./TablaPreciosCODE.css";

export default function TablaPreciosCODE({ equipo, oldPrice }) {
  function getMinMaxNumber(arr) {
    let min, max;
    for (let i = 0; i < arr.length; i++) {
      let num = parseFloat(arr[i]);
      if (!isNaN(num)) {
        min = !min ? num : min > num ? num : min;
        max = !max ? num : max < num ? num : max;
      }
    }
    return [min, max];
  }

  const filtrarValores = (objeto) => {
    const claves = ["ACOMP_", "FULLC_", "LINA_", "PAR_", "PEXC_", "REXC_"];
    let resultado = {};
    for (let clave in objeto) {
      if (claves.some((c) => clave.includes(c))) {
        resultado[clave] = objeto[clave];
      }
    }
    return Object.values(resultado);
  };

  const ArrayPrecioMaxMin = getMinMaxNumber(filtrarValores(equipo));

  function funcColor(valor) {
    let newMonto;
    let monto = parseFloat(valor);
    if (!isNaN(monto)) {
      newMonto = Math.round(
        ((monto - ArrayPrecioMaxMin[0]) /
          (ArrayPrecioMaxMin[1] - ArrayPrecioMaxMin[0])) *
          128
      );
      return "rgb(" + (256 - newMonto) + "," + (256 - newMonto) + ",256)";
    } else {
      newMonto = 0;
      return "rgba(" + (128 - newMonto) + "," + newMonto + ",0,0.01)";
    }
  }


  return (
    <>
      <div style={{ overflowY: "scroll", height: "285px", borderRadius:"15px" }}>
        <table
          style={{ backgroundColor: "rgba(255,255,255,.9)" }}
          className="table table-striped"
        >
          <thead>
            <tr
              style={{
                verticalAlign: "middle",
                position: "sticky",
                top: "0",
                backgroundColor: "rgb(250,250,250)",
              }}
            >
              <th scope="col">Plan</th>
              <th scope="col">Full Claro</th>
              <th scope="col">Ataq Comp</th>
              <th scope="col">Reno Excl</th>
              <th scope="col">Port Excl</th>
              <th scope="col">Lin Adic</th>
              <th scope="col">Alt Reg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">29.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_29) }}>
                {equipo.FULLC_29}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_29) }}>
                {equipo.ACOMP_29}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_29) }}>
                {equipo.REXC_29}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_29) }}>
                {equipo.PEXC_29}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_29) }}>
                {equipo.LINA_29}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_29) }}>
                {equipo.PAR_29}
              </td>
            </tr>
            <tr>
              <th scope="row">39.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_39) }}>
                {equipo.FULLC_39}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_39) }}>
                {equipo.ACOMP_39}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_39) }}>
                {equipo.REXC_39}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_39) }}>
                {equipo.PEXC_39}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_39) }}>
                {equipo.LINA_39}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_39) }}>
                {equipo.PAR_39}
              </td>
            </tr>
            <tr>
              <th scope="row">49.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_49) }}>
                {equipo.FULLC_49}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_49) }}>
                {equipo.ACOMP_49}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_49) }}>
                {equipo.REXC_49}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_49) }}>
                {equipo.PEXC_49}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_49) }}>
                {equipo.LINA_49}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_49) }}>
                {equipo.PAR_49}
              </td>
            </tr>
            <tr>
              <th scope="row">55.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_55) }}>
                {equipo.FULLC_55}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_55) }}>
                {equipo.ACOMP_55}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_55) }}>
                {equipo.REXC_55}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_55) }}>
                {equipo.PEXC_55}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_55) }}>
                {equipo.LINA_55}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_55) }}>
                {equipo.PAR_55}
              </td>
            </tr>
            <tr>
              <th scope="row">69.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_69) }}>
                {equipo.FULLC_69}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_69) }}>
                {equipo.ACOMP_69}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_69) }}>
                {equipo.REXC_69}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_69) }}>
                {equipo.PEXC_69}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_69) }}>
                {equipo.LINA_69}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_69) }}>
                {equipo.PAR_69}
              </td>
            </tr>
            <tr>
              <th scope="row">79.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_79) }}>
                {equipo.FULLC_79}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_79) }}>
                {equipo.ACOMP_79}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_79) }}>
                {equipo.REXC_79}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_79) }}>
                {equipo.PEXC_79}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_79) }}>
                {equipo.LINA_79}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_79) }}>
                {equipo.PAR_79}
              </td>
            </tr>
            <tr>
              <th scope="row">95.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_95) }}>
                {equipo.FULLC_95}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_95) }}>
                {equipo.ACOMP_95}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_95) }}>
                {equipo.REXC_95}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_95) }}>
                {equipo.PEXC_95}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_95) }}>
                {equipo.LINA_95}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_95) }}>
                {equipo.PAR_95}
              </td>
            </tr>
            <tr>
              <th scope="row">109.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_109) }}>
                {equipo.FULLC_109}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_109) }}>
                {equipo.ACOMP_109}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_109) }}>
                {equipo.REXC_109}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_109) }}>
                {equipo.PEXC_109}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_109) }}>
                {equipo.LINA_109}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_109) }}>
                {equipo.PAR_109}
              </td>
            </tr>
            <tr>
              <th scope="row">159.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_159) }}>
                {equipo.FULLC_159}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_159) }}>
                {equipo.ACOMP_159}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_159) }}>
                {equipo.REXC_159}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_159) }}>
                {equipo.PEXC_159}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_159) }}>
                {equipo.LINA_159}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_159) }}>
                {equipo.PAR_159}
              </td>
            </tr>
            <tr>
              <th scope="row">189.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_189) }}>
                {equipo.FULLC_189}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_189) }}>
                {equipo.ACOMP_189}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_189) }}>
                {equipo.REXC_189}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_189) }}>
                {equipo.PEXC_189}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_189) }}>
                {equipo.LINA_189}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_189) }}>
                {equipo.PAR_189}
              </td>
            </tr>
            <tr>
              <th scope="row">289.90</th>
              <td style={{ backgroundColor: funcColor(equipo.FULLC_289) }}>
                {equipo.FULLC_289}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.ACOMP_289) }}>
                {equipo.ACOMP_289}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.REXC_289) }}>
                {equipo.REXC_289}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PEXC_289) }}>
                {equipo.PEXC_289}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.LINA_289) }}>
                {equipo.LINA_289}
              </td>
              <td style={{ backgroundColor: funcColor(equipo.PAR_289) }}>
                {equipo.PAR_289}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
