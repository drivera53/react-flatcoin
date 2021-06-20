// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAOD8L2UAkXy750fA-TbTg6ArijGXDCrWE",
    authDomain: "react-flatcoin.firebaseapp.com",
    projectId: "react-flatcoin",
    storageBucket: "react-flatcoin.appspot.com",
    messagingSenderId: "1043718811939",
    appId: "1:1043718811939:web:b8117cc92031d604795c96",
    measurementId: "G-DTWH48LZFJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db }