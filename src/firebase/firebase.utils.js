import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBEHKkByICSH59lxtLnVBDy-XU5EacRkGk",
    authDomain: "recommerce-6dca1.firebaseapp.com",
    databaseURL: "https://recommerce-6dca1.firebaseio.com",
    projectId: "recommerce-6dca1",
    storageBucket: "recommerce-6dca1.appspot.com",
    messagingSenderId: "882143053643",
    appId: "1:882143053643:web:c6b6fc32577e558d544ace",
    measurementId: "G-DKHJ5VNXWK"
  };

firebase.initializeApp(config);
 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
