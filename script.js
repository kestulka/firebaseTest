// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAfmmMdtySxnVaop3bJabuvWOmnvcspNZ4",
  authDomain: "testukas-dc8f3.firebaseapp.com",
  projectId: "testukas-dc8f3",
  storageBucket: "testukas-dc8f3.appspot.com",
  messagingSenderId: "72825729739",
  appId: "1:72825729739:web:455929d4e9e44ea645e14e",
  measurementId: "G-VYQWB3SEW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
