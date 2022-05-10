import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDnZKjXTq87GUaISd8leQRudMpW7vL5W4U",
  authDomain: "mvp-expense-tracker.firebaseapp.com",
  projectId: "mvp-expense-tracker",
  storageBucket: "mvp-expense-tracker.appspot.com",
  messagingSenderId: "125650866465",
  appId: "1:125650866465:web:d7c6cc2bce9a4e39cdae60",
  measurementId: "G-BM2CYHZ6CY"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);