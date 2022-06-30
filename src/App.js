import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Icecreams from './pages/Icecreams';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/cakes' element={<Cakes/>} exact/>
          <Route path='/icecreams' element={<Icecreams/>} exact/>
        </Routes>
        <Footer/>
      </Router>
     </Provider>
  )
};

export default App;