import './App.css';
import Header from './components/Header'
import Button from './elements/Button'
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'

import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from './services/firestore'

export default function App() {

  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <Header user={user} />

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


