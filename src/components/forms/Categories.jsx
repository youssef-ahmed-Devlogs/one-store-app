import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesProducts } from "../../apis/apis";
import { setProducts, setSelectedCategory } from "../../redux/actions/actions";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handelSelected = ({ target }) => {
    setSelected(target.value);
  };

  useEffect(() => {
    dispatch(setSelectedCategory(selected));
    fetchCategoriesProducts(dispatch, setProducts, selected);
  }, [selected]);

  return (
    <form className="categores">
      <select onChange={handelSelected}>
        <option value="all">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Categories;
