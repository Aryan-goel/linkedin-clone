import firebase from "firebase";
import 'firebase/firestore';
//import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAiVK9GZc8rK_3MQv9_fmRp3Y_yhhJw9aA",
  authDomain: "linkedin-clone-f6c90.firebaseapp.com",
  projectId: "linkedin-clone-f6c90",
  storageBucket: "linkedin-clone-f6c90.appspot.com",
  messagingSenderId: "1091433972546",
  appId: "1:1091433972546:web:246d3f2c19468c37a7fedb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth,provider,storage};
export default db;
