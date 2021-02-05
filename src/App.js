import './App.css';
import Header from './elements/Header'
import Button from './elements/Header'
import ChatRoom from './components/ChatRoom'

import { useAuthState } from 'react-firebase-hooks/auth'

import { fb, auth } from './services/firestore'

function App() {

  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <Header>
        <h1>FamChat "probably the best chat" - Juhee Kim (2021)</h1>
        {user ? <SignOut /> : null}
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
    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}