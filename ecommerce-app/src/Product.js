import React, { useState, useEffect } from "react";
import ProductInformation from "./ProductInformation";
import { Link } from "react-router-dom";
import ViewCart from "./ViewCart"; // Import ViewCart component

function Product() {
  const [products, setProducts] = useState([]);
  const [summary, setSummary] = useState({ items: [] });
  const [showCart, setShowCart] = useState(false); // State to manage cart visibility

  const productList = [
    {
      id: 1,
      name: "T-shirt",
      price: 20.99,
      description: "Apparel"
    },
    {
      id: 2,
      name: "Jeans",
      price: 39.99,
      description: "Apparel"
    },
    {
      id: 3,
      name: "Sneakers",
      price: 59.99,
      description: "Footwear"
    },
    {
      id: 4,
      name: "Backpack",
      price: 29.99,
      description: "Accessories"
    },
    {
      id: 5,
      name: "Dress",
      price: 39.99,
      description: "Apparel"
    },
    {
      id: 6,
      name: "Longsleeve",
      price: 39.99,
      description: "Apparel"
    },
    {
      id: 7,
      name: "Jacket",
      price: 39.99,
      description: "Apparel"
    },
    {
      id: 8,
      name: "Sandals",
      price: 19.99,
      description: "Footwear"
    },
    {
      id: 9,
      name: "Skirts",
      price: 29.99,
      description: "Apparel"
    },
    {
      id: 10,
      name: "Black Shoes",
      price: 29.99,
      description: "Footwear"
    },
  ];


  useEffect(() => setProducts(productList), []);

  function addToSummary(item) {
    setSummary(prevSummary => ({
      items: [...prevSummary.items, item]
    }));
  }

  function removeFromCart(index) {
    setSummary(prevSummary => ({
      items: prevSummary.items.filter((_, i) => i !== index)
    }));
  }

  return (
    <div>
        <div className="text-center">
        <button style={{width:"200px", fontSize:"24px"}} className="btn btn-secondary btn-lg m-5" onClick={() => setShowCart(!showCart)}>My Cart</button> {/* Toggle cart visibility */}
        </div>  
        {showCart && <ViewCart items={summary.items} removeFromCart={removeFromCart} />} {/* Render ViewCart if showCart is true */}
        <div className="d-flex flex-wrap"> {/* Use flex-wrap to wrap items */}
        {products.map(item => (
            <div key={item.id} className="flex-grow-1" style={{ flexBasis: "50%" }}> {/* Set flex-basis to 33.33% for three columns per row */}
            <ProductInformation {...item} addToSummary={addToSummary} />
            </div>
        ))}
        </div>
    </div>
  );
}

export default Product;
