/* eslint-disable no-unused-vars */

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Home from './pages/home';
import HeadphonesPage from './pages/headphonespage';
import SpeakersPage from './pages/speakerspage';
import EarphonesPage from './pages/earphonespage';
import XX99Mark from './pages/products/headphones/xx99mark';

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
        </Routes>
      </Router>
      <Mission />
      <Footer />
    </>
  );
}

export default App;
