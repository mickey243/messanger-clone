import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCpeQN3kAk5fEOq8JBz_7c4lo9gr-Ct58M",
  authDomain: "messanger-83b71.firebaseapp.com",
  projectId: "messanger-83b71",
  storageBucket: "messanger-83b71.appspot.com",
  messagingSenderId: "209713809901",
  appId: "1:209713809901:web:661409f5ca6ea659cc3fe4"
};
// Initialize Firebase
const data = firebase.initializeApp(firebaseConfig);
const db = data.firestore();
export default db;