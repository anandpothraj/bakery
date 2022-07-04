import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart , removeFromCart } from '../redux/cart/cartActions';
import { decreaseProd, increaseProd } from '../redux/product/productActions';


const SingleProduct = ({ prod }) => {

  const dispatch = useDispatch();
  const cart = useSelector( state => state.cart.cart);
  
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top"  src={prod.img} alt={prod.name}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <p>Stock {prod.inStock} qty.</p>
            <span>₹ {prod.price}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={()=>{
                dispatch(increaseProd({id: prod.id,qty: 1}))
                dispatch(removeFromCart(prod))
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
            onClick={()=> {
              dispatch(decreaseProd({id: prod.id,qty: 1}))
              dispatch(addToCart(prod))
            }}
              disabled={prod.inStock === 0}
            >
              {prod.inStock === 0 ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;