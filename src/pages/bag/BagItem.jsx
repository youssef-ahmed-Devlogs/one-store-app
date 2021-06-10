import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SelectCount from "../../components/forms/SelectCount";
import { deleteFromCart } from "../../redux/actions/actions";

const BagItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bag-item">
      <div className="bag-item-info">
        <Link to={`/products/${product.id}`} className="bag-imgae">
          <img src={product.image} alt="bag" />
        </Link>
        <div className="bag-item-info_desc">
          <h3>{product.title}</h3>
          <span>EGP {product.price}</span>
        </div>
      </div>
      <div className="bag-item-actions">
        <div
          className="delete-icon"
          onClick={() => dispatch(deleteFromCart(product.id))}
        >
          <i className="bx bx-trash"></i>
        </div>
        <SelectCount itemQuantity={product.quantity} id={product.id} />
      </div>
    </div>
  );
};

export default BagItem;
