import React from "react";
import Categories from "../forms/Categories";
import { useDispatch, useSelector } from "react-redux";
import "./productsOptions.css";
import {
  setGridSizeToSmall,
  setGridSizeToLarge,
} from "../../redux/actions/actions";

const ProductsOptions = () => {
  const gridSize = useSelector((state) => state.gridSize.gridSize);
  const dispatch = useDispatch();

  const gridSmall = () => {
    dispatch(setGridSizeToSmall());
  };

  const gridLarge = () => {
    dispatch(setGridSizeToLarge());
  };

  return (
    <div className="products-options">
      <div className="grid-icons">
        <i
          className={
            gridSize === "small"
              ? "bx bx-grid-vertical on"
              : "bx bx-grid-vertical"
          }
          onClick={gridSmall}
        ></i>
        <i
          className={gridSize === "large" ? "bx bxs-grid on" : "bx bxs-grid"}
          onClick={gridLarge}
        ></i>
      </div>
      <Categories />
    </div>
  );
};

export default ProductsOptions;
