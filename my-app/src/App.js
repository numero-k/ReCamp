import logo from "./logo.svg";
import "./App.css";
//import { Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductsDetail";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/productDetail" component={ProductDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
