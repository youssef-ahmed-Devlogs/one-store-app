import React from "react";
import BagItem from "./BagItem";
import "./bag.css";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../redux/actions/actions";

const Bag = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const displayCart = () => {
    const display = cart.map((item) => (
      <BagItem key={item.id} product={item} />
    ));
    return display;
  };

  const getSubtotal = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return parseFloat(subtotal).toFixed(2);
  };

  const total = parseFloat(getSubtotal()) + 50;

  const handelCheckout = () => {
    dispatch(checkout());
    alert("Purchased successfully ..");
  };

  return (
    <div className="bag">
      <div className="container">
        <h2 className="head">My Shopping Bag ({cart.length} Items)</h2>
        {cart.length > 0 && (
          <div className="bag-content">
            <div className="items">{displayCart()}</div>
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="checkout">
                <div className="subtotal flex">
                  <span className="checkout-head">Subtotal</span>
                  <span className="checkout-price">EGB {getSubtotal()}</span>
                </div>
                <div className="delivery flex">
                  <span className="checkout-head">Delivery</span>
                  <span className="checkout-price">EGB 50.00</span>
                </div>
                <div className="order-total flex">
                  <span className="checkout-head">Order Total</span>
                  <span className="checkout-price">EGB {total.toFixed(2)}</span>
                </div>
                <button className="checkout-btn" onClick={handelCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
