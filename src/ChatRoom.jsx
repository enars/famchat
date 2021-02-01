import React, {useRef, useState} from 'react';
import ChatMessage from './ChatMessage'

import { useCollectionData } from 'react-firebase-hooks/firestore'

import { fb, firestore, auth } from './services/firestore'

export default function ChatRoom(props) {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id'})

  const dummy = useRef()

  const [formValue, setFormValue] = useState('')

  const sendMessage = async(e) => {
    e.preventDefault()

    const {uid, photoURL} = auth.currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: fb.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('')

    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }
  
  return(
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value) } />
        
        <button type="submit">send</button>
      </form>
    </>
  )
}