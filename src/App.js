import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import AboutWheat from './components/Pages/AboutWheat';
import AboutMaize from './components/Pages/AboutMaize';
import AboutGroundnut from './components/Pages/AboutGroundnut';
import AboutCotton from './components/Pages/AboutCotton';
import AboutSugercane from './components/Pages/AboutSugercane';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/wheat' exact element={<AboutWheat />} />
          <Route path='/maize' exact element={<AboutMaize />} />
          <Route path='/cotton' exact element={<AboutCotton />} />
          <Route path='/groundnut' exact element={<AboutGroundnut />} />
          <Route path='/sugercane' exact element={<AboutSugercane />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;