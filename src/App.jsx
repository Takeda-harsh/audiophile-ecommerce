/* eslint-disable no-unused-vars */

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Home from './pages/home';
import HeadphonesPage from './pages/headphonespage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphonespage" element={<HeadphonesPage />} />
        </Routes>
      </Router>
      <Mission />
      <Footer />
    </>
  );
}

export default App;
