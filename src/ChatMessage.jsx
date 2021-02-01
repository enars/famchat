import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { auth } from './services/firestore'

export default function ChatMessage(props) {
  const {text, uid, photoURL} = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
  <div className={`message ${messageClass}`}>
    <img alt='' src={photoURL}></img>
    <p>{text}</p>
    
  </div>
  ) 
}