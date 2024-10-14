import {initializeApp} from 'firebase/app'
import  {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDw8MkRq0dMBg5yp-ZC0ev11WESrwkPdLg",
    authDomain: "formdraco.firebaseapp.com",
    projectId: "formdraco",
    storageBucket: "formdraco.appspot.com",
    messagingSenderId: "915639090045",
    appId: "1:915639090045:web:1fe007fe67f969171eaa14",
    measurementId: "G-2C57LGZWYB"
  };

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export {db}