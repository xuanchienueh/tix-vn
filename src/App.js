import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import { HomeTemplace } from "./templates/HomeTemplace/HomeTemplace";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplace path="/contact" exact Component={Contact} />
        <HomeTemplace path="/news" exact Component={News} />
        <HomeTemplace path="/login" exact Component={Login} />
        <HomeTemplace path="/register" exact Component={Register} />
        <HomeTemplace path="/home" exact Component={Home} />
        <HomeTemplace path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
