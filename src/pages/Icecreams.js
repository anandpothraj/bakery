import React from 'react';
import { Container , Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from '../redux/icecream/icecreamActions';

const Icecreams = () => {

  const dispatch = useDispatch();
  const numOfIcecream = useSelector(state => state.icecream.numOfIcecream);

  return (
    <div>
      <Container>
        <h1>No of icecream in Store : {numOfIcecream}</h1>
        {
          numOfIcecream === 0 ?
            <Button onClick={()=>{dispatch(buyIcecream(1))}} disabled>Buy Icecreams</Button>
          :
            <Button onClick={()=>{dispatch(buyIcecream(1))}}>Buy Icecreams</Button>
        }
      </Container>
    </div>
  )
}

export default Icecreams;