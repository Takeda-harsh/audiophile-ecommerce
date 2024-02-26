/* eslint-disable no-unused-vars */

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Home from './pages/home';
import CartOverlay from './components/CartOverlay';
import HeadphonesPage from './pages/headphonespage';
import Checkout from './pages/checkout';
import OrderSummary from './components/OrderSummary';
import SpeakersPage from './pages/speakerspage';
import EarphonesPage from './pages/earphonespage';
import XX99Mark from './pages/products/headphones/xx99mark';
import XX99Mark1 from './pages/products/headphones/xx99mark1';
import XX59 from './pages/products/headphones/xx59';
import ZX9 from './pages/products/speakers/zx9';
import ZX7 from './pages/products/speakers/zx7';
import YX1 from './pages/products/earphones/yx1';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphonespage" element={<HeadphonesPage />} />
          <Route path="/speakerspage" element={<SpeakersPage />} />
          <Route path="/earphonespage" element={<EarphonesPage />} />
          <Route path="/xx99mark" element={<XX99Mark />} />
          <Route path="/xx99mark1" element={<XX99Mark1 />} />
          <Route path="/xx59" element={<XX59 />} />
          <Route path="/zx9" element={<ZX9 />} />
          <Route path="/zx7" element={<ZX7 />} />
          <Route path="/yx1" element={<YX1 />} />
          <Route path="/cartoverlay" element={<CartOverlay />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
        </Routes>
      </Router>
      <Mission />
      <Footer />
    </>
  );
}

export default App;
