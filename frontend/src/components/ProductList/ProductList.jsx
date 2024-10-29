import { useState, useEffect } from 'react';
import Card from "../Card/Card.jsx";

export default function Products(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try{
        const response = await fetch('http://localhost:3000/api/v1/products');

        if(!response.ok){
          throw new Error("Could not retreive products")
        }

        const resData = await response.json();
        setProducts(resData);

        setLoading(false);
      } catch(error){
        setError({message: error.message || "Could not retreive products"})
        setLoading(false);
      }
    }

    fetchProducts();
  }, [])

  if (loading) {
    return <div>Loading products...</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return(
    <div>
      <h2>Products</h2>
      <div className="product-card">
        {products.map(product => (
          <Card key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
