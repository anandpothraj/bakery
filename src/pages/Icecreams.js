import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SingleProduct from '../components/SingleContainer';
import '../components/style.css';
import { fetchIcecreams } from '../redux/icecream/icecreamActions';
import { fetchProducts } from '../redux/product/productActions';

const Icecreams = () => {

  const userLoggedIn = useSelector( state => state.user.loggedIn);
  const icecreamData = useSelector( state => state.icecream.icecreamData);
  const loading = useSelector( state => state.icecream.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIcecreams());
    if(userLoggedIn === false){
      navigate("/");
    }
    dispatch(fetchProducts());
  },[userLoggedIn,navigate,icecreamData,dispatch])

  return (
    <>
      <div className="home">
        <div className="productContainer">
          {
            !loading && icecreamData && icecreamData.map((prod) => (
              <SingleProduct prod={prod} key={prod.id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Icecreams;