import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";
import Bag from "./pages/bag/Bag";

const App = () => {
  return (
    <BrowserRouter basename="/react">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bag" component={Bag} />
        <Route path="/products/:id" exact component={ProductDetails} />
        <Route>404 Not Found</Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
