import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setProduct,
  setQuantity,
} from "../../redux/actions/actions";
import { fetchProduct } from "../../apis/apis";
import "./productDetails.css";
import SelectCount from "../../components/forms/SelectCount";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.product);
  const quantity = useSelector((state) => state.quantity);
  const product = [{ ...data }];

  useEffect(() => {
    fetchProduct(dispatch, setProduct, id);

    return () => {
      dispatch(setProduct({}));
      dispatch(setQuantity(1));
    };
  }, []);

  const handelAdd = () => {
    dispatch(addToCart(product[0], quantity));
  };

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-content">
          <div className="product-img">
            <img src={product[0].image} alt="product" />
          </div>
          <div className="product-info">
            <h1>{product[0].title}</h1>
            <div className="price">EGP {product[0].price}</div>
            <div className="product-actions">
              <SelectCount itemQuantity={1} />
              <button onClick={handelAdd}>Add to bag</button>
            </div>
            <p>{product[0].description}</p>
            <div className="category">{product[0].category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
