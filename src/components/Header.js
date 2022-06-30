import React, { useEffect } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch  } from 'react-redux/es/exports';
import { LogoutUser } from '../redux/user/userActions';
import { Link } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();
  const userLoggedIn = useSelector( state => state.user.loggedIn);

  useEffect(() => { },[userLoggedIn])

  return (
    <>
        <Navbar bg="dark" expand="lg" >
            <Container>
                <Navbar.Brand className="text-light">
                  <Link className="text-light nav-link" to='/'>HomAnand - bakery and icecreams</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {
                    userLoggedIn ? 
                    <>
                      <Link className="text-light nav-link" to='/'>Home</Link>
                      <Link className="text-light nav-link" to="/cakes ">Cake</Link>
                      <Link className="text-light nav-link" to="/icecreams" >Icecream</Link>
                    </>
                    : 
                    <>
                      <Link className="text-light nav-link" to='/'>Home</Link>
                    </>
                    
                  }
                </Nav>
                {
                  userLoggedIn ?
                  <Button onClick={()=>{dispatch(LogoutUser())}}>Logout</Button>
                  :
                  <Button>Sign Up</Button>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header