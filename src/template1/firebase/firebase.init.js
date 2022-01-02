import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializetion = () => initializeApp(firebaseConfig);

export default firebaseInitializetion;
