import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`products/${product.id}`} className="card">
      <div className="card-img">
        <img src={product.image} alt="card" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <span>EGP {product.price}</span>
      </div>
    </Link>
  );
};

export default Card;
