import { useState, useRef } from 'react'
import ChatMessage from './ChatMessage'
import MessageForm from '../elements/MessageForm'
import Button from './../elements/Button'
import Input from './../elements/Input'

import { useCollectionData } from 'react-firebase-hooks/firestore'

import { fb, firestore, auth } from '../services/firestore'

export default function ChatRoom() {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(50)
  const [messages] = useCollectionData(query, {idField: 'id'})

  const [formValue, setFormValue] = useState('')
  const [isInvalidMessage, setIsInvalidMessage] = useState(true)
  
  const dummy = useRef()

  // Update state and check input
  const handleFormUpdate = (input) => {
    setFormValue(input)
    setIsInvalidMessage(formValue.trim() ? false : true)      
  }

  const sendMessage = async(e) => {
    e.preventDefault()

    const {displayName, uid, photoURL} = auth.currentUser 

    await messagesRef.add({
      sender: displayName,
      text: formValue,
      createdAt: fb.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('')

    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      
        <div ref={dummy}></div>
      </main>

      <MessageForm onSubmit={sendMessage}>
        <Input value={formValue} onChange={(e) => handleFormUpdate(e.target.value) } />
        
        <Button disabled={isInvalidMessage} type="submit">Send</Button>
      </MessageForm>
    </>
  )
}