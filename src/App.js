import './App.css';
// Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { About } from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-2 ">
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;