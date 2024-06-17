import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA60HC9tgMugQYvGHdnlLmsp-D96MGbDAo",
    authDomain: "imabisabase.firebaseapp.com",
    projectId: "imabisabase",
    storageBucket: "imabisabase.appspot.com",
    messagingSenderId: "92097832767",
    appId: "1:92097832767:web:00d7dfc5c4711ca403558a"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
