import React from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Card from "./Card";
import "./cards.css";

const Cards = () => {
  //
  const products = useSelector((state) => state.products.products);
  const gridSize = useSelector((state) => state.gridSize.gridSize);
  const category = useSelector((state) => state.selected.selected);

  const displayProducts = () => {
    const display = products.map((product) => (
      <Card key={product.id} product={product} />
    ));
    return display;
  };

  return (
    <div className="cards">
      <h2 className="section-title">
        {category === "all" ? "All Products" : category}{" "}
      </h2>
      {
        <div
          className={
            gridSize === "large"
              ? "cards-content grid-large"
              : "cards-content grid-small"
          }
        >
          {products.length !== 0 && displayProducts()}
        </div>
      }
      {products.length === 0 && <Loading />}
    </div>
  );
};

export default Cards;
