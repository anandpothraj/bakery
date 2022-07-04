import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Spinner, Container } from "react-bootstrap";
import { useSelector , useDispatch } from 'react-redux';
import AddressModal from "../components/AddressModal";
import List from "../components/List";
import { placeOrder } from "../redux/cart/cartActions";
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [total, setTotal] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cart = useSelector( state => state.cart.cart);
    const userLoggedIn = useSelector( state => state.user.loggedIn);

    useEffect(() => {
      if(userLoggedIn === false){
        navigate("/");
      }
      setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    }, [cart,userLoggedIn,dispatch,navigate]);

    const checkOut = () => {
      dispatch(placeOrder());
      setShow(false);
      toast.success("Order Placed Successfully !!!");
      setTimeout(() => {
        navigate("/congrats");
      }, 2000);
    }

  return (
    <>
      <ToastContainer/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Fill Personal Address Form</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddressModal/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>cancel Order</Button>
          <Button variant="success" onClick={checkOut}>Agree Place Order</Button>
        </Modal.Footer>
      </Modal>
    <div className="home">
      <div className="productContainer">
        {
          cart.length === 0 ?
          <>
            <Container className="d-flex flex-column">
              <Spinner animation='border' size='lg' className='m-auto' style={{ width: "10rem", height: "10rem" }} /> 
              <h4 className="text-center mt-5" >Redirecting....</h4>           
            </Container>
          </>
          :
          <List cart={cart}/>
        }
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>
          Proceed to Checkout
        </Button>
      </div>
      </div>
    </>
  );
};

export default Cart;