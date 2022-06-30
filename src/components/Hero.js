import React from 'react';
import { Container , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        <Container className="m-auto mt-5">
            <h1 className='mt-5 text-center'>Welcome to Anand Bakery</h1>
            <h6 className='text-center'>Get freshly baked cake and natural icecream</h6>
            <div className="btnContainer m-5 d-flex justify-content-around">
              <Link to='/icecreams'><Button className="btnContainer m-auto">Buy Icecreams</Button></Link>
              <Link to='/cakes'><Button className="btnContainer m-auto">Buy Cakes</Button></Link>
            </div>
        </Container>
    </div>
  );
}

export default Hero