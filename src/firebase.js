import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.api_key,
  authDomain: "sachu-just-clock-it.firebaseapp.com",
  databaseURL: "https://sachu-just-clock-it.firebaseio.com",
  projectId: "sachu-just-clock-it",
  storageBucket: "sachu-just-clock-it.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
