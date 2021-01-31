import React from 'react';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyAXxkT7-IxiOu9kCTn2t_zh9G7zxSE7N0g",
  authDomain: "famchat-1b730.firebaseapp.com",
  projectId: "famchat-1b730",
  storageBucket: "famchat-1b730.appspot.com",
  messagingSenderId: "269547626653",
  appId: "1:269547626653:web:72ac2145a59faf22edf474"
})

const auth = firebase.auth()
const firestore = firestore.firestore()

function App() {

  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id'})
  
  return(
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>

  )
}

function ChatMessage(props) {
  const {text, uid} = props.message

  return <p>{text}</p>
}


