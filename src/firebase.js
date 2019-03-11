import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAO8JkH3T_-Ep75f1WRZVyQq2o1jyzpigs",
  authDomain: "react-slack-clone-cbdc8.firebaseapp.com",
  databaseURL: "https://react-slack-clone-cbdc8.firebaseio.com",
  projectId: "react-slack-clone-cbdc8",
  storageBucket: "react-slack-clone-cbdc8.appspot.com",
  messagingSenderId: "654671405148"
};
firebase.initializeApp(config);

export default firebase;
