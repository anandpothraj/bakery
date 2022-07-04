import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SingleProduct from '../components/SingleContainer';
import '../components/style.css';
import { fetchCakes } from '../redux/cake/cakeActions';
import { fetchProducts } from '../redux/product/productActions';

const Cakes = () => {

  const userLoggedIn = useSelector( state => state.user.loggedIn);
  const cakeData = useSelector( state => state.cake.cakeData);
  const loading = useSelector( state => state.cake.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCakes());
    if(userLoggedIn === false){
      navigate("/");
    }
    dispatch(fetchProducts());
  },[userLoggedIn,navigate,cakeData,dispatch])

  return (
    <>
      <div className="home">
        <div className="productContainer">
          {
            !loading && cakeData && cakeData.map((prod) => (
              <SingleProduct prod={prod} key={prod.id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cakes;