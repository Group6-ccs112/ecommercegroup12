// App.js
import React, { useState } from "react";
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
          <h1> Welcome to Our Apparel Shop Website!</h1>
          <p className="text-center me-5 ms-5 fs-4">"Welcome to our apparel shop! Step into a world where style meets comfort, and where you can find the perfect outfit for any occasion. Whether you're looking for casual wear for everyday adventures or sophisticated attire for special events, we have something for everyone. Explore our curated selection of high-quality garments, designed to elevate your wardrobe and reflect your unique sense of fashion. With a focus on both style and sustainability, we strive to offer clothing that not only looks good but also feels good to wear. Our knowledgeable staff is here to assist you in finding the perfect pieces to express your personal style. Come on in and discover your next favorite outfit!"</p>
          <div className="mt-5">
            <Link to="/products" className="btn btn-primary btn-lg border" style={{fontSize: "40px"}}>Proceed to Shopping</Link>
          </div>
      </div>
    </>
  );
}

function App() {
  const [summary, setSummary] = useState({ items: [] });
  return (
    <Router>
      <div>
        <header className="bg-info d-flex justify-content-between align-items-center">
          <Link to="/"><img width={100} src={logo} alt="Company Logo" className="m-3"/></Link>
          <nav className="d-flex justify-content-between align-items-center me-5 text-decoration-none">
            <ul className="list-unstyled text-decoration-none d-flex fs-2 fw-bold">
              <li className="me-4"><Link to="/">Home</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product summary={summary} setSummary={setSummary} />} />
          <Route path="/cart" element={<ViewCart summary={summary} setSummary={setSummary} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
