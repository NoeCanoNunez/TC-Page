import React, { useEffect, createContext, useState } from "react";
import newData from "./allData/miArchivo.json";
import previewData from "./allData/oldMiArchivo.json";

import { ordenarPor, filterByEquipo } from "./helper/funcionOrdenYFiltroArrayObjetos";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [allData, setAllData] = useState(newData.data);
  const oldData = previewData.data;
  const filterData= newData.data.filter((e) => e.cant > 0);
  const [inventarioCero, setInventarioCero] = useState("si");
  const [filtrarAllData, setfiltrarAllData] = useState([["Id"],["ASCENDENTE"]]);
  const [valorBuscador, setValorBuscador] = useState("");

  // Aquí puedes poner cualquier lógica que necesites para actualizar estos datos
  useEffect(() => {
    if (inventarioCero === "si"){
      setAllData(filterByEquipo(ordenarPor(newData.data,filtrarAllData[0],filtrarAllData[1]), valorBuscador))
    } else {
      setAllData(filterByEquipo(ordenarPor(filterData,filtrarAllData[0],filtrarAllData[1]), valorBuscador))
    }  
    console.log(valorBuscador)
  }, [inventarioCero, filtrarAllData, valorBuscador]);
  return (
    <DataContext.Provider
      value={{
        newData,
        setAllData,
        allData,
        oldData,
        setInventarioCero,
        setfiltrarAllData,
        inventarioCero,
        setValorBuscador
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
