import React, {useState, useEffect} from 'react';
import './Auth.css';

//Auth
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../authentication/firebase"

//Img
import logoGoogle from "../../img/google-logo.svg"

const Auth = () => {

    const handleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
          console.log(result)
        }).catch((error) => {
          console.log(error)
        });
      };


  return (
    <div className="auth-container"> 
      <h2 className='Bienvenido' >BIENVENIDO</h2>
      <h2 className='Iniciar' >Iniciar sesión con Gmail</h2>
      <button onClick={handleSignIn} className="auth-button">
        <img className="logoGoogle" src={logoGoogle} alt="logoGoogle" />Continuar con Google
      </button>
      <span className="spectrum-ActionButton-label">© Todos los Derechos Reservados</span>

    </div>
  );
};

export default Auth;

