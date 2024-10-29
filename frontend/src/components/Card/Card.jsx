import "./Card.css";

export default function Card({title, description, price}){
  return(
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  )
}
