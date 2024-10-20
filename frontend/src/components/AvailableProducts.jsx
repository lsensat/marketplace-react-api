import { useState, useEffect } from 'react';
import Products from "./Products.jsx";

export default function AvailableProducts(){

  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('http://localhost:3000/api/v1/products');
      const resData = await response.json();
      setAvailableProducts(resData.products);
    }

    fetchProducts();
  }, [])

  return(
    <Products
      products={availableProducts}
    />
  )

}
