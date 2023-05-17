import React, { useState, useEffect } from "react";
import "./RenewSubscription.css";
import Footer from "../Footer/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../authentication/firebase";

import imgYape from "../../img/Yape.jpg";

function RenewSubscription() {
  const [dataUser, setDataUser] = useState({
    nombres: "",
    correo: "",
    urlImagen: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setDataUser({ nombres: user.displayName, correo: user.email });
      } else {
        console.log("No User");
      }
    });
  }, []);

  return (
    <>
      <div className="renew-container">
        <h2 className="Importante">Renueva tu Suscripcion</h2>

        <h2 className="Mensaje">
          Hola, <span id="nombreUser">{dataUser.nombres}</span>, esperamos que hayas disfrutado de nuestros
          servicios hasta ahora. 
        </h2>
        <h2 className="Mensaje">
          Para renovar tu suscripción x 1 MES, puedes hacerlo a través de Yape, enviando
          el monto de <span id="nombreUser">S/.8.00</span> a nuestro número de celular <span id="nombreUser">999815458</span>.
        </h2>
        <h2 className="Mensaje">
          Reecuerda incluir tu correo Gmail: <span id="nombreUser">{dataUser.correo}</span>, en el mensaje de Yape
        </h2>
        <img style={{ maxHeight: "320px" }} src={imgYape} alt="imgYape" />
      </div>
      <Footer />
    </>
  );
}

export default RenewSubscription;
