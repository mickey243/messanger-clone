import firebase from "firebase";
var firebaseConfig = {

};
// Initialize Firebase
const data = firebase.initializeApp(firebaseConfig);
const db = data.firestore();
export default db;
