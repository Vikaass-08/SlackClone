import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAed4BoYzj2wnbOB_545fui6fYfdZ9OEXM",
  authDomain: "slack-clone-2f497.firebaseapp.com",
  projectId: "slack-clone-2f497",
  storageBucket: "slack-clone-2f497.appspot.com",
  messagingSenderId: "1083230089943",
  appId: "1:1083230089943:web:790014e6a80ee99d06b692",
  measurementId: "G-L2G5Y1SKME",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
