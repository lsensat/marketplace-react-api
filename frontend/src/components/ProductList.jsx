import { useState, useEffect } from 'react';

export default function Products(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try{
        const response = await fetch('http://localhost:3000/api/v1/products',{
          method: 'GET',
          mode: 'no-cors'
        });

        if(!response.ok){
          throw new Error("Could not retreive products")
        }

        const resData = await response.json();
        setProducts(resData);
        console.log(resData)
        setLoading(false);
      } catch(error){
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
      <ul>
        <li>
          {products.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </li>
      </ul>
    </div>
  )
}
