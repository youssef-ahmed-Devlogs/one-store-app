import axios from "axios";

export const fetchProducts = async (dispatch, setProducts) => {
  const res = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => console.log("ERR : ", err));

  dispatch(setProducts(res.data));
};

export const fetchProduct = async (dispatch, setProduct, id) => {
  const res = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => console.log("ERR : ", err));

  dispatch(setProduct(res.data));
};

export const fetchCategoriesProducts = async (
  dispatch,
  setProducts,
  category
) => {
  if (category === "all") {
    const res = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => console.log("ERR : ", err));

    dispatch(setProducts(res.data));
  } else {
    const res = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((err) => console.log("ERR : ", err));

    dispatch(setProducts(res.data));
  }
};
