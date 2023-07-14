import React, { useState, useEffect } from 'react';
import './Auth.css';

// Auth
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../authentication/firebase";

// Img
import logoGoogle from "../../img/google-logo.svg";

// Gif
import loadingGif from "../../img/loading.gif";


const Auth = ({ funcionSetterAuth }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario ya está logueado
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        // El usuario no está logueado
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("el resultado es", result);
      })
      .catch((error) => {
        funcionSetterAuth(error);
        console.log("ocurrió un error de acceso:", error);
      });
  };

  if (isLoading) {
    // Muestra el loader mientras se verifica el estado de autenticación
    return (
      <div className="auth-container">
        <img src={loadingGif} alt="Cargando" className="loader-gif" />
        {/* <span className="loader-text">Espere por favor...</span> */}
      </div>
    );
  }

  if (isLoggedIn) {
    // Si el usuario está logueado, no muestra el componente de autenticación
    return null;
  }

  return (
    <div className="auth-container">
      <h2 className="Bienvenido">BIENVENIDO</h2>
      <h2 className="Iniciar">Iniciar sesión con Gmail</h2>
      <button onClick={handleSignIn} className="auth-button">
        <img className="logoGoogle" src={logoGoogle} alt="logoGoogle" />
        Continuar con Google
      </button>
      <span className="spectrum-ActionButton-label">© Todos los Derechos Reservados</span>
    </div>
  );
};

export default Auth;
