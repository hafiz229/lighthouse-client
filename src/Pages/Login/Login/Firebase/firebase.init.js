import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
