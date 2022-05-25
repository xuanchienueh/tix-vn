import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import HomeTemplace from "./templates/HomeTemplace/HomeTemplace";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplace from "./templates/checkoutTemplace/CheckoutTemplace";
import Checkout from "./pages/checkout/Checkout";
import UserTemplace from "./templates/UserTemplace/UserTemplace";
import Loading from "./pages/loading/Loading";

const history = createBrowserHistory();
// const CheckoutTemplace = lazy(() =>
//   import("./templates/checkoutTemplace/CheckoutTemplace")
// );

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        {/* <CheckoutTemplace path="/register" exact Component={Register} /> */}
        <HomeTemplace path="/contact" exact Component={Contact} />
        <HomeTemplace path="/news" exact Component={News} />
        <HomeTemplace path="/home" exact Component={Home} />
        <HomeTemplace path="/detail/:id" exact Component={Detail} />
        {/* <Route path="/login" exact component={Login} /> */}
        {/* <Route path="/register" exact component={Register} /> */}
        {/* <Suspense fallback={<div>LOADING.....</div>}> */}
        <CheckoutTemplace
          path="/checkout/:maLichChieu"
          exact
          Component={Checkout}
        />
        {/* </Suspense> */}
        <UserTemplace path="/login" exact Component={Login} />
        <UserTemplace path="/register" exact component={Register} />

        <HomeTemplace path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}
export { history };
export default App;
