import Button from '../elements/Button'

import { fb, auth } from '../services/firestore'

export default function SignIn() {
    const signInWithGoogle = () => {
      const provider = new fb.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
    }
  
    return (
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    )
  }