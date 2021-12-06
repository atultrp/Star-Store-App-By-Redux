import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="container mt-2 ">
        <Shop />
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;