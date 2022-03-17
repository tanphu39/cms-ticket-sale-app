// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAH5Xbs_asYDmZtf1nRPR4SagYbQ_tgdQ",
    authDomain: "cms-ticket-sale-ccab9.firebaseapp.com",
    projectId: "cms-ticket-sale-ccab9",
    storageBucket: "cms-ticket-sale-ccab9.appspot.com",
    messagingSenderId: "20457497006",
    appId: "1:20457497006:web:44f1dd466a258c3a68e83f",
    measurementId: "G-XNKDEGFWY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
// const analytics = getAnalytics(app);