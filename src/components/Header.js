import "./style.css";
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { LogoutUser } from '../redux/user/userActions';
import { useSelector, useDispatch  } from 'react-redux/es/exports';
import { removeFromCart } from '../redux/cart/cartActions';
import { Nav, Navbar, Container, Button, Dropdown, Badge } from 'react-bootstrap';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoggedIn = useSelector( state => state.user.loggedIn);
  const cart = useSelector( state => state.cart.cart);


  const logOut = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("img");
    localStorage.setItem("loggedIn",false);
    dispatch(LogoutUser())
  }

  useEffect(() => { },[userLoggedIn])

  const goToCart = () => {
    navigate('/cart')
  }

  return (
    <>
        <Navbar bg="dark" expand="lg" >
            <Container>
                <Navbar.Brand className="text-light">
                  <Link className="text-light nav-link" to='/'>E-shop</Link>
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
                      <Link className="text-light nav-link" to="/profile" >Profile</Link>
                    </>
                    : 
                    <>
                      <Link className="text-light nav-link" to='/'>Home</Link>
                    </>
                    
                  }
                </Nav>

                {
                  userLoggedIn ?
                  <>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" className='m-2' id="dropdown-autoclose-true">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge bg="success" >{cart.length}</Badge>
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ minWidth: 370 }}>
                      {
                        cart.length > 0 ? 
                          (
                            <>
                              {cart.map((item) => (
                                  <span className="cartitem" key={item.id} >
                                  <img
                                    src={item.img}
                                    className="cartItemImg"
                                    alt={item.name}
                                  />
                                  <div className="cartItemDetail">
                                    <span>{item.name}</span>
                                    <span>₹ {item.price}.</span>
                                  </div>
                                  <AiFillDelete
                                    fontSize="20px"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dispatch(removeFromCart(item))}
                                  />
                                </span>
                              ))}
                              <Dropdown.Item>
                                <Button style={{ width: "95%", margin: "0 10px" }} onClick={goToCart}>
                                  Go To Cart
                                </Button>
                              </Dropdown.Item>
                            </>
                          ) 
                          : 
                          (
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                          )}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button onClick={logOut}>Logout</Button>
                  </>
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