import './App.css';
import Header from './components/Header'
import ChatRoom from './ChatRoom'

import { useAuthState } from 'react-firebase-hooks/auth'

import { fb, firestore, auth } from './services/firestore'

function App() {

  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <Header>
      </Header>

      <section>
        {user ? <ChatRoom props={fb, auth, firestore} /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new fb.auth.GoogleAuthProvider()
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