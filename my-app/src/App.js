import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
//import { Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductsDetail";
import Counter from "./components/Counter";
import axios from "axios";
import login from "./pages/login";

import Tent from "./pages/categories/Tent";
import Burner from "./pages/categories/Burner";
import Brazier from "./pages/categories/Brazier";
import Coppell from "./pages/categories/Coppell";
import Tarp from "./pages/categories/Tarp";
import SleepingBag from "./pages/categories/SleepingBag";
import Amplify, { API } from "aws-amplify";
import awsmobile from "./aws-exports";

Amplify.configure(awsmobile);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "seon",
      test: " ",
    };
  }

  componentDidMount() {
    this._dbTest();
  }

  _dbTest = async () => {
    const res = await axios.get("/api");
    console.log(res.data);
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reports" component={Reports} />
            <Route path="/products" component={ProductList} />
            <Route path="/products/*" component={ProductList} />
            <Route path="/tent" component={Tent} />
            <Route path="/burner" component={Burner} />
            <Route path="/tarp" component={Tarp} />
            <Route path="/brazier" component={Brazier} />
            <Route path="/sleepingbag" component={SleepingBag} />
            <Route path="/coppell" component={Coppell} />
            <Route path="/productDetail" component={ProductDetail} />
            <Route path="/login" component={login} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
