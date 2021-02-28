import styled from 'styled-components'
import SignOut from './SignOut'

const Nav = styled.nav`
  width: 100vw;
  position: fixed;
  padding: 10px;
  background-color: lightgreen;

    & > ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > li {
      display: inline;
    }
`

export default function Header(props) {
  return (
    <>
    <header>
      <Nav>
        <ul>
          <h1>FamChat</h1>
          <li>{ props.user ? <SignOut /> : null }</li>
        </ul>
      </Nav>
    </header>
    </>
  )

}
