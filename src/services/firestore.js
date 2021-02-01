import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyAXxkT7-IxiOu9kCTn2t_zh9G7zxSE7N0g",
    authDomain: "famchat-1b730.firebaseapp.com",
    projectId: "famchat-1b730",
    storageBucket: "famchat-1b730.appspot.com",
    messagingSenderId: "269547626653",
    appId: "1:269547626653:web:72ac2145a59faf22edf474"
  })
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const fb = firebase

export { fb, auth, firestore }
