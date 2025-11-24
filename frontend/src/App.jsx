import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Products from './components/products/Product';
import Offers from './components/offers/Offers';
import About from './components/about/About';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;