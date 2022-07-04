import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Icecreams from './pages/Icecreams';
import Cart from './pages/Cart';
import Header from './components/Header';
import Congrats from './pages/Congrats';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/cakes' element={<Cakes/>} exact/>
          <Route path='/icecreams' element={<Icecreams/>} exact/>
          <Route path='/cart' element={<Cart/>} exact/>
          <Route path='/congrats' element={<Congrats/>} exact/>
        </Routes>
      </Router>
     </Provider>
  )
};

export default App;