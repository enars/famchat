import './App.css';
import Header from './elements/Header'
import Button from './elements/Button'
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'

import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from './services/firestore'

function App() {

  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <Header>
        <h1>FamChat</h1>
        {user ? <SignOut /> : null}
      </Header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

function SignOut() {
  return auth.currentUser && (
    <Button onClick={() => auth.signOut()}>Sign Out</Button>
  )
}