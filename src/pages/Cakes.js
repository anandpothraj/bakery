import React from 'react';
import { Container , Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const Cakes = () => {

  const dispatch = useDispatch();
  const numOfCakes = useSelector(state => state.cake.numOfCakes);

  return (
    <div>
      <Container>
        <h1>No of Cakes in Store : {numOfCakes}</h1>
        {
          numOfCakes === 0 ?
            <Button onClick={()=>{dispatch(buyCake(1))}} disabled>Buy Cakes</Button>
          :
            <Button onClick={()=>{dispatch(buyCake(1))}}>Buy Cakes</Button>
        }
      </Container>
    </div>
  )
}

export default Cakes;