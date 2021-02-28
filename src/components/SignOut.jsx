import Button from './../elements/Button'
import { auth } from './../services/firestore'


export default function SignOut() {
  return auth.currentUser && (
    <Button onClick={() => auth.signOut()}>Sign Out</Button>
  )
}