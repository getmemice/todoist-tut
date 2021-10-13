import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA7JVqtyS6D3yruWNhbebrQqOGi1akclP8",
    authDomain: "todoist-tut-79520.firebaseapp.com",
    projectId: "todoist-tut-79520",
    storageBucket: "todoist-tut-79520.appspot.com",
    messagingSenderId: "1011097822073",
    appId: "1:1011097822073:web:63ff5b1a595c91396dc5a8"
})

export { firebaseConfig as firebase }
