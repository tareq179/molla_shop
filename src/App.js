import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/productList">
          <ProductList />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
