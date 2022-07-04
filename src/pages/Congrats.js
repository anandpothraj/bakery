import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Container } from 'react-bootstrap';


const Congrats = () => {

  const userLoggedIn = useSelector( state => state.user.loggedIn);
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  useEffect(() => {
    if(userLoggedIn === false){
      navigate("/");
    }
  },[userLoggedIn,navigate])

  return (
    <>
        <Container className="mx-auto my-5 w-75 d-flex flex-column">
            <h2 className='text-center mt-5'>Congratulations your order has been placed successfully..</h2>
            <h2 className='text-center mb-3'>and it will be delivered soon.</h2>
            <h6 className="text-center ">Thanks, {name} to do shopping with us.</h6>
            <Link to='/' className='m-auto'>
                <Button size="sm" className='mx-auto my-4'>Continue shopping</Button>
            </Link>
        </Container>
    </>
  )
}

export default Congrats;