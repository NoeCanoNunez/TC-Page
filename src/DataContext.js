import React, { useEffect, createContext, useState } from "react";
import newData from "./allData/miArchivo.json";
import previewData from "./allData/oldMiArchivo.json";

import { ordenarPor } from "./helper/funcionOrdenYFiltroArrayObjetos";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [allData, setAllData] = useState(newData.data);
  const oldData = previewData.data;
  const [filterData, setFilterData] = useState(newData.data.filter((e) => e.cant > 0));
  const [inventarioCero, setInventarioCero] = useState("si");
  const [filtrarAllData, setfiltrarAllData] = useState([["Id"],["ASCENDENTE"]]);


  // Aquí puedes poner cualquier lógica que necesites para actualizar estos datos
  useEffect(() => {
    if (inventarioCero === "si"){
      setAllData(newData.data) 
      setAllData(ordenarPor(newData.data,filtrarAllData[0],filtrarAllData[1]))
    } else {
      setAllData(filterData);
      setAllData(ordenarPor(filterData,filtrarAllData[0],filtrarAllData[1]))
    }  
  }, [inventarioCero, filtrarAllData]);

  console.log(allData.length)
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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
