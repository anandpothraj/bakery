import React from "react";
import { Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import {  useDispatch } from 'react-redux';
import { changeCartQuantity, removeFromCart } from '../redux/cart/cartActions';

const List = ({cart}) => {

    const dispatch = useDispatch();
  return (
    <>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.img} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}.</Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) => {
                      dispatch(changeCartQuantity({id: prod.id,qty: e.target.value}));
                    }}
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => dispatch(removeFromCart(prod))}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
    </>
  )
}

export default List;