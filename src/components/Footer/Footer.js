
import React, { useContext } from "react";
import "./Footer.css";
import { auth } from "../../authentication/firebase"
import { DataContext } from "../../DataContext"

import loadingGif from "../../img/loading.gif";
function Footer() {

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log('Signed Out');
    }).catch((error) => {
      console.log(error);
    });
  };

  const { newData } = useContext(DataContext);

  return (
    <footer className="footer">
      <div><button onClick={handleSignOut} className="btn btn-danger LogOut">
        <p>Cerrar sesión</p>
    </button></div>
      <div className="left"><img style={{width:"70px", height:"65px"}} src={loadingGif} alt="Cargando" className="loader-gif" />Actualizado a la version {newData.version}</div>
      <div className="right">
        <a href="https://wa.me/+51968700858" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
            alt="WhatsApp logo"
            className="logo"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;