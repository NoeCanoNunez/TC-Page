import React from "react";
import "./TablaCaracteristicas.css";
import android from "./icons/android.svg";
import bateria from "./icons/bateria.svg";
import camara from "./icons/camara.svg";
import cellphone from "./icons/cellphone.svg";
import memoriaExpandible from "./icons/memoriaExpandible.svg";
import memoriaInterna from "./icons/memoriaInterna.svg";
import peso from "./icons/peso.svg";
import procesador from "./icons/procesador.svg";
import ram from "./icons/ram.svg";
import red345g from "./icons/red345g.png";
import size from "./icons/size.svg";

export default function TablaCaracteristicas({ equipo }) {
  let imgAndroid = (
    <img
      
      src={android}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "19px", maxHeight: "20px" }}
      alt="android"
    />
  );
  let imgbateria = (
    <img
      
      src={bateria}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="bateria"
    />
  );
  let imgcamara = (
    <img
      
      src={camara}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="camara"
    />
  );
  let imgcellphone = (
    <img
      
      src={cellphone}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="cellphone"
    />
  );
  let imgmemoriaExpandible = (
    <img
      
      src={memoriaExpandible}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="memoriaExpandible"
    />
  );
  let imgmemoriaInterna = (
    <img
      
      src={memoriaInterna}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="memoriaInterna"
    />
  );
  let imgpeso = (
    <img
      
      src={peso}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="peso"
    />
  );
  let imgprocesador = (
    <img
      
      src={procesador}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="procesador"
    />
  );
  let imgram = (
    <img src={ram} style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }} alt="ram" />
  );
  let imgred345g = (
    <img
      
      src={red345g}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))",color:"white", minHeight: "28px", maxHeight: "30px" }}
      alt="size"
    />
  );
  let imgsize = (
    <img
      
      src={size}
      style={{filter: "drop-shadow(0px 0px 1px rgba(125,125,125,.8))", minHeight: "10px", maxHeight: "20px" }}
      alt="size"
    />
  );

  return (
    <>
      <div>
        <table style={{ backgroundColor: "rgba(255,255,255,.9)", borderRadius:"15px", margin:"auto",textAlign: "center",verticalAlign: "middle"}} className="table table-striped">
          <thead>
            <tr style={{fontSize:"12px",textAlign: "center", verticalAlign: "middle",}}>
              <th scope="col" >{imgAndroid}</th>
              <th scope="col" >{equipo.version}</th>
              <th scope="col" >{imgsize}</th>
              <th scope="col" colSpan="2">{equipo.display}"</th>
              <th scope="col" >{imgpeso}</th>
              <th scope="col" colSpan="2">{equipo.peso} gramos</th>
            </tr>
          </thead>
          <tbody style={{fontSize:"12px",textAlign: "center", verticalAlign: "middle"}}>
            <tr>
              <th scope="row">{imgcamara}</th>
              <th >Princ:</th>
              <td colSpan="2">{equipo.cam_princ}mpx</td>
              <th >Front:</th>
              <td colSpan="2">{equipo.cam_front}mpx</td>
              <td ><b>Total: </b>{equipo.cam_cant -1 + 2}</td>
            </tr>
            <tr>
              <th scope="row">{imgram}</th>
              <td colSpan="2">{equipo.ram}GB <b>RAM</b></td>
              <td >{imgmemoriaInterna}</td>
              <td colSpan="2">{equipo.mem_int} <b>ROM</b></td>
              <td >{imgmemoriaExpandible}</td>
              <td ><b>Expandible: </b>{equipo.mem_exp === "0" ? "-" : equipo.mem_exp + "GB"} </td>
            </tr>
            <tr>
              <th scope="row">{imgbateria}</th>
              <td colSpan="2">{equipo.bateria} <b>mAh</b></td>
              <td >{imgred345g}</td>
              <td ><b>RED </b> {equipo.red}<b>G</b></td>
              <td >{imgprocesador}</td>
              <td colSpan="2"><b>x{equipo.nucleos} nucleos</b> {equipo.ghz}ghz</td>
              {/* <td colspan="2">Larry the Bird</td> */}
            </tr>
            <tr>
              <th scope="row">{imgcellphone}</th>
              <td colSpan="7"><b>Alto: </b>{equipo.altura}cm / <b>Largo: </b>{equipo.anchura}cm / <b>Grosor:</b>{equipo.grosor}cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
