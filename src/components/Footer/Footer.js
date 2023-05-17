
import React from "react";
import "./Footer.css";

import { auth } from "../../authentication/firebase"

function Footer({ version }) {

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log('Signed Out');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <footer className="footer">
      <div className="center"><button onClick={handleSignOut} className="btn btn-danger LogOut">
        <p>Cerrar sesión</p>
    </button></div>
      
      <div className="left">Actualizado a la version {version}</div>
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