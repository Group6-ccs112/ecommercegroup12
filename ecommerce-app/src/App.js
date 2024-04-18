// App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Product from "./Product";
import ViewCart from "./ViewCart";
import './App.css';
import logo from "./img/ecommerceLogo.png";

function Home() {
  return (
    <>    
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h1> Welcome to Our Ecommerce Website!</h1>
          <div className="mt-5">
            <Link to="/products" className="btn btn-primary btn-lg border" style={{fontSize: "40px"}}>Proceed to Shopping</Link>
          </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <header className="bg-info">
          <Link to="/"><img width={100} src={logo} alt="Company Logo" className="m-3"/></Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<ViewCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
