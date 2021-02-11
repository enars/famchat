import './App.css';
import Header from './elements/Header'
import ChatRoom from './ChatRoom'

import { useAuthState } from 'react-firebase-hooks/auth'

import { fb, auth } from './services/firestore'

function App() {

  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <Header>
        <h1>FamChat "probably the best chat" - Juhee Kim (2021)</h1>
      </Header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
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