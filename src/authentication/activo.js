import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("Usuario ACTIVO")
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
    console.log("Usuario DESACTIVO")
  }
});
