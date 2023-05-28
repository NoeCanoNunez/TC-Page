    // Import the functions you need from the SDKs you need
    import { initializeApp } from  'firebase/app';
    import { getAuth } from  "firebase/auth";

    

    const firebaseConfig = {
      apiKey: "AIzaSyAhzWqOjH7oZHPWBt48lsW-xXjOq81EBLQ",
      authDomain: "projectauthtenloclaro.firebaseapp.com",
      projectId: "projectauthtenloclaro",
      storageBucket: "projectauthtenloclaro.appspot.com",
      messagingSenderId: "307505070994",
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    