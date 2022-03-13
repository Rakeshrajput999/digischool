import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC47g_DuInIvUUFMpoi0ielQ2TKOYurxCY",
  authDomain: "digischool-7f84a.firebaseapp.com",
  projectId: "digischool-7f84a",
  storageBucket: "digischool-7f84a.appspot.com",
  messagingSenderId: "258406926597",
  appId: "1:258406926597:web:d7fbcbd2abef92ff66cf6c",
  measurementId: "G-DTPCTSGMFK",
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 