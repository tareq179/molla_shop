import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

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
      </Switch>
    </Router>
  );
}

export default App;
