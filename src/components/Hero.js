import React, { useEffect } from 'react';
import { Container , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/product/productActions';

const Hero = () => {

  const dispatch = useDispatch();
  const name = localStorage.getItem("name");

  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch])

  return (
    <div>
        <Container className="m-auto mt-5">
            <h1 className='mt-5 text-center'>Hii {name}</h1>
            <h3 className='text-center'>Welcome to Anand Bakery</h3>
            <h6 className='text-center'>Get freshly baked cake and natural icecream</h6>
            <div className="btnContainer m-5 d-flex justify-content-around">
              <Link to='/cakes'><Button className="btnContainer m-auto">Buy Cakes</Button></Link>
              <Link to='/icecreams'><Button className="btnContainer m-auto">Buy Icecreams</Button></Link>
            </div>
        </Container>
    </div>
  );
}

export default Hero