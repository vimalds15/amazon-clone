import { FiberPinRounded } from "@material-ui/icons";
import firebase  from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDz3rJvN2NMuBD-md4ymChsaQC0bJ5q0xs",
    authDomain: "ecommerce-ed61b.firebaseapp.com",
    projectId: "ecommerce-ed61b",
    storageBucket: "ecommerce-ed61b.appspot.com",
    messagingSenderId: "834960567574",
    appId: "1:834960567574:web:49c136df25dce6afb67437",
    measurementId: "G-JYKYTJC7T1",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };