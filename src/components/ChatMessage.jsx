import './../App.css';
import styled from 'styled-components'

import { auth } from './../services/firestore'

const MessageGroup = styled.div`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Name = styled.div`
`

const SpeechBubble = styled.div`
`
const Text = styled.p`
  padding: 10px;
  background-color: beige;
  color: black;
  word-break: break-all;
  border-radius: 5px;
`

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 2rem;
`



export default function ChatMessage(props) {

  const {sender, text, uid, photoURL} = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
    <MessageGroup className={`message ${messageClass}`}>
      <ProfilePicture alt='Profile picture' src={photoURL}></ProfilePicture>
      <SpeechBubble>
        <Name>{sender ? sender : 'Ejnar'}</Name>
        <Text>{text}</Text>
      </SpeechBubble>
    </MessageGroup>
  ) 
}