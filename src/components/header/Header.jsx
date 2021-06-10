import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.length;

  const getSubtotal = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return parseFloat(subtotal).toFixed(2);
  };

  return (
    <header>
      <div className="top-header">
        <div className="container">
          <nav>
            <Link to="/" className="navbar-brand">
              one <span> Store</span>
            </Link>
            <div className="navbar-nav">
              <Link to="/bag" className="bag">
                <div className="total">EGP {getSubtotal()}</div>

                <div className="bag-icon">
                  <i className="bx bx-shopping-bag"></i>
                  <span>{cartCount}</span>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bag">
                cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
