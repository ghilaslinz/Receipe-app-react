
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDMa_eOAOiufh0q3XRZkpjm1M84_EMlslM",
    authDomain: "receipeapp-31419.firebaseapp.com",
    projectId: "receipeapp-31419",
    storageBucket: "receipeapp-31419.appspot.com",
    messagingSenderId: "850681167713",
    appId: "1:850681167713:web:adf115dd9a880ba9e90f20",
    measurementId: "G-G1BD3TVW0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
// const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth };