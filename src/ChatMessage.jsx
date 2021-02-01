import styled from 'styled-components'

import { auth } from './services/firestore'

const Message = styled.div`
  border: solid 1px white;
  border-radius: 10px;
  padding: 10px;
  width: 60%;
  display: flex;
  justify-content: left;

  .received {
    color: red;
  }

`


const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 5vw;
  margin-right: 2vw;
`



export default function ChatMessage(props) {
  const {text, uid, photoURL} = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
  <Message className={`message ${messageClass}`}>
    <ProfilePicture alt='' src={photoURL}></ProfilePicture>
    <p>{text}</p>
    
  </Message>
  ) 
}