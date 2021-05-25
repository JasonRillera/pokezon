import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDwNwrWdgYm1Q1JwH8jdHb_kpjjHcFSe-Q",
    authDomain: "clone-c78eb.firebaseapp.com",
    projectId: "clone-c78eb",
    storageBucket: "clone-c78eb.appspot.com",
    messagingSenderId: "6036275392",
    appId: "1:6036275392:web:5fe847d12c1114b9b56d25",
    measurementId: "G-N6NZG9JB6Q"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };