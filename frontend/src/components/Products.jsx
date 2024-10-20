export default function Products({products}){

  return(
    <li>
      <h1>{products.name}</h1>
      <p>{products.description}</p>
      <p>{products.price}</p>
    </li>
  )
}
