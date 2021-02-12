import styled from 'styled-components'
import Button from './../elements/Button'
import { fb, auth } from './../services/firestore'

const SignInContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`
const SignInForm = styled.div`
  height: 300px;
  width: 90vw;
  border-radius: 15px;
  background: #363636;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  padding: 15px;
`


export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new fb.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <SignInContent>
      <SignInForm>
        <h2>Welcome to FamChat</h2>
        <span>You have been invited to join the group</span>
        <span>Familjen</span>
        <p>Fun fact: Famchat is recognized as the greatest app in the world by most of its users</p>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </SignInForm>
    </SignInContent>
  )
}
