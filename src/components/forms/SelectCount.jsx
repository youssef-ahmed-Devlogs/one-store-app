import React from "react";
import { useDispatch } from "react-redux";
import { selectFromCart, setQuantity } from "../../redux/actions/actions";
import "./selectCount.css";

const SelectCount = ({ itemQuantity, id }) => {
  const dispatch = useDispatch();

  const handelQuantity = ({ target }) => {
    const value = parseInt(target.value);
    dispatch(setQuantity(value));
    dispatch(selectFromCart(id, value));
  };

  return (
    <select
      className="select-count"
      onChange={handelQuantity}
      defaultValue={itemQuantity}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  );
};

export default SelectCount;
