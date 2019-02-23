//package that mirrors to state
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFsibJxpAjQzye6C0QL9_ktCCEEaHieSQ",
    authDomain: "wedding-site-cf97d.firebaseapp.com",
    databaseURL: "https://wedding-site-cf97d.firebaseio.com",
    projectId: "wedding-site-cf97d",
    storageBucket: "wedding-site-cf97d.appspot.com",
    messagingSenderId: "554285340143"
});

//created the firebase binding
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
