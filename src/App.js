import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
