import React, { useState, useEffect } from "react";
import ProductInformation from "./ProductInformation";
import { Link } from "react-router-dom";
import ViewCart from "./ViewCart"; // Import ViewCart component

function Product({summary, setSummary}) {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
        <h1 className="text-center m-5 p-5">Purchase the apparel that suits you best.<br></br> Add to Cart Now!</h1>
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
