import React, { useEffect } from "react";
import { fetchProducts } from "../apis/apis";
import Cards from "../components/card/Cards";
import ProductsOptions from "../components/productsOptions/ProductsOptions";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch, setProducts);
  }, []);

  return (
    <div className="home">
      <div className="container">
        <ProductsOptions />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
