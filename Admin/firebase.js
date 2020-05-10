import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage"
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAnfD9rwyDfT7FToySvYxukautWWJ-Y36k",
  authDomain: "dingo-2314.firebaseapp.com",
  databaseURL: "https://dingo-2314.firebaseio.com",
  projectId: "dingo-2314",
  storageBucket: "dingo-2314.appspot.com",
  messagingSenderId: "200666974505",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
const storage= firebase.storage();
export {firebase, auth, storage } ;
