import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCY0N4Yb1HEEF3oXK6swidmOrI7ECGdEp4",
    authDomain: "podpal-79109.firebaseapp.com",
    projectId: "podpal-79109",
    storageBucket: "podpal-79109.appspot.com",
    messagingSenderId: "443215836589",
    appId: "1:443215836589:web:c1cc840fa7bd6d1f151d24",
    measurementId: "G-842JM1YB1V",
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database =  getFirestore(firebaseApp);

  export default database;


