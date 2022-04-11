// Import the functions you need from the SDKs you need
import {dataProps, packageProps} from '../interfaces/dataTypes'
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDocs, getDoc, query, orderBy, limit, collection} from 'firebase/firestore';
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

const ticketRef = collection(db, "ticket");
const packageRef = collection(db, "package");


export const getData = async() => {
        const docRef = doc(db, "ticket", "1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log(docSnap.data());
            return docSnap.data().type;
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
        }
}


export const getDataPage = async() => {
    const q = query(ticketRef, orderBy("number"));
    const querySnapshot = await getDocs(q);
        let res: dataProps[] = []
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        res.push(doc.data() as dataProps);
    });
    // console.log(res);
    return res;
}

export const getPackagePage = async() => {
    const q = query(packageRef, orderBy("code"));
    const querySnapshot = await getDocs(q);
        let res: packageProps[] = []
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        res.push(doc.data() as packageProps);
    });
    // console.log(res);
    return res;
}



// const analytics = getAnalytics(app);