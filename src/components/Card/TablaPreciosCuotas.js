import React from "react";
import "./TablaPreciosCuotas.css";

export default function TablaPreciosCuotas({ equipo }) {
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

  const filtrarValores6M = (objeto) => {
    const claves = ["AC6MC_", "LAA6MC_", "LC6MC_"];
    let resultado = {};
    for (let clave in objeto) {
      if (claves.some((c) => clave.includes(c))) {
        resultado[clave] = objeto[clave];
      }
    }
    return Object.values(resultado);
  };

  const filtrarValores12M = (objeto) => {
    const claves = ["AC12MC_", "LAA12MC_", "LR12MC_", "LP12MC_"];
    let resultado = {};
    for (let clave in objeto) {
      if (claves.some((c) => clave.includes(c))) {
        resultado[clave] = objeto[clave];
      }
    }
    return Object.values(resultado);
  };

  const ArrayPrecioMaxMin6M = getMinMaxNumber(filtrarValores6M(equipo));
  const ArrayPrecioMaxMin12M = getMinMaxNumber(filtrarValores12M(equipo));

  function funcColor6M(valor) {
    let newMonto;
    let monto = parseFloat(valor);
    if (!isNaN(monto)) {
      newMonto = Math.round(
        ((monto - ArrayPrecioMaxMin6M[0]) /
          (ArrayPrecioMaxMin6M[1] - ArrayPrecioMaxMin6M[0])) *
          127
      );
      return "rgb(" + (200 - newMonto) + "," + (200-newMonto) + "," + (0) + ")";
    } else {
      newMonto = 0;
      return "rgba(" + (60) + "," + 60 + ",60,1)";
    }
  }
  
  function funcColor12M(valor) {
    let newMonto;
    let monto = parseFloat(valor);
    if (!isNaN(monto)) {
      newMonto = Math.round(
        ((monto - ArrayPrecioMaxMin12M[0]) /
          (ArrayPrecioMaxMin12M[1] - ArrayPrecioMaxMin12M[0])) *
          127
      );
      return "rgb(" + (60) + "," + (128 - newMonto) + "," + (128 - newMonto)+")";
    } else {
      newMonto = 0;
      return "rgba(" + (60) + "," + 60 + ",60,1)";
    }
  }

  return (
    <>
      <div style={{ overflowY: "scroll", height: "285px",borderRadius:"15px" }}>
        <table
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: "rgba(240,240,240,1)",
          }}
          className="table  table-hover"
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
              <th scope="col">Ataq Comp 6M</th>
              <th scope="col">Lin Adic 6M</th>
              <th scope="col">Cuot Lite 6M</th>
              <th scope="col">Ataq Comp 12M</th>
              <th scope="col">Lin Adic 12M</th>
              <th scope="col">List Reno 12M</th>
              <th scope="col">List Port 12M</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">39.90 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.AC6MC_39) }}>{equipo.AC6MT_39==="ND"?"ND": (equipo.AC6MT_39+ " " + Math.round(100*equipo.AC6MT_39/6)/100 + " " + equipo.AC6MC_39)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LAA6MC_39) }}>{equipo.LAA6MT_39==="ND"?"ND": (equipo.LAA6MT_39+ " " + Math.round(100*equipo.LAA6MT_39/6)/100 + " " + equipo.LAA6MC_39)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LC6MC_39) }}>{equipo.LC6MT_39==="ND"?"ND": (equipo.LC6MT_39+ " " + Math.round(100*equipo.LC6MT_39/6)/100 + " " + equipo.LC6MC_39)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.AC12MC_39) }}>{equipo.AC12MT_39==="ND"?"ND": (equipo.AC12MT_39+ " " + Math.round(100*equipo.AC12MT_39/12)/100 + " " + equipo.AC12MC_39)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LAA12MC_39) }}>{equipo.LAA12MT_39==="ND"?"ND": (equipo.LAA12MT_39+ " " + Math.round(100*equipo.LAA12MT_39/12)/100 + " " + equipo.LAA12MC_39)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LR12MC_39) }}>{equipo.LR12MT_39==="ND"?"ND": (equipo.LR12MT_39+ " " + Math.round(100*equipo.LR12MT_39/12)/100 + " " + equipo.LR12MC_39)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LP12MC_39) }}>{equipo.LP12MT_39==="ND"?"ND": (equipo.LP12MT_39+ " " + Math.round(100*equipo.LP12MT_39/12)/100 + " " + equipo.LP12MC_39)}</td>
              </tr>
              <tr>
              <th scope="row">49.90 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.AC6MC_49) }}>{equipo.AC6MT_49==="ND"?"ND": (equipo.AC6MT_49+ " " + Math.round(100*equipo.AC6MT_49/6)/100 + " " + equipo.AC6MC_49)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LAA6MC_49) }}>{equipo.LAA6MT_49==="ND"?"ND": (equipo.LAA6MT_49+ " " + Math.round(100*equipo.LAA6MT_49/6)/100 + " " + equipo.LAA6MC_49)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LC6MC_49) }}>{equipo.LC6MT_49==="ND"?"ND": (equipo.LC6MT_49+ " " + Math.round(100*equipo.LC6MT_49/6)/100 + " " + equipo.LC6MC_49)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.AC12MC_49) }}>{equipo.AC12MT_49==="ND"?"ND": (equipo.AC12MT_49+ " " + Math.round(100*equipo.AC12MT_49/12)/100 + " " + equipo.AC12MC_49)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LAA12MC_49) }}>{equipo.LAA12MT_49==="ND"?"ND": (equipo.LAA12MT_49+ " " + Math.round(100*equipo.LAA12MT_49/12)/100 + " " + equipo.LAA12MC_49)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LR12MC_49) }}>{equipo.LR12MT_49==="ND"?"ND": (equipo.LR12MT_49+ " " + Math.round(100*equipo.LR12MT_49/12)/100 + " " + equipo.LR12MC_49)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LP12MC_49) }}>{equipo.LP12MT_49==="ND"?"ND": (equipo.LP12MT_49+ " " + Math.round(100*equipo.LP12MT_49/12)/100 + " " + equipo.LP12MC_49)}</td>
              </tr>
              <tr>
              <th scope="row">55.90 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.AC6MC_55) }}>{equipo.AC6MT_55==="ND"?"ND": (equipo.AC6MT_55+ " " + Math.round(100*equipo.AC6MT_55/6)/100 + " " + equipo.AC6MC_55)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.LAA6MC_55) }}>{equipo.LAA6MT_55==="ND"?"ND": (equipo.LAA6MT_55+ " " + Math.round(100*equipo.LAA6MT_55/6)/100 + " " + equipo.LAA6MC_55)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.LC6MC_55) }}>{equipo.LC6MT_55==="ND"?"ND": (equipo.LC6MT_55+ " " + Math.round(100*equipo.LC6MT_55/6)/100 + " " + equipo.LC6MC_55)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.AC12MC_55) }}>{equipo.AC12MT_55==="ND"?"ND": (equipo.AC12MT_55+ " " + Math.round(100*equipo.AC12MT_55/12)/100 + " " + equipo.AC12MC_55)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LAA12MC_55) }}>{equipo.LAA12MT_55==="ND"?"ND": (equipo.LAA12MT_55+ " " + Math.round(100*equipo.LAA12MT_55/12)/100 + " " + equipo.LAA12MC_55)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LR12MC_55) }}>{equipo.LR12MT_55==="ND"?"ND": (equipo.LR12MT_55+ " " + Math.round(100*equipo.LR12MT_55/12)/100 + " " + equipo.LR12MC_55)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LP12MC_55) }}>{equipo.LP12MT_55==="ND"?"ND": (equipo.LP12MT_55+ " " + Math.round(100*equipo.LP12MT_55/12)/100 + " " + equipo.LP12MC_55)}</td>
              </tr>
              <tr>
              <th scope="row">69.90 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.AC6MC_69) }}>{equipo.AC6MT_69==="ND"?"ND": (equipo.AC6MT_69+ " " + Math.round(100*equipo.AC6MT_69/6)/100 + " " + equipo.AC6MC_69)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.LAA6MC_69) }}>{equipo.LAA6MT_69==="ND"?"ND": (equipo.LAA6MT_69+ " " + Math.round(100*equipo.LAA6MT_69/6)/100 + " " + equipo.LAA6MC_69)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.LC6MC_69) }}>{equipo.LC6MT_69==="ND"?"ND": (equipo.LC6MT_69+ " " + Math.round(100*equipo.LC6MT_69/6)/100 + " " + equipo.LC6MC_69)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.AC12MC_69) }}>{equipo.AC12MT_69==="ND"?"ND": (equipo.AC12MT_69+ " " + Math.round(100*equipo.AC12MT_69/12)/100 + " " + equipo.AC12MC_69)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LAA12MC_69) }}>{equipo.LAA12MT_69==="ND"?"ND": (equipo.LAA12MT_69+ " " + Math.round(100*equipo.LAA12MT_69/12)/100 + " " + equipo.LAA12MC_69)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LR12MC_69) }}>{equipo.LR12MT_69==="ND"?"ND": (equipo.LR12MT_69+ " " + Math.round(100*equipo.LR12MT_69/12)/100 + " " + equipo.LR12MC_69)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LP12MC_69) }}>{equipo.LP12MT_69==="ND"?"ND": (equipo.LP12MT_69+ " " + Math.round(100*equipo.LP12MT_69/12)/100 + " " + equipo.LP12MC_69)}</td>
              </tr>
              <tr>
              <th scope="row">79.90 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.AC6MC_79) }}>{equipo.AC6MT_79==="ND"?"ND": (equipo.AC6MT_79+ " " + Math.round(100*equipo.AC6MT_79/6)/100 + " " + equipo.AC6MC_79)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LAA6MC_79) }}>{equipo.LAA6MT_79==="ND"?"ND": (equipo.LAA6MT_79+ " " + Math.round(100*equipo.LAA6MT_79/6)/100 + " " + equipo.LAA6MC_79)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LC6MC_79) }}>{equipo.LC6MT_79==="ND"?"ND": (equipo.LC6MT_79+ " " + Math.round(100*equipo.LC6MT_79/6)/100 + " " + equipo.LC6MC_79)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.AC12MC_79) }}>{equipo.AC12MT_79==="ND"?"ND": (equipo.AC12MT_79+ " " + Math.round(100*equipo.AC12MT_79/12)/100 + " " + equipo.AC12MC_79)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LAA12MC_79) }}>{equipo.LAA12MT_79==="ND"?"ND": (equipo.LAA12MT_79+ " " + Math.round(100*equipo.LAA12MT_79/12)/100 + " " + equipo.LAA12MC_79)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LR12MC_79) }}>{equipo.LR12MT_79==="ND"?"ND": (equipo.LR12MT_79+ " " + Math.round(100*equipo.LR12MT_79/12)/100 + " " + equipo.LR12MC_79)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LP12MC_79) }}>{equipo.LP12MT_79==="ND"?"ND": (equipo.LP12MT_79+ " " + Math.round(100*equipo.LP12MT_79/12)/100 + " " + equipo.LP12MC_79)}</td>
              </tr>
              <tr>
              <th scope="row">95.90 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.AC6MC_95) }}>{equipo.AC6MT_95==="ND"?"ND": (equipo.AC6MT_95+ " " + Math.round(100*equipo.AC6MT_95/6)/100 + " " + equipo.AC6MC_95)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.LAA6MC_95) }}>{equipo.LAA6MT_95==="ND"?"ND": (equipo.LAA6MT_95+ " " + Math.round(100*equipo.LAA6MT_95/6)/100 + " " + equipo.LAA6MC_95)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor6M(equipo.LC6MC_95) }}>{equipo.LC6MT_95==="ND"?"ND": (equipo.LC6MT_95+ " " + Math.round(100*equipo.LC6MT_95/6)/100 + " " + equipo.LC6MC_95)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.AC12MC_95) }}>{equipo.AC12MT_95==="ND"?"ND": (equipo.AC12MT_95+ " " + Math.round(100*equipo.AC12MT_95/12)/100 + " " + equipo.AC12MC_95)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LAA12MC_95) }}>{equipo.LAA12MT_95==="ND"?"ND": (equipo.LAA12MT_95+ " " + Math.round(100*equipo.LAA12MT_95/12)/100 + " " + equipo.LAA12MC_95)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LR12MC_95) }}>{equipo.LR12MT_95==="ND"?"ND": (equipo.LR12MT_95+ " " + Math.round(100*equipo.LR12MT_95/12)/100 + " " + equipo.LR12MC_95)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 6px black', backgroundColor: funcColor12M(equipo.LP12MC_95) }}>{equipo.LP12MT_95==="ND"?"ND": (equipo.LP12MT_95+ " " + Math.round(100*equipo.LP12MT_95/12)/100 + " " + equipo.LP12MC_95)}</td>
              </tr>
              <tr>
              <th scope="row">109.9 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.AC6MC_109) }}>{equipo.AC6MT_109==="ND"?"ND": (equipo.AC6MT_109+ " " + Math.round(100*equipo.AC6MT_109/6)/100 + " " + equipo.AC6MC_109)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LAA6MC_109) }}>{equipo.LAA6MT_109==="ND"?"ND": (equipo.LAA6MT_109+ " " + Math.round(100*equipo.LAA6MT_109/6)/100 + " " + equipo.LAA6MC_109)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LC6MC_109) }}>{equipo.LC6MT_109==="ND"?"ND": (equipo.LC6MT_109+ " " + Math.round(100*equipo.LC6MT_109/6)/100 + " " + equipo.LC6MC_109)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.AC12MC_109) }}>{equipo.AC12MT_109==="ND"?"ND": (equipo.AC12MT_109+ " " + Math.round(100*equipo.AC12MT_109/12)/100 + " " + equipo.AC12MC_109)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LAA12MC_109) }}>{equipo.LAA12MT_109==="ND"?"ND": (equipo.LAA12MT_109+ " " + Math.round(100*equipo.LAA12MT_109/12)/100 + " " + equipo.LAA12MC_109)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LR12MC_109) }}>{equipo.LR12MT_109==="ND"?"ND": (equipo.LR12MT_109+ " " + Math.round(100*equipo.LR12MT_109/12)/100 + " " + equipo.LR12MC_109)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LP12MC_109) }}>{equipo.LP12MT_109==="ND"?"ND": (equipo.LP12MT_109+ " " + Math.round(100*equipo.LP12MT_109/12)/100 + " " + equipo.LP12MC_109)}</td>
              </tr>
              <tr>
              <th scope="row">159.9 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.AC6MC_159) }}>{equipo.AC6MT_159==="ND"?"ND": (equipo.AC6MT_159+ " " + Math.round(100*equipo.AC6MT_159/6)/100 + " " + equipo.AC6MC_159)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LAA6MC_159) }}>{equipo.LAA6MT_159==="ND"?"ND": (equipo.LAA6MT_159+ " " + Math.round(100*equipo.LAA6MT_159/6)/100 + " " + equipo.LAA6MC_159)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LC6MC_159) }}>{equipo.LC6MT_159==="ND"?"ND": (equipo.LC6MT_159+ " " + Math.round(100*equipo.LC6MT_159/6)/100 + " " + equipo.LC6MC_159)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.AC12MC_159) }}>{equipo.AC12MT_159==="ND"?"ND": (equipo.AC12MT_159+ " " + Math.round(100*equipo.AC12MT_159/12)/100 + " " + equipo.AC12MC_159)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LAA12MC_159) }}>{equipo.LAA12MT_159==="ND"?"ND": (equipo.LAA12MT_159+ " " + Math.round(100*equipo.LAA12MT_159/12)/100 + " " + equipo.LAA12MC_159)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LR12MC_159) }}>{equipo.LR12MT_159==="ND"?"ND": (equipo.LR12MT_159+ " " + Math.round(100*equipo.LR12MT_159/12)/100 + " " + equipo.LR12MC_159)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LP12MC_159) }}>{equipo.LP12MT_159==="ND"?"ND": (equipo.LP12MT_159+ " " + Math.round(100*equipo.LP12MT_159/12)/100 + " " + equipo.LP12MC_159)}</td>
              </tr>
              <tr>
              <th scope="row">189.9 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.AC6MC_189) }}>{equipo.AC6MT_189==="ND"?"ND": (equipo.AC6MT_189+ " " + Math.round(100*equipo.AC6MT_189/6)/100 + " " + equipo.AC6MC_189)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LAA6MC_189) }}>{equipo.LAA6MT_189==="ND"?"ND": (equipo.LAA6MT_189+ " " + Math.round(100*equipo.LAA6MT_189/6)/100 + " " + equipo.LAA6MC_189)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LC6MC_189) }}>{equipo.LC6MT_189==="ND"?"ND": (equipo.LC6MT_189+ " " + Math.round(100*equipo.LC6MT_189/6)/100 + " " + equipo.LC6MC_189)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.AC12MC_189) }}>{equipo.AC12MT_189==="ND"?"ND": (equipo.AC12MT_189+ " " + Math.round(100*equipo.AC12MT_189/12)/100 + " " + equipo.AC12MC_189)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LAA12MC_189) }}>{equipo.LAA12MT_189==="ND"?"ND": (equipo.LAA12MT_189+ " " + Math.round(100*equipo.LAA12MT_189/12)/100 + " " + equipo.LAA12MC_189)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LR12MC_189) }}>{equipo.LR12MT_189==="ND"?"ND": (equipo.LR12MT_189+ " " + Math.round(100*equipo.LR12MT_189/12)/100 + " " + equipo.LR12MC_189)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LP12MC_189) }}>{equipo.LP12MT_189==="ND"?"ND": (equipo.LP12MT_189+ " " + Math.round(100*equipo.LP12MT_189/12)/100 + " " + equipo.LP12MC_189)}</td>
              </tr>
              <tr>
              <th scope="row">289.9 Cuota TotMes</th>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.AC6MC_289) }}>{equipo.AC6MT_289==="ND"?"ND": (equipo.AC6MT_289+ " " + Math.round(100*equipo.AC6MT_289/6)/100 + " " + equipo.AC6MC_289)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LAA6MC_289) }}>{equipo.LAA6MT_289==="ND"?"ND": (equipo.LAA6MT_289+ " " + Math.round(100*equipo.LAA6MT_289/6)/100 + " " + equipo.LAA6MC_289)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor6M(equipo.LC6MC_289) }}>{equipo.LC6MT_289==="ND"?"ND": (equipo.LC6MT_289+ " " + Math.round(100*equipo.LC6MT_289/6)/100 + " " + equipo.LC6MC_289)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.AC12MC_289) }}>{equipo.AC12MT_289==="ND"?"ND": (equipo.AC12MT_289+ " " + Math.round(100*equipo.AC12MT_289/12)/100 + " " + equipo.AC12MC_289)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LAA12MC_289) }}>{equipo.LAA12MT_289==="ND"?"ND": (equipo.LAA12MT_289+ " " + Math.round(100*equipo.LAA12MT_289/12)/100 + " " + equipo.LAA12MC_289)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LR12MC_289) }}>{equipo.LR12MT_289==="ND"?"ND": (equipo.LR12MT_289+ " " + Math.round(100*equipo.LR12MT_289/12)/100 + " " + equipo.LR12MC_289)}</td>
              <td  style={{ color: 'white', textShadow: '0 0 5px black', backgroundColor: funcColor12M(equipo.LP12MC_289) }}>{equipo.LP12MT_289==="ND"?"ND": (equipo.LP12MT_289+ " " + Math.round(100*equipo.LP12MT_289/12)/100 + " " + equipo.LP12MC_289)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
