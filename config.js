import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6zaRlFcLaoJ3KzyZtLpjUIwcy8HIpV3k",
  authDomain: "story-hub-d8429.firebaseapp.com",
  projectId: "story-hub-d8429",
  storageBucket: "story-hub-d8429.appspot.com",
  messagingSenderId: "1006615435481",
  appId: "1:1006615435481:web:9269aa2216ae5d99a106c8"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   