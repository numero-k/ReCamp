import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
//import { Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductsDetail";
import Counter from "./components/Counter";
import axios from "axios";
import login from "./pages/login";
import signup from "./pages/signup";

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
            <Route path="/products" component={Products} />
            <Route path="/productDetail" component={ProductDetail} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
